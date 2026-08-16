import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing, VerseLabelEn, VerseLabelHi } from '@/constants/theme';
import type { Lang, Verse } from '@/content/types';
import { useTheme } from '@/hooks/use-theme';

type VerseBlockProps = {
  verse: Verse;
  index: number;
  lang: Lang;
};

export function VerseBlock({ verse, index, lang }: VerseBlockProps) {
  const theme = useTheme();
  const label = verse.label
    ? lang === 'hi'
      ? VerseLabelHi[verse.label]
      : VerseLabelEn[verse.label]
    : lang === 'hi'
      ? `पाठ ${index + 1}`
      : `Verse ${index + 1}`;

  return (
    <View style={styles.wrap}>
      <View style={[styles.rule, { backgroundColor: theme.goldLine }]} />
      <ThemedText type="smallBold" themeColor="saffron" style={styles.label}>
        {label}
      </ThemedText>
      <ThemedText type="verse">{verse.hi}</ThemedText>
      {verse.en ? (
        <ThemedText type="meaning" themeColor="textSecondary">
          {verse.en}
        </ThemedText>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: Spacing.two,
    paddingVertical: Spacing.two,
  },
  rule: {
    height: StyleSheet.hairlineWidth,
    opacity: 0.55,
  },
  label: {
    letterSpacing: 1.2,
  },
});
