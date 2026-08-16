import { Stack, useLocalSearchParams } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { DeityImage } from '@/components/DeityImage';
import { MandirBand } from '@/components/MandirBand';
import { ThemedText } from '@/components/themed-text';
import { VerseBlock } from '@/components/VerseBlock';
import { MaxContentWidth, Spacing } from '@/constants/theme';
import { sundarkandSections } from '@/content/sundarkand';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { setLastSundarkandId } from '@/lib/path-progress';

export default function SundarkandScreen() {
  const { section } = useLocalSearchParams<{ section?: string | string[] }>();
  const sectionId = Array.isArray(section) ? section[0] : section;
  const { tx, lang, s } = useLanguage();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const scrollRef = useRef<ScrollView>(null);
  const offsets = useRef<Record<string, number>>({});
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeId, setActiveId] = useState(sectionId ?? sundarkandSections[0].id);
  const [measured, setMeasured] = useState(0);

  const scrollToSection = useCallback((id: string, animated = true) => {
    const y = offsets.current[id];
    if (y == null) {
      return;
    }
    scrollRef.current?.scrollTo({ y: Math.max(0, y - 12), animated });
    setActiveId(id);
    void setLastSundarkandId(id);
  }, []);

  useEffect(() => {
    if (measured < sundarkandSections.length) {
      return;
    }
    const target =
      sectionId && sundarkandSections.some((item) => item.id === sectionId)
        ? sectionId
        : sundarkandSections[0].id;
    requestAnimationFrame(() => scrollToSection(target, false));
  }, [measured, sectionId, scrollToSection]);

  function rememberOffset(id: string, y: number) {
    if (offsets.current[id] === y) {
      return;
    }
    offsets.current[id] = y;
    setMeasured((count) => {
      const known = Object.keys(offsets.current).length;
      return known === count ? count : known;
    });
  }

  function onScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const y = event.nativeEvent.contentOffset.y + 48;
    let current = sundarkandSections[0].id;
    for (const item of sundarkandSections) {
      const top = offsets.current[item.id];
      if (top != null && top <= y) {
        current = item.id;
      }
    }
    if (current !== activeId) {
      setActiveId(current);
    }
    if (saveTimer.current) {
      clearTimeout(saveTimer.current);
    }
    saveTimer.current = setTimeout(() => {
      void setLastSundarkandId(current);
    }, 400);
  }

  return (
    <View style={[styles.flex, { backgroundColor: theme.background }]}>
      <Stack.Screen options={{ title: s('sundarkand'), headerBackTitle: s('path') }} />
      <View style={[styles.top, { borderBottomColor: theme.goldLine }]}>
        <MandirBand />
        <View style={styles.murtiRow}>
          <DeityImage deityKey="hanuman" size="lg" />
          <DeityImage deityKey="ram" size="lg" />
        </View>
        <ThemedText type="small" themeColor="textSecondary">
          {s('sundarkandScrollHint')}
        </ThemedText>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
          {sundarkandSections.map((item) => {
            const selected = item.id === activeId;
            return (
              <Pressable
                key={item.id}
                onPress={() => scrollToSection(item.id)}
                style={[
                  styles.chip,
                  {
                    backgroundColor: selected ? theme.saffron : theme.backgroundElement,
                    borderColor: theme.goldLine,
                  },
                ]}>
                <ThemedText type="smallBold" style={selected ? styles.chipOn : undefined} themeColor={selected ? 'text' : 'maroon'}>
                  {item.seriesIndex}. {tx(item.title).replace(/^सुंदरकांड — /, '').replace(/^Sundarkand — /, '')}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView
        ref={scrollRef}
        style={styles.flex}
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + Spacing.six },
        ]}
        keyboardShouldPersistTaps="handled"
        scrollEventThrottle={80}
        onScroll={onScroll}>
        {sundarkandSections.map((item) => (
          <View key={item.id} onLayout={(event) => rememberOffset(item.id, event.nativeEvent.layout.y)}>
            <View
              style={[
                styles.sectionHead,
                {
                  borderColor: theme.goldLine,
                  backgroundColor: theme.paper,
                  marginTop: item.seriesIndex === 1 ? 0 : Spacing.four,
                },
              ]}>
              <View style={styles.sectionMurti}>
                <DeityImage hint={item} size="sm" />
                <ThemedText type="smallBold" themeColor="saffron">
                  {s('sectionOf')} {item.seriesIndex} / {item.seriesTotal}
                </ThemedText>
              </View>
              <ThemedText type="heading">{tx(item.title)}</ThemedText>
              <ThemedText type="meaning" themeColor="textSecondary">
                {tx(item.summary)}
              </ThemedText>
            </View>
            {item.verses.map((verse, index) => (
              <VerseBlock key={`${item.id}-${index}`} verse={verse} index={index} lang={lang} />
            ))}
          </View>
        ))}
        <ThemedText type="smallBold" themeColor="saffron" style={styles.end}>
          ॥ श्री सीतारामचंद्रार्पणमस्तु ॥
        </ThemedText>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  top: {
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.two,
    paddingBottom: Spacing.two,
    gap: Spacing.two,
    borderBottomWidth: StyleSheet.hairlineWidth,
    maxWidth: MaxContentWidth,
    width: '100%',
    alignSelf: 'center',
  },
  murtiRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: Spacing.three,
    paddingVertical: Spacing.one,
  },
  sectionMurti: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  chips: {
    gap: Spacing.two,
    paddingRight: Spacing.three,
  },
  chip: {
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
  chipOn: {
    color: '#fff',
  },
  content: {
    maxWidth: MaxContentWidth,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: Spacing.three,
    paddingTop: Spacing.three,
  },
  sectionHead: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.one,
    marginTop: Spacing.four,
    marginBottom: Spacing.two,
  },
  end: {
    textAlign: 'center',
    marginTop: Spacing.five,
  },
});
