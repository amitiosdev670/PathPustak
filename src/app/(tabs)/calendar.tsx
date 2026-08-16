import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { HinduMonthGrid } from '@/components/HinduMonthGrid';
import { MandirBand } from '@/components/MandirBand';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { UpvaasDateRow } from '@/components/UpvaasDateRow';
import { eventsInMonth, eventsOn, isUpvaas, vratEvents } from '@/content/calendar';
import { HINDU_MONTH, getPanchangDay, hinduMonthLabel, pakshaName, tithiName } from '@/content/hindu-calendar';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { formatMonthYear, shiftMonth, todayInIndia } from '@/lib/date';

type FilterId = 'upvaas' | 'ekadashi' | 'pradosh' | 'sankashti' | 'festival' | 'all';

const FILTERS: { id: FilterId; labelKey: 'upvaas' | 'ekadashi' | 'pradosh' | 'sankashti' | 'festival' | 'all' }[] = [
  { id: 'upvaas', labelKey: 'upvaas' },
  { id: 'ekadashi', labelKey: 'ekadashi' },
  { id: 'pradosh', labelKey: 'pradosh' },
  { id: 'sankashti', labelKey: 'sankashti' },
  { id: 'festival', labelKey: 'festival' },
  { id: 'all', labelKey: 'all' },
];

const MIN_MONTH = '2026-01';
const MAX_MONTH = '2026-12';

export default function CalendarScreen() {
  const { s, tx, lang } = useLanguage();
  const theme = useTheme();
  const today = todayInIndia();
  const [month, setMonth] = useState(() => (today.startsWith('2026-') ? today.slice(0, 7) : '2026-08'));
  const [filter, setFilter] = useState<FilterId>('upvaas');
  const [selected, setSelected] = useState(today.startsWith(month) ? today : `${month}-01`);

  const panchang = getPanchangDay(selected);
  const selectedEvents = eventsOn(selected);

  const items = useMemo(() => {
    const source = eventsInMonth(month);
    if (filter === 'all') {
      return source;
    }
    if (filter === 'upvaas') {
      return source.filter(isUpvaas);
    }
    if (filter === 'festival') {
      return source.filter((item) => item.type === 'festival' || item.type === 'purnima');
    }
    return source.filter((item) => item.type === filter);
  }, [filter, month]);

  function changeMonth(delta: number) {
    const next = shiftMonth(month, delta);
    if (next < MIN_MONTH || next > MAX_MONTH) {
      return;
    }
    setMonth(next);
    setSelected(today.startsWith(next) ? today : `${next}-01`);
  }

  return (
    <Screen>
      <MandirBand text="॥ हिन्दू पंचांग · २०२६ ॥" />
      <ThemedText type="heading">{s('hinduCalendar')}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {s('hinduCalendarHint')}
      </ThemedText>

      <View style={[styles.monthBar, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
        <Pressable onPress={() => changeMonth(-1)} style={styles.monthBtn} disabled={month <= MIN_MONTH}>
          <ThemedText type="heading" themeColor={month <= MIN_MONTH ? 'textSecondary' : 'saffron'}>
            ‹
          </ThemedText>
        </Pressable>
        <View style={styles.monthTitleWrap}>
          <ThemedText type="heading" style={styles.monthTitle}>
            {formatMonthYear(month, lang)}
          </ThemedText>
          <ThemedText type="smallBold" themeColor="saffron" style={styles.monthTitle}>
            {hinduMonthLabel(month, lang)}
          </ThemedText>
        </View>
        <Pressable onPress={() => changeMonth(1)} style={styles.monthBtn} disabled={month >= MAX_MONTH}>
          <ThemedText type="heading" themeColor={month >= MAX_MONTH ? 'textSecondary' : 'saffron'}>
            ›
          </ThemedText>
        </Pressable>
      </View>

      <HinduMonthGrid month={month} today={today} selected={selected} onSelect={setSelected} />

      {panchang ? (
        <View style={[styles.tithiCard, { borderColor: theme.goldLine, backgroundColor: theme.card }]}>
          <ThemedText type="smallBold" themeColor="saffron">
            {selected}
          </ThemedText>
          <ThemedText type="heading">
            {HINDU_MONTH[panchang.month][lang]} · {pakshaName(panchang.paksha, lang)} · {tithiName(panchang, lang)}
          </ThemedText>
          {selectedEvents.length === 0 ? (
            <ThemedText type="small" themeColor="textSecondary">
              {s('noVratOnDay')}
            </ThemedText>
          ) : (
            selectedEvents.map((item) => (
              <Pressable key={item.id} onPress={() => router.push(`/event/${item.id}`)}>
                <ThemedText type="smallBold" themeColor="maroon">
                  {tx(item.title)}
                </ThemedText>
              </Pressable>
            ))
          )}
        </View>
      ) : null}

      <View style={styles.chips}>
        {FILTERS.map((item) => {
          const active = filter === item.id;
          return (
            <Pressable
              key={item.id}
              onPress={() => setFilter(item.id)}
              style={[
                styles.chip,
                {
                  backgroundColor: active ? theme.saffron : theme.backgroundElement,
                  borderColor: theme.goldLine,
                },
              ]}>
              <ThemedText type="smallBold" style={active ? styles.activeChip : undefined} themeColor={active ? 'text' : 'textSecondary'}>
                {s(item.labelKey)}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>

      <ThemedText type="heading">{s('upvaasDates')}</ThemedText>
      {items.length === 0 ? (
        <ThemedText themeColor="textSecondary">{s('noVratThisMonth')}</ThemedText>
      ) : (
        items.map((item) => (
          <UpvaasDateRow key={item.id} item={item} today={today} onPress={() => router.push(`/event/${item.id}`)} />
        ))
      )}

      <ThemedText type="small" themeColor="textSecondary">
        {lang === 'hi'
          ? `पूरा वर्ष २०२६ · ${vratEvents.length} व्रत-त्योहार · भारत (आईएसटी)`
          : `Full year 2026 · ${vratEvents.length} vrats & festivals · India (IST)`}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {s('panchangNote')}
      </ThemedText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  monthBar: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.two,
  },
  monthBtn: {
    minWidth: 44,
    alignItems: 'center',
    paddingVertical: Spacing.one,
  },
  monthTitleWrap: {
    flex: 1,
  },
  monthTitle: {
    textAlign: 'center',
  },
  tithiCard: {
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
    borderWidth: StyleSheet.hairlineWidth,
  },
  activeChip: {
    color: '#fff',
  },
});
