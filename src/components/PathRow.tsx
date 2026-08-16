import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { ThemedText } from '@/components/themed-text';
import type { DeityHint } from '@/content/deities';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type PathRowProps = {
  title: string;
  subtitle?: string;
  meta?: string;
  mark?: string;
  deityHint?: DeityHint;
  onPress: () => void;
};

export function PathRow({ title, subtitle, meta, mark, deityHint, onPress }: PathRowProps) {
  const theme = useTheme();

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.row,
        {
          borderColor: theme.goldLine,
          backgroundColor: theme.paper,
          opacity: pressed ? 0.88 : 1,
        },
      ]}>
      {deityHint ? <DeityImage hint={deityHint} size="md" /> : null}
      {!deityHint && mark ? (
        <View style={[styles.mark, { borderColor: theme.goldLine }]}>
          <ThemedText type="smallBold" themeColor="maroon">
            {mark}
          </ThemedText>
        </View>
      ) : null}
      <View style={styles.body}>
        <ThemedText type="heading" style={styles.title}>
          {title}
        </ThemedText>
        {subtitle ? (
          <ThemedText type="small" themeColor="textSecondary">
            {subtitle}
          </ThemedText>
        ) : null}
        {meta ? (
          <ThemedText type="smallBold" themeColor="saffron">
            {meta}
          </ThemedText>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  mark: {
    minWidth: 36,
    alignItems: 'center',
    paddingTop: 2,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingRight: Spacing.two,
  },
  body: {
    flex: 1,
    gap: 4,
  },
  title: {
    fontSize: 20,
    lineHeight: 28,
  },
});
