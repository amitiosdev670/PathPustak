import { router } from 'expo-router';
import { Pressable, ScrollView, StyleSheet } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { ThemedText } from '@/components/themed-text';
import { darshanDeities } from '@/content/deities';
import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n/LanguageContext';

export function DarshanStrip() {
  const { tx } = useLanguage();

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}>
      {darshanDeities.map((item) => (
        <Pressable
          key={item.key}
          onPress={() => router.push(`/reader/aarti/${item.aartiId}`)}
          style={({ pressed }) => [styles.item, { opacity: pressed ? 0.85 : 1 }]}>
          <DeityImage deityKey={item.key} size="lg" />
          <ThemedText type="smallBold" themeColor="maroon" style={styles.label}>
            {tx(item.name)}
          </ThemedText>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    gap: Spacing.three,
    paddingRight: Spacing.three,
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    gap: Spacing.one,
    width: 112,
  },
  label: {
    textAlign: 'center',
  },
});
