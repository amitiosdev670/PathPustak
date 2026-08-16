import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type MandirBandProps = {
  text?: string;
};

export function MandirBand({ text = '॥ श्री राम जय राम जय जय राम ॥' }: MandirBandProps) {
  const theme = useTheme();

  return (
    <View style={[styles.band, { borderColor: theme.goldLine, backgroundColor: theme.backgroundElement }]}>
      <View style={[styles.hair, { backgroundColor: theme.goldLine }]} />
      <ThemedText type="band" themeColor="maroon" style={styles.text}>
        {text}
      </ThemedText>
      <View style={[styles.hair, { backgroundColor: theme.goldLine }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  band: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.two,
    alignItems: 'center',
    gap: Spacing.one,
  },
  hair: {
    height: StyleSheet.hairlineWidth,
    alignSelf: 'stretch',
    opacity: 0.7,
  },
  text: {
    textAlign: 'center',
    letterSpacing: 0.4,
  },
});
