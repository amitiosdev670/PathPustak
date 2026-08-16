import { Stack, router } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { MandirBand } from '@/components/MandirBand';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { getVratCycles, type VratCycle } from '@/content/vrat-cycles';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { todayInIndia } from '@/lib/date';
import { getCycleDone, getSantoshiStart, setSantoshiStart, toggleCycleDate } from '@/lib/vrat-tracker';

export default function TrackerScreen() {
  const { tx, lang, s } = useLanguage();
  const theme = useTheme();
  const today = todayInIndia();
  const [santoshiStart, setStart] = useState<string | null>(null);
  const [doneMap, setDoneMap] = useState<Record<string, string[]>>({});

  const cycles = getVratCycles(santoshiStart ?? today);

  const reload = useCallback(async () => {
    const start = await getSantoshiStart();
    setStart(start);
    const next: Record<string, string[]> = {};
    for (const cycle of getVratCycles(start ?? today)) {
      next[cycle.id] = await getCycleDone(cycle.id);
    }
    setDoneMap(next);
  }, [today]);

  useEffect(() => {
    void reload();
  }, [reload]);

  async function toggle(cycle: VratCycle, date: string) {
    const next = await toggleCycleDate(cycle.id, date);
    setDoneMap((current) => ({ ...current, [cycle.id]: next }));
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: s('trackerTitle') }} />
      <MandirBand text={lang === 'hi' ? '॥ व्रत माला ॥' : '॥ Vrat mala ॥'} />
      <ThemedText type="small" themeColor="textSecondary">
        {s('trackerHint')}
      </ThemedText>

      {cycles.map((cycle) => {
        const done = doneMap[cycle.id] ?? [];
        const marked = done.filter((date) => cycle.dates.includes(date)).length;
        const total = cycle.dates.length;
        const ratio = total === 0 ? 0 : marked / total;
        const complete = marked >= total && total > 0;
        return (
          <View key={cycle.id} style={[styles.card, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
            <View style={styles.head}>
              <DeityImage hint={cycle.deityHint} size="md" />
              <View style={styles.flex}>
                <ThemedText type="heading">{tx(cycle.title)}</ThemedText>
                <ThemedText type="small" themeColor="textSecondary">
                  {tx(cycle.summary)}
                </ThemedText>
                <ThemedText type="smallBold" themeColor="saffron">
                  {marked}/{total}
                  {complete ? ` · ${s('udyapanReady')}` : ''}
                </ThemedText>
              </View>
            </View>
            <View style={[styles.track, { backgroundColor: theme.backgroundElement }]}>
              <View style={[styles.fill, { width: `${Math.round(ratio * 100)}%`, backgroundColor: theme.saffron }]} />
            </View>
            {cycle.flexibleStart ? (
              <Pressable
                onPress={() => {
                  void setSantoshiStart(today).then(() => reload());
                }}
                style={[styles.chip, { borderColor: theme.goldLine }]}>
                <ThemedText type="smallBold" themeColor="maroon">
                  {s('startSixteenFromToday')}
                </ThemedText>
              </Pressable>
            ) : null}
            <View style={styles.dates}>
              {cycle.dates.map((date, index) => {
                const checked = done.includes(date);
                const isToday = date === today;
                const past = date < today;
                return (
                  <Pressable
                    key={date}
                    onPress={() => void toggle(cycle, date)}
                    style={[
                      styles.dateChip,
                      {
                        borderColor: isToday ? theme.saffron : theme.goldLine,
                        backgroundColor: checked ? theme.saffron : theme.backgroundElement,
                        opacity: past && !checked ? 0.7 : 1,
                      },
                    ]}>
                    <ThemedText type="smallBold" style={checked ? styles.on : undefined} themeColor={checked ? 'text' : 'maroon'}>
                      {index + 1}
                    </ThemedText>
                    <ThemedText type="small" style={checked ? styles.on : undefined} themeColor={checked ? 'text' : 'textSecondary'}>
                      {date.slice(5)}
                    </ThemedText>
                  </Pressable>
                );
              })}
            </View>
            {cycle.id === 'santoshi-16' ? (
              <Pressable onPress={() => router.push('/reader/katha/santoshi-katha')}>
                <ThemedText type="smallBold" themeColor="saffron">
                  {s('readSantoshiKatha')}
                </ThemedText>
              </Pressable>
            ) : null}
          </View>
        );
      })}
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  head: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  flex: {
    flex: 1,
    gap: 4,
  },
  track: {
    height: 8,
    overflow: 'hidden',
  },
  fill: {
    height: 8,
  },
  chip: {
    alignSelf: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  dates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  dateChip: {
    borderWidth: 1,
    minWidth: 52,
    alignItems: 'center',
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.one,
  },
  on: {
    color: '#fff',
  },
});
