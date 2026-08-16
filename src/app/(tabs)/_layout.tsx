import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { router, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import { MandirTabBar } from '@/components/MandirTabBar';
import { mandirHeaderScreenOptions } from '@/components/MandirHeader';
import { useTheme } from '@/hooks/use-theme';
import { useLanguage } from '@/i18n/LanguageContext';

export default function TabLayout() {
  const theme = useTheme();
  const { s } = useLanguage();

  return (
    <Tabs
      tabBar={(props) => <MandirTabBar {...props} />}
      screenOptions={{
        ...mandirHeaderScreenOptions(theme),
        headerRight: () => (
          <Pressable
            onPress={() => router.push('/settings')}
            hitSlop={10}
            accessibilityLabel={s('settings')}
            style={{ marginRight: 8, padding: 4 }}>
            <MaterialCommunityIcons name="cog-outline" size={22} color={theme.maroon} />
          </Pressable>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: s('appName'),
          tabBarLabel: s('home'),
        }}
      />
      <Tabs.Screen
        name="calendar"
        options={{
          title: s('calendar'),
          tabBarLabel: s('calendar'),
        }}
      />
      <Tabs.Screen
        name="path"
        options={{
          title: s('path'),
          tabBarLabel: s('path'),
        }}
      />
      <Tabs.Screen
        name="aarti"
        options={{
          title: s('aarti'),
          tabBarLabel: s('aarti'),
        }}
      />
    </Tabs>
  );
}
