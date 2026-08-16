import { Stack, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { DeityImage } from '@/components/DeityImage';
import { MandirBand } from '@/components/MandirBand';
import { ParamparaBox } from '@/components/ParamparaBox';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { getEventById } from '@/content/calendar';
import { HINDU_MONTH, getPanchangDay, pakshaName, tithiName } from '@/content/hindu-calendar';
import { eventSlug, getVratGuide } from '@/content/vrat-guides';
import { Spacing, VratTypeColors } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { dayNumber, formatDisplayDate, formatWeekday } from '@/lib/date';
import { getGlobalParampara, getParampara, setSlugParampara, setTypeParampara } from '@/lib/parampara';

function GuideCard({ title, body }: { title: string; body: string }) {
  const theme = useTheme();
  return (
    <View style={[styles.card, { backgroundColor: theme.paper, borderColor: theme.goldLine }]}>
      <ThemedText type="heading">{title}</ThemedText>
      <ThemedText>{body}</ThemedText>
    </View>
  );
}

export default function EventScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { tx, lang, s } = useLanguage();
  const theme = useTheme();
  const event = id ? getEventById(id) : undefined;
  const slug = event ? eventSlug(event.id) : '';
  const [globalNote, setGlobalNote] = useState('');
  const [typeNote, setTypeNote] = useState('');
  const [slugNote, setSlugNote] = useState('');

  useEffect(() => {
    if (!event) {
      return;
    }
    void getGlobalParampara().then(setGlobalNote);
    void getParampara(event.type, slug).then((notes) => {
      setTypeNote(notes.typeNote);
      setSlugNote(notes.slugNote);
    });
  }, [event, slug]);

  if (!event) {
    return (
      <Screen>
        <ThemedText>{lang === 'hi' ? 'व्रत नहीं मिला।' : 'Vrat not found.'}</ThemedText>
      </Screen>
    );
  }

  const badgeColor = VratTypeColors[event.type] ?? theme.saffron;
  const guide = getVratGuide(event.type, slug);
  const panchang = getPanchangDay(event.date);

  return (
    <Screen>
      <Stack.Screen options={{ title: tx(event.title) }} />
      <MandirBand />
      <View style={styles.murti}>
        <DeityImage hint={event} size="hero" />
      </View>
      <View style={[styles.badge, { backgroundColor: badgeColor }]}>
        <ThemedText type="smallBold" style={styles.badgeText}>
          {event.type}
        </ThemedText>
      </View>
      <View style={[styles.dateHero, { borderColor: theme.goldLine, backgroundColor: theme.backgroundElement }]}>
        <ThemedText type="display" style={styles.dateNum}>
          {dayNumber(event.date)}
        </ThemedText>
        <ThemedText type="heading">{formatDisplayDate(event.date, lang)}</ThemedText>
        <ThemedText type="smallBold" themeColor="saffron">
          {event.date} · IST · {formatWeekday(event.date, lang)}
        </ThemedText>
        {panchang ? (
          <ThemedText type="small" themeColor="maroon">
            {HINDU_MONTH[panchang.month][lang]} · {pakshaName(panchang.paksha, lang)} · {tithiName(panchang, lang)}
          </ThemedText>
        ) : null}
      </View>
      <ThemedText type="display">{tx(event.title)}</ThemedText>
      <ThemedText themeColor="textSecondary">
        {s('deity')}: {tx(event.deity)}
      </ThemedText>
      <ThemedText type="meaning" themeColor="maroon">
        {tx(event.description)}
      </ThemedText>

      <GuideCard title={s('vratMeaning')} body={tx(guide.meaning)} />
      <GuideCard title={s('vratVidhi')} body={tx(guide.vidhi)} />
      <GuideCard title={s('vratFood')} body={tx(guide.food)} />
      <GuideCard title={s('vratParana')} body={tx(guide.parana)} />
      <GuideCard title={s('vratSamagri')} body={tx(guide.samagri)} />
      <GuideCard title={s('vratWho')} body={tx(guide.who)} />

      {globalNote ? (
        <GuideCard title={s('paramparaTitle')} body={globalNote} />
      ) : null}
      <ParamparaBox
        label={s('paramparaTitle')}
        hint={s('paramparaTypeHint')}
        value={typeNote}
        onSave={(note) => {
          setTypeNote(note);
          void setTypeParampara(event.type, note);
        }}
      />
      <ParamparaBox
        label={lang === 'hi' ? 'इस तिथि की रीति' : 'Custom for this tithi'}
        hint={s('paramparaSlugHint')}
        value={slugNote}
        onSave={(note) => {
          setSlugNote(note);
          void setSlugParampara(slug, note);
        }}
      />

      {event.relatedKind && event.relatedId ? (
        <Pressable
          onPress={() => {
            if (event.relatedId?.startsWith('sundarkand')) {
              router.push({ pathname: '/sundarkand', params: { section: event.relatedId } });
              return;
            }
            router.push(`/reader/${event.relatedKind}/${event.relatedId}`);
          }}
          style={[styles.card, { backgroundColor: theme.backgroundElement, borderColor: theme.goldLine }]}>
          <ThemedText type="heading">{s('readRelated')}</ThemedText>
          <ThemedText type="smallBold" themeColor="saffron">
            {s('readKathaForVrat')}
          </ThemedText>
        </Pressable>
      ) : null}

      <ThemedText type="small" themeColor="textSecondary">
        {s('panchangNote')}
      </ThemedText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  murti: {
    alignItems: 'center',
  },
  badge: {
    alignSelf: 'flex-start',
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  badgeText: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.two,
  },
  dateHero: {
    borderWidth: 1,
    padding: Spacing.three,
    alignItems: 'center',
    gap: Spacing.one,
  },
  dateNum: {
    fontSize: 48,
    lineHeight: 54,
  },
});
