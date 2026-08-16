import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import type { BottomTabBarProps } from 'expo-router/build/react-navigation/bottom-tabs';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { AdBanner } from '@/components/AdBanner';
import { ThemedText } from '@/components/themed-text';
import { Fonts, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

const TAB_ICONS: Record<string, ComponentProps<typeof MaterialCommunityIcons>['name']> = {
  index: 'om',
  calendar: 'calendar-month',
  path: 'book-open-page-variant',
  aarti: 'lamp',
};

export function MandirTabBar({ state, descriptors, navigation, insets }: BottomTabBarProps) {
  const theme = useTheme();

  return (
    <View>
      <AdBanner />
      <View
        style={[
          styles.bar,
          {
            backgroundColor: theme.paper,
            paddingBottom: Math.max(insets.bottom, Spacing.two),
            borderTopColor: theme.goldLine,
          },
        ]}>
        <View style={styles.cornice}>
          <View style={[styles.goldBar, { backgroundColor: theme.goldLine }]} />
          <View style={[styles.maroonHair, { backgroundColor: theme.maroon }]} />
        </View>
        <View style={styles.row}>
          {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { options } = descriptors[route.key];
          const label =
            typeof options.tabBarLabel === 'string'
              ? options.tabBarLabel
              : typeof options.title === 'string'
                ? options.title
                : route.name;
          const icon = TAB_ICONS[route.name] ?? 'circle-outline';
          const color = focused ? theme.paper : theme.textSecondary;

          return (
            <Pressable
              key={route.key}
              accessibilityRole="tab"
              accessibilityState={{ selected: focused }}
              accessibilityLabel={options.tabBarAccessibilityLabel ?? label}
              onPress={() => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
                if (!focused && !event.defaultPrevented) {
                  navigation.navigate(route.name, route.params);
                }
              }}
              onLongPress={() => {
                navigation.emit({ type: 'tabLongPress', target: route.key });
              }}
              style={({ pressed }) => [styles.item, { opacity: pressed ? 0.8 : 1 }]}>
              <View
                style={[
                  styles.well,
                  {
                    backgroundColor: focused ? theme.saffron : theme.backgroundElement,
                    borderColor: focused ? theme.gold : theme.goldLine,
                  },
                ]}>
                <MaterialCommunityIcons name={icon} size={22} color={color} />
              </View>
              <ThemedText
                type="smallBold"
                style={[
                  styles.label,
                  { color: focused ? theme.maroon : theme.textSecondary },
                ]}>
                {label}
              </ThemedText>
            </Pressable>
          );
        })}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    borderTopWidth: 0,
    paddingTop: Spacing.two,
  },
  cornice: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    gap: 2,
  },
  goldBar: {
    height: 2,
  },
  maroonHair: {
    height: StyleSheet.hairlineWidth,
    opacity: 0.45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: Spacing.two,
    paddingTop: Spacing.two,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: 4,
    paddingVertical: Spacing.one,
  },
  well: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: Fonts.devanagariBold,
    fontSize: 12,
    lineHeight: 16,
  },
});
