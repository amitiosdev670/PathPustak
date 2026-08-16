import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Fonts } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function MandirHeaderBackground() {
  const theme = useTheme();

  return (
    <View style={[styles.bg, { backgroundColor: theme.paper }]}>
      <View style={[styles.topRail, { backgroundColor: theme.goldLine }]} />
      <View style={styles.bottomCornice}>
        <View style={[styles.goldBar, { backgroundColor: theme.goldLine }]} />
        <View style={[styles.maroonHair, { backgroundColor: theme.maroon }]} />
      </View>
    </View>
  );
}

export function MandirHeaderTitle({ children }: { children: ReactNode }) {
  const theme = useTheme();
  const title = typeof children === 'string' ? children : String(children ?? '');

  return (
    <View style={styles.titleWrap} accessibilityRole="header">
      <ThemedText style={[styles.ornament, { color: theme.gold }]}>॥</ThemedText>
      <ThemedText
        type="smallBold"
        themeColor="maroon"
        numberOfLines={1}
        style={styles.title}>
        {title}
      </ThemedText>
      <ThemedText style={[styles.ornament, { color: theme.gold }]}>॥</ThemedText>
    </View>
  );
}

export function mandirHeaderScreenOptions(theme: {
  paper: string;
  maroon: string;
  goldLine: string;
}) {
  return {
    headerTitleAlign: 'center' as const,
    headerShadowVisible: false,
    headerTintColor: theme.maroon,
    headerBackButtonDisplayMode: 'minimal' as const,
    headerStyle: { backgroundColor: theme.paper },
    headerTitleStyle: {
      fontFamily: Fonts.devanagariBold,
      fontWeight: '700' as const,
      fontSize: 18,
      color: theme.maroon,
    },
    headerBackTitleStyle: {
      fontFamily: Fonts.devanagari,
    },
    headerTitle: ({ children }: { children: string }) => <MandirHeaderTitle>{children}</MandirHeaderTitle>,
    headerBackground: () => <MandirHeaderBackground />,
  };
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  topRail: {
    height: StyleSheet.hairlineWidth,
  },
  bottomCornice: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    gap: 2,
  },
  goldBar: {
    height: 2,
  },
  maroonHair: {
    height: StyleSheet.hairlineWidth,
    opacity: 0.45,
  },
  titleWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    maxWidth: 260,
  },
  ornament: {
    fontSize: 13,
    lineHeight: 18,
    fontFamily: Fonts.devanagariBold,
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.3,
  },
});
