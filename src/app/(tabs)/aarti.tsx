import { router } from 'expo-router';

import { DarshanStrip } from '@/components/DarshanStrip';
import { MandirBand } from '@/components/MandirBand';
import { PathRow } from '@/components/PathRow';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { aartis } from '@/content';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AartiScreen() {
  const { s, tx } = useLanguage();

  return (
    <Screen>
      <MandirBand text="॥ आरती श्री राधाकृष्ण जी की ॥" />
      <DarshanStrip />
      <ThemedText type="small" themeColor="textSecondary">
        {s('offline')}
      </ThemedText>
      {aartis.map((item) => (
        <PathRow
          key={item.id}
          mark="दीप"
          deityHint={item}
          title={tx(item.title)}
          subtitle={tx(item.deity)}
          meta={tx(item.summary)}
          onPress={() => router.push(`/reader/aarti/${item.id}`)}
        />
      ))}
    </Screen>
  );
}
