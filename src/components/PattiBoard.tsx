import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { ThemedText } from '@/components/themed-text';
import type { DeityHint } from '@/content/deities';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type PattiBoardProps = {
  kicker: string;
  title: string;
  body: string;
  footer?: string;
  deityHint?: DeityHint;
  onPress?: () => void;
};

export function PattiBoard({ kicker, title, body, footer, deityHint, onPress }: PattiBoardProps) {
  const theme = useTheme();
  const inner = (
    <View style={[styles.board, { borderColor: theme.goldLine, backgroundColor: theme.card }]}>
      <View style={[styles.innerLine, { borderColor: theme.maroon }]}>
        {deityHint ? (
          <View style={styles.murti}>
            <DeityImage hint={deityHint} size="lg" />
          </View>
        ) : null}
        <ThemedText type="smallBold" themeColor="saffron" style={styles.kicker}>
          {kicker}
        </ThemedText>
        <ThemedText type="heading" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText>{body}</ThemedText>
        {footer ? (
          <ThemedText type="smallBold" themeColor="maroon">
            {footer}
          </ThemedText>
        ) : null}
      </View>
    </View>
  );

  if (!onPress) {
    return inner;
  }

  return (
    <Pressable onPress={onPress} style={({ pressed }) => ({ opacity: pressed ? 0.9 : 1 })}>
      {inner}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  board: {
    borderWidth: 1,
    padding: Spacing.two,
  },
  innerLine: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  murti: {
    alignItems: 'center',
    marginBottom: Spacing.one,
  },
  kicker: {
    letterSpacing: 1.4,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
  },
});
