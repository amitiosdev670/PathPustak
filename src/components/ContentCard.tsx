import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing, VratTypeColors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ContentCardProps = {
  title: string;
  subtitle?: string;
  badge?: string;
  badgeType?: string;
  onPress: () => void;
};

export function ContentCard({ title, subtitle, badge, badgeType, onPress }: ContentCardProps) {
  const theme = useTheme();
  const badgeColor = badgeType ? (VratTypeColors[badgeType] ?? theme.saffron) : theme.saffron;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.backgroundSelected, opacity: pressed ? 0.85 : 1 },
      ]}>
      {badge ? (
        <View style={[styles.badge, { backgroundColor: badgeColor }]}>
          <ThemedText type="smallBold" style={styles.badgeText}>
            {badge}
          </ThemedText>
        </View>
      ) : null}
      <ThemedText type="heading">{title}</ThemedText>
      {subtitle ? (
        <ThemedText type="small" themeColor="textSecondary">
          {subtitle}
        </ThemedText>
      ) : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.one,
  },
  badge: {
    alignSelf: 'flex-start',
    borderRadius: 999,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.half,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
  },
});
