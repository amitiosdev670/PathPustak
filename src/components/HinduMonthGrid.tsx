import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { eventsOn, isUpvaas } from '@/content/calendar';
import {
  getPanchangDay,
  gregorianDaysInMonth,
  tithiShort,
  weekdayIndex,
} from '@/content/hindu-calendar';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';

const WEEK_HI = ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि'];
const WEEK_EN = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

type HinduMonthGridProps = {
  month: string;
  today: string;
  selected?: string;
  onSelect: (date: string) => void;
};

export function HinduMonthGrid({ month, today, selected, onSelect }: HinduMonthGridProps) {
  const theme = useTheme();
  const { lang } = useLanguage();
  const days = gregorianDaysInMonth(month);
  const pad = days[0] ? weekdayIndex(days[0]) : 0;
  const labels = lang === 'hi' ? WEEK_HI : WEEK_EN;

  return (
    <View style={[styles.wrap, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
      <View style={styles.weekRow}>
        {labels.map((label) => (
          <View key={label} style={styles.cell}>
            <ThemedText type="smallBold" themeColor="maroon" style={styles.weekLabel}>
              {label}
            </ThemedText>
          </View>
        ))}
      </View>
      <View style={styles.grid}>
        {Array.from({ length: pad }).map((_, index) => (
          <View key={`pad-${index}`} style={styles.cell} />
        ))}
        {days.map((date) => {
          const panchang = getPanchangDay(date);
          const events = eventsOn(date);
          const fast = events.some(isUpvaas);
          const fest = events.length > 0;
          const isToday = date === today;
          const isSelected = date === selected;
          return (
            <Pressable
              key={date}
              onPress={() => onSelect(date)}
              style={[
                styles.cell,
                styles.day,
                {
                  borderColor: isSelected ? theme.saffron : isToday ? theme.gold : 'transparent',
                  backgroundColor: isSelected
                    ? theme.backgroundSelected
                    : fest
                      ? theme.backgroundElement
                      : 'transparent',
                },
              ]}>
              <ThemedText type="smallBold" style={styles.num}>
                {date.slice(8, 10).replace(/^0/, '')}
              </ThemedText>
              {panchang ? (
                <ThemedText type="small" themeColor="textSecondary" style={styles.tithi}>
                  {tithiShort(panchang, lang)}
                </ThemedText>
              ) : null}
              {fest ? (
                <View style={[styles.dot, { backgroundColor: fast ? theme.saffron : theme.gold }]} />
              ) : (
                <View style={styles.dotSpacer} />
              )}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderWidth: 1,
    padding: Spacing.two,
  },
  weekRow: {
    flexDirection: 'row',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    width: '14.28%',
    alignItems: 'center',
    minHeight: 52,
    paddingVertical: 4,
  },
  day: {
    borderWidth: 1,
    borderRadius: 6,
  },
  weekLabel: {
    fontSize: 11,
    fontFamily: Fonts.devanagariBold,
  },
  num: {
    fontSize: 14,
    lineHeight: 18,
  },
  tithi: {
    fontSize: 10,
    lineHeight: 13,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    marginTop: 2,
  },
  dotSpacer: {
    height: 7,
  },
});
