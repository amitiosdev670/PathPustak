import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import type { VratEvent } from '@/content/types';
import { isUpvaas } from '@/content/calendar';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { dayNumber, formatWeekday } from '@/lib/date';

type UpvaasDateRowProps = {
  item: VratEvent;
  today: string;
  onPress: () => void;
};

export function UpvaasDateRow({ item, today, onPress }: UpvaasDateRowProps) {
  const theme = useTheme();
  const { tx, lang, s } = useLanguage();
  const isToday = item.date === today;
  const past = item.date < today;
  const fast = isUpvaas(item);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        {
          borderColor: isToday ? theme.saffron : theme.goldLine,
          backgroundColor: isToday ? theme.backgroundSelected : theme.paper,
          opacity: pressed ? 0.88 : past ? 0.72 : 1,
        },
      ]}>
      <View style={[styles.dateBox, { borderColor: theme.goldLine, backgroundColor: theme.backgroundElement }]}>
        <ThemedText type="display" style={styles.dayNum}>
          {dayNumber(item.date)}
        </ThemedText>
        <ThemedText type="smallBold" themeColor="maroon">
          {item.date.slice(5, 7)}/{item.date.slice(0, 4)}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {formatWeekday(item.date, lang)}
        </ThemedText>
      </View>
      <View style={styles.body}>
        {isToday ? (
          <ThemedText type="smallBold" themeColor="saffron">
            {lang === 'hi' ? 'आज' : 'Today'}
          </ThemedText>
        ) : null}
        <ThemedText type="heading" style={styles.title}>
          {tx(item.title)}
        </ThemedText>
        <ThemedText type="smallBold" themeColor="saffron">
          {fast ? s('upvaas') : s('festival')} · {tx(item.deity)}
        </ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          {item.date}
        </ThemedText>
      </View>
      <DeityImage hint={item} size="md" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 1,
    padding: Spacing.two,
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'stretch',
  },
  dateBox: {
    width: 88,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.one,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },
  dayNum: {
    fontSize: 32,
    lineHeight: 38,
  },
  body: {
    flex: 1,
    gap: 4,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
  },
});
