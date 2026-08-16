import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { deityImages, resolveDeity, type DeityHint, type DeityKey } from '@/content/deities';
import { useTheme } from '@/hooks/use-theme';

const SIZES = {
  sm: 44,
  md: 68,
  lg: 112,
  hero: 228,
} as const;

type DeityImageProps = {
  hint?: DeityHint;
  deityKey?: DeityKey;
  size?: keyof typeof SIZES;
  round?: boolean;
};

export function DeityImage({ hint, deityKey, size = 'md', round = false }: DeityImageProps) {
  const theme = useTheme();
  const key = deityKey ?? resolveDeity(hint);
  const dim = SIZES[size];
  const radius = round ? dim / 2 : size === 'hero' ? 12 : 8;

  return (
    <View
      style={[
        styles.frame,
        {
          width: dim,
          height: dim,
          borderColor: theme.goldLine,
          backgroundColor: theme.backgroundElement,
          borderRadius: radius,
        },
      ]}>
      <Image
        source={deityImages[key]}
        style={[styles.image, { borderRadius: Math.max(2, radius - 3) }]}
        contentFit="cover"
        transition={180}
        accessibilityLabel={key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    borderWidth: 2,
    padding: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
