import {
  NotoSansDevanagari_400Regular,
  NotoSansDevanagari_700Bold,
  useFonts,
} from '@expo-google-fonts/noto-sans-devanagari';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

import { mandirHeaderScreenOptions } from '@/components/MandirHeader';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useTheme } from '@/hooks/use-theme';
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext';
import { initAds } from '@/lib/ads';

SplashScreen.preventAutoHideAsync();

const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.light.saffron,
    background: Colors.light.background,
    card: Colors.light.background,
    text: Colors.light.text,
    border: Colors.light.goldLine,
    notification: Colors.light.saffron,
  },
};

const DarkBhaktiTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: Colors.dark.saffron,
    background: Colors.dark.background,
    card: Colors.dark.background,
    text: Colors.dark.text,
    border: Colors.dark.goldLine,
    notification: Colors.dark.saffron,
  },
};

function RootStack() {
  const { s } = useLanguage();
  const scheme = useColorScheme();
  const colors = useTheme();
  const theme = scheme === 'dark' ? DarkBhaktiTheme : LightTheme;

  return (
    <ThemeProvider value={theme}>
      <Stack screenOptions={mandirHeaderScreenOptions(colors)}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="sundarkand" options={{ title: s('sundarkand'), headerBackTitle: s('path') }} />
        <Stack.Screen name="reader/[kind]/[id]" options={{ title: s('verses'), headerBackTitle: s('home') }} />
        <Stack.Screen name="event/[id]" options={{ title: s('calendar') }} />
        <Stack.Screen name="kram" options={{ title: s('kramTitle'), headerBackTitle: s('home') }} />
        <Stack.Screen name="tracker" options={{ title: s('trackerTitle'), headerBackTitle: s('home') }} />
        <Stack.Screen name="settings" options={{ title: s('settings') }} />
      </Stack>
      <StatusBar style={scheme === 'dark' ? 'light' : 'dark'} />
    </ThemeProvider>
  );
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    NotoSansDevanagari_400Regular,
    NotoSansDevanagari_700Bold,
    ...MaterialCommunityIcons.font,
  });

  useEffect(() => {
    if (fontsLoaded) {
      void SplashScreen.hideAsync();
      void initAds();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <LanguageProvider>
      <RootStack />
    </LanguageProvider>
  );
}
