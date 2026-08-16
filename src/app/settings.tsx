import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Switch, View } from 'react-native';

import { LangToggle } from '@/components/LangToggle';
import { ParamparaBox } from '@/components/ParamparaBox';
import { Screen } from '@/components/Screen';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';
import { getGlobalParampara, setGlobalParampara } from '@/lib/parampara';
import {
  areRemindersEnabled,
  cancelVratReminders,
  requestReminderPermission,
  scheduleVratReminders,
  setRemindersEnabledFlag,
} from '@/lib/reminders';

export default function SettingsScreen() {
  const { s, lang } = useLanguage();
  const theme = useTheme();
  const [enabled, setEnabled] = useState(false);
  const [busy, setBusy] = useState(false);
  const [familyNote, setFamilyNote] = useState('');

  useEffect(() => {
    void areRemindersEnabled().then(setEnabled);
    void getGlobalParampara().then(setFamilyNote);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    void scheduleVratReminders(lang);
  }, [enabled, lang]);

  async function toggleReminders(next: boolean) {
    setBusy(true);
    try {
      if (!next) {
        await cancelVratReminders();
        await setRemindersEnabledFlag(false);
        setEnabled(false);
        return;
      }
      const allowed = await requestReminderPermission();
      if (!allowed) {
        Alert.alert(s('reminders'), s('permissionNeeded'));
        return;
      }
      await scheduleVratReminders(lang);
      await setRemindersEnabledFlag(true);
      setEnabled(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <Screen>
      <ThemedText type="heading">{s('language')}</ThemedText>
      <View style={styles.row}>
        <ThemedText>
          {s('hindi')} / {s('english')}
        </ThemedText>
        <LangToggle />
      </View>

      <ParamparaBox
        label={s('paramparaTitle')}
        hint={s('paramparaGlobalHint')}
        value={familyNote}
        onSave={(note) => {
          setFamilyNote(note);
          void setGlobalParampara(note);
        }}
      />

      <View style={[styles.card, { backgroundColor: theme.paper, borderColor: theme.goldLine }]}>
        <View style={styles.row}>
          <View style={styles.flex}>
            <ThemedText type="heading">{s('reminders')}</ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {s('remindersBody')}
            </ThemedText>
          </View>
          <Switch
            value={enabled}
            disabled={busy}
            onValueChange={(value) => void toggleReminders(value)}
            trackColor={{ true: theme.saffron, false: theme.backgroundSelected }}
          />
        </View>
        <ThemedText type="smallBold" themeColor="saffron">
          {enabled ? s('reminderOn') : s('reminderOff')}
        </ThemedText>
      </View>

      <ThemedText type="small" themeColor="textSecondary">
        {s('panchangNote')}
      </ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {s('platforms')}
      </ThemedText>

      <Pressable onPress={() => void toggleReminders(enabled)} disabled={busy}>
        <ThemedText type="small" themeColor="textSecondary">
          पाठ पुस्तक · Expo SDK 57 · Android + iOS
        </ThemedText>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Spacing.three,
  },
  flex: {
    flex: 1,
    gap: Spacing.one,
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: Spacing.three,
    gap: Spacing.two,
  },
});
