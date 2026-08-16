import { router } from 'expo-router';

import { MandirBand } from '@/components/MandirBand';
import { PathRow } from '@/components/PathRow';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { kathas, stotras } from '@/content';
import { sundarkandSections } from '@/content/sundarkand';
import { useLanguage } from '@/i18n/LanguageContext';

export default function PathScreen() {
  const { s, tx, lang } = useLanguage();
  const mantras = stotras.filter((item) => item.group === 'mantra');
  const chalisa = stotras.filter((item) => item.group === 'stotra');

  return (
    <Screen>
      <MandirBand text="॥ श्री राम जय राम जय जय राम ॥" />
      <ThemedText type="small" themeColor="textSecondary">
        {s('sundarkandNote')}
      </ThemedText>

      <ThemedText type="heading">{s('sundarkand')}</ThemedText>
      <PathRow
        mark="॥"
        deityHint={{ id: 'sundarkand-01' }}
        title={s('fullPathOneScreen')}
        subtitle={s('sundarkandNote')}
        meta={lang === 'hi' ? `${sundarkandSections.length} प्रसंग · लगातार स्क्रॉल` : `${sundarkandSections.length} sections · continuous scroll`}
        onPress={() => router.push('/sundarkand')}
      />
      {sundarkandSections.map((item) => (
        <PathRow
          key={item.id}
          mark={String(item.seriesIndex ?? '')}
          deityHint={item}
          title={tx(item.title)}
          subtitle={lang === 'hi' ? 'इसी पाठ में यहीं से जारी' : 'Jump here — same continuous path'}
          meta={
            lang === 'hi'
              ? `${item.verses.length} छंद`
              : `${item.verses.length} verses`
          }
          onPress={() => router.push({ pathname: '/sundarkand', params: { section: item.id } })}
        />
      ))}

      <ThemedText type="heading">{s('stotra')}</ThemedText>
      {chalisa.map((item) => (
        <PathRow
          key={item.id}
          mark="स्तोत्र"
          deityHint={item}
          title={tx(item.title)}
          subtitle={tx(item.summary)}
          onPress={() => router.push(`/reader/path/${item.id}`)}
        />
      ))}

      <ThemedText type="heading">{s('mantra')}</ThemedText>
      {mantras.map((item) => (
        <PathRow
          key={item.id}
          mark="ॐ"
          deityHint={item}
          title={tx(item.title)}
          subtitle={tx(item.summary)}
          onPress={() => router.push(`/reader/path/${item.id}`)}
        />
      ))}

      <ThemedText type="heading">{s('katha')}</ThemedText>
      {kathas.map((item) => (
        <PathRow
          key={item.id}
          mark="कथा"
          deityHint={item}
          title={tx(item.title)}
          subtitle={tx(item.summary)}
          onPress={() => router.push(`/reader/katha/${item.id}`)}
        />
      ))}
    </Screen>
  );
}
