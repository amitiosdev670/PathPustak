import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function DiyaMark() {
  const theme = useTheme();

  return (
    <View style={[styles.wrap, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
      <ThemedText style={[styles.om, { color: theme.maroon }]}>ॐ</ThemedText>
      <ThemedText type="small" themeColor="saffron" style={styles.caption}>
        दीप जले · हरि स्मरण
      </ThemedText>
      <View style={styles.diyaRow}>
        <View style={[styles.flame, { backgroundColor: theme.diya }]} />
      </View>
      <View style={[styles.bowl, { borderColor: theme.gold, backgroundColor: theme.backgroundElement }]} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.four,
    gap: Spacing.one,
  },
  om: {
    fontSize: 44,
    lineHeight: 52,
    fontWeight: '700',
  },
  caption: {
    letterSpacing: 1,
  },
  diyaRow: {
    alignItems: 'center',
    marginTop: Spacing.one,
  },
  flame: {
    width: 10,
    height: 16,
    borderRadius: 8,
    transform: [{ scaleX: 0.7 }],
  },
  bowl: {
    width: 36,
    height: 10,
    borderWidth: 1,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    marginTop: 2,
  },
});
