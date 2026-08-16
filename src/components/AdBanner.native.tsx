import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { AdFormat, AdView } from 'react-native-applovin-max';

import { bannerAdUnitId, initAds } from '@/lib/ads';
import { useTheme } from '@/hooks/use-theme';

export function AdBanner() {
  const theme = useTheme();
  const unitId = bannerAdUnitId().trim();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!unitId) {
      return;
    }
    let cancelled = false;
    void initAds().then((ok) => {
      if (!cancelled && ok) {
        setReady(true);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [unitId]);

  if (!ready || !unitId) {
    return null;
  }

  return (
    <View style={[styles.wrap, { backgroundColor: theme.paper }]}>
      <AdView
        adUnitId={unitId}
        adFormat={AdFormat.BANNER}
        adaptiveBannerEnabled
        autoRefresh
        style={styles.banner}
        onAdLoadFailed={() => setReady(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    width: '100%',
  },
  banner: {
    width: '100%',
  },
});
