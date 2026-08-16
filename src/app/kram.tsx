import { type Href, Stack, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { MandirBand } from '@/components/MandirBand';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { eventsOn } from '@/content/calendar';
import { kramForDate } from '@/content/kram';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { formatDisplayDate, todayInIndia } from '@/lib/date';
import { getKramDone, toggleKramStep } from '@/lib/kram-progress';

export default function KramScreen() {
  const { tx, lang, s } = useLanguage();
  const theme = useTheme();
  const today = todayInIndia();
  const events = eventsOn(today);
  const { event, steps } = kramForDate(today, events);
  const [done, setDone] = useState<string[]>([]);

  useEffect(() => {
    void getKramDone(today).then(setDone);
  }, [today]);

  async function toggle(id: string) {
    setDone(await toggleKramStep(today, id));
  }

  return (
    <Screen>
      <Stack.Screen options={{ title: s('kramTitle') }} />
      <MandirBand text={lang === 'hi' ? '॥ आज का क्रम ॥' : '॥ Today’s order ॥'} />
      <View style={styles.hero}>
        <DeityImage hint={event ?? { id: 'jagdish' }} size="lg" />
        <View style={styles.heroText}>
          <ThemedText type="smallBold" themeColor="saffron">
            {formatDisplayDate(today, lang)}
          </ThemedText>
          <ThemedText type="heading">
            {event ? tx(event.title) : s('nityaKram')}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {s('kramHint')}
          </ThemedText>
        </View>
      </View>

      {steps.map((step, index) => {
        const checked = done.includes(step.id);
        return (
          <View
            key={step.id}
            style={[styles.step, { borderColor: theme.goldLine, backgroundColor: theme.paper }]}>
            <Pressable onPress={() => void toggle(step.id)} style={styles.checkRow}>
              <View
                style={[
                  styles.check,
                  {
                    borderColor: theme.goldLine,
                    backgroundColor: checked ? theme.saffron : theme.backgroundElement,
                  },
                ]}>
                <ThemedText type="smallBold" style={checked ? styles.on : undefined} themeColor={checked ? 'text' : 'maroon'}>
                  {checked ? 'ॐ' : String(index + 1)}
                </ThemedText>
              </View>
              <View style={styles.flex}>
                <ThemedText type="heading">{tx(step.title)}</ThemedText>
                <ThemedText>{tx(step.body)}</ThemedText>
              </View>
            </Pressable>
            {step.href ? (
              <Pressable
                onPress={() => router.push(step.href as Href)}
                style={[styles.link, { borderColor: theme.goldLine }]}>
                <ThemedText type="smallBold" themeColor="saffron">
                  {s('openStep')}
                </ThemedText>
              </Pressable>
            ) : null}
          </View>
        );
      })}

      <ThemedText type="small" themeColor="textSecondary">
        {done.length}/{steps.length} · {s('kramSaved')}
      </ThemedText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'center',
  },
  heroText: {
    flex: 1,
    gap: Spacing.one,
  },
  step: {
    borderWidth: 1,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  checkRow: {
    flexDirection: 'row',
    gap: Spacing.three,
    alignItems: 'flex-start',
  },
  check: {
    width: 36,
    height: 36,
    borderWidth: 1.5,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  on: {
    color: '#fff',
  },
  flex: {
    flex: 1,
    gap: 4,
  },
  link: {
    alignSelf: 'flex-start',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.two,
  },
});
