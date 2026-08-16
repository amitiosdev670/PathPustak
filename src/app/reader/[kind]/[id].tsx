import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { MandirBand } from '@/components/MandirBand';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { VerseBlock } from '@/components/VerseBlock';
import { getScripture } from '@/content';
import { useLanguage } from '@/i18n/LanguageContext';

export default function ReaderScreen() {
  const { kind, id } = useLocalSearchParams<{ kind: string; id: string }>();
  const { tx, lang, s } = useLanguage();
  const scripture = kind && id ? getScripture(kind, id) : undefined;

  if (scripture?.seriesId === 'sundarkand') {
    return <Redirect href={{ pathname: '/sundarkand', params: { section: scripture.id } }} />;
  }

  if (!scripture) {
    return (
      <Screen>
        <ThemedText>{lang === 'hi' ? 'पाठ नहीं मिला।' : 'Reading not found.'}</ThemedText>
      </Screen>
    );
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: tx(scripture.title), headerBackTitle: s('home') }} />
      <MandirBand />
      <View style={styles.murti}>
        <DeityImage hint={scripture} size="hero" />
      </View>
      <ThemedText type="smallBold" themeColor="saffron">
        {tx(scripture.deity)}
      </ThemedText>
      <ThemedText type="display">{tx(scripture.title)}</ThemedText>
      <ThemedText type="meaning" themeColor="textSecondary">
        {tx(scripture.summary)}
      </ThemedText>
      {scripture.verses.map((verse, index) => (
        <VerseBlock key={`${scripture.id}-${index}`} verse={verse} index={index} lang={lang} />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  murti: {
    alignItems: 'center',
  },
});
