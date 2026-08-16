import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { vratEvents } from '@/content/calendar';
import type { Lang } from '@/content/types';
import { addDays, indiaDateAtHour, todayInIndia } from '@/lib/date';

const ENABLED_KEY = 'bhaktipath.reminders.enabled';

if (Platform.OS !== 'web') {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldPlaySound: true,
      shouldSetBadge: false,
      shouldShowBanner: true,
      shouldShowList: true,
    }),
  });
}

export async function areRemindersEnabled(): Promise<boolean> {
  const value = await AsyncStorage.getItem(ENABLED_KEY);
  return value === '1';
}

export async function setRemindersEnabledFlag(enabled: boolean): Promise<void> {
  await AsyncStorage.setItem(ENABLED_KEY, enabled ? '1' : '0');
}

async function ensureAndroidChannel() {
  if (Platform.OS !== 'android') {
    return;
  }
  await Notifications.setNotificationChannelAsync('vrat', {
    name: 'Vrat reminders',
    importance: Notifications.AndroidImportance.HIGH,
    vibrationPattern: [0, 250, 250, 250],
    lightColor: '#C45C26',
  });
}

export async function requestReminderPermission(): Promise<boolean> {
  if (Platform.OS === 'web') {
    return false;
  }
  await ensureAndroidChannel();
  const current = await Notifications.getPermissionsAsync();
  if (current.granted || current.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL) {
    return true;
  }
  const asked = await Notifications.requestPermissionsAsync();
  return asked.granted || asked.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL;
}

export async function cancelVratReminders(): Promise<void> {
  if (Platform.OS === 'web') {
    return;
  }
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export async function scheduleVratReminders(lang: Lang): Promise<number> {
  if (Platform.OS === 'web') {
    return 0;
  }
  await ensureAndroidChannel();
  await cancelVratReminders();

  const today = todayInIndia();
  const upcoming = vratEvents.filter((item) => item.date >= today);
  let scheduled = 0;

  for (const item of upcoming) {
    const eveningBefore = indiaDateAtHour(addDays(item.date, -1), 18, 0);
    const morningOf = indiaDateAtHour(item.date, 5, 30);
    const title = item.title[lang];
    const body =
      lang === 'hi'
        ? `${item.deity.hi} का व्रत। कथा और आरती पाठ पुस्तक में तैयार हैं।`
        : `${item.deity.en} vrat. Katha and aarti are ready in Paath Pustak.`;

    for (const date of [eveningBefore, morningOf]) {
      if (date.getTime() <= Date.now()) {
        continue;
      }
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
          sound: true,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date,
          channelId: 'vrat',
        },
      });
      scheduled += 1;
    }
  }

  return scheduled;
}
