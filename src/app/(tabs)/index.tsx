import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { DarshanStrip } from '@/components/DarshanStrip';
import { DiyaMark } from '@/components/DiyaMark';
import { LangToggle } from '@/components/LangToggle';
import { MandirBand } from '@/components/MandirBand';
import { PathRow } from '@/components/PathRow';
import { PattiBoard } from '@/components/PattiBoard';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { UpvaasDateRow } from '@/components/UpvaasDateRow';
import { eventsOn, upcomingEvents } from '@/content/calendar';
import { sundarkandSections } from '@/content/sundarkand';
import { Spacing } from '@/constants/theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { formatDisplayDate, todayInIndia } from '@/lib/date';
import { getLastSundarkandId } from '@/lib/path-progress';

function greetingKey(date: Date): 'namasteMorning' | 'namasteEvening' {
  const hour = Number(
    new Intl.DateTimeFormat('en-IN', { hour: 'numeric', hour12: false, timeZone: 'Asia/Kolkata' }).format(date),
  );
  return hour >= 16 ? 'namasteEvening' : 'namasteMorning';
}

export default function HomeScreen() {
  const { s, tx, lang } = useLanguage();
  const today = todayInIndia();
  const todays = eventsOn(today);
  const upcoming = upcomingEvents(today, 5).filter((item) => item.date !== today).slice(0, 3);
  const [lastId, setLastId] = useState<string | null>(null);

  useEffect(() => {
    void getLastSundarkandId().then(setLastId);
  }, []);

  const lastSection = lastId ? sundarkandSections.find((item) => item.id === lastId) : undefined;
  const greet = greetingKey(new Date());

  return (
    <Screen>
      <MandirBand />
      <View style={styles.topRow}>
        <View style={styles.flex}>
          <ThemedText type="smallBold" themeColor="saffron">
            {s('appName')}
          </ThemedText>
          <ThemedText type="display">{s(greet)}</ThemedText>
          <ThemedText type="heading" themeColor="maroon">
            {s('greetingSub')}
          </ThemedText>
          <ThemedText type="small" themeColor="textSecondary">
            {formatDisplayDate(today, lang)}
          </ThemedText>
        </View>
        <View style={styles.actions}>
          <LangToggle />
        </View>
      </View>

      <DiyaMark />

      <PathRow
        deityHint={todays[0] ?? { id: 'jagdish' }}
        title={s('kramTitle')}
        subtitle={s('startKram')}
        meta={todays[0] ? tx(todays[0].title) : s('nityaKram')}
        onPress={() => router.push('/kram')}
      />
      <PathRow
        deityHint={{ id: 'santoshi' }}
        title={s('trackerTitle')}
        subtitle={s('openTracker')}
        onPress={() => router.push('/tracker')}
      />

      <ThemedText type="heading">{s('darshan')}</ThemedText>
      <DarshanStrip />

      <ThemedText type="heading">{s('today')}</ThemedText>
      {todays.length === 0 ? (
        <PattiBoard
          kicker={lang === 'hi' ? 'नित्य' : 'Nitya'}
          title={s('greetingSub')}
          body={s('noVratToday')}
          deityHint={{ id: 'jagdish', deity: { hi: 'भगवान विष्णु', en: 'Lord Vishnu' } }}
        />
      ) : (
        todays.map((item) => (
          <PattiBoard
            key={item.id}
            kicker={`${formatDisplayDate(item.date, lang)} · ${tx(item.deity)}`}
            title={tx(item.title)}
            body={tx(item.description)}
            footer={lang === 'hi' ? `${item.date} · पट्टी दबाकर पूरी विधि` : `${item.date} · tap for full vidhi`}
            deityHint={item}
            onPress={() => router.push(`/event/${item.id}`)}
          />
        ))
      )}

      <ThemedText type="heading">{s('quickPath')}</ThemedText>
      {lastSection ? (
        <PathRow
          mark="॥"
          deityHint={lastSection}
          title={s('continuePath')}
          subtitle={tx(lastSection.title)}
          meta={`${lastSection.seriesIndex}/${lastSection.seriesTotal}`}
          onPress={() =>
            router.push({ pathname: '/sundarkand', params: { section: lastSection.id } })
          }
        />
      ) : (
        <PathRow
          mark="१"
          deityHint={sundarkandSections[0]}
          title={s('startSundarkand')}
          subtitle={tx(sundarkandSections[0].title)}
          onPress={() => router.push('/sundarkand')}
        />
      )}
      <PathRow
        mark="च"
        deityHint={{ id: 'hanuman-chalisa' }}
        title={lang === 'hi' ? 'हनुमान चालीसा' : 'Hanuman Chalisa'}
        subtitle={lang === 'hi' ? 'नित्य पाठ · चालीस चौपाई' : 'Daily path · forty chaupais'}
        onPress={() => router.push('/reader/path/hanuman-chalisa')}
      />
      <PathRow
        mark="ॐ"
        deityHint={{ id: 'jagdish' }}
        title={lang === 'hi' ? 'ॐ जय जगदीश हरे' : 'Om Jai Jagdish Hare'}
        subtitle={lang === 'hi' ? 'संध्या आरती' : 'Evening aarti'}
        onPress={() => router.push('/reader/aarti/jagdish')}
      />

      <ThemedText type="heading">{s('nextUpvaas')}</ThemedText>
      {upcoming.map((item) => (
        <UpvaasDateRow
          key={item.id}
          item={item}
          today={today}
          onPress={() => router.push(`/event/${item.id}`)}
        />
      ))}

      <ThemedText type="small" themeColor="textSecondary">
        {s('offline')}
      </ThemedText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    gap: Spacing.two,
    alignItems: 'flex-start',
  },
  flex: {
    flex: 1,
    gap: Spacing.one,
  },
  actions: {
    alignItems: 'flex-end',
    gap: Spacing.two,
  },
});
