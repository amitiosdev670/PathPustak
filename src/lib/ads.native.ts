import { Platform } from 'react-native';
import { AppLovinMAX } from 'react-native-applovin-max';

import { AppLovinConfig } from '@/constants/ads';

let boot: Promise<boolean> | undefined;

export function bannerAdUnitId(): string {
  return Platform.OS === 'ios' ? AppLovinConfig.iosBannerUnitId : AppLovinConfig.androidBannerUnitId;
}

function canStart(): boolean {
  return AppLovinConfig.sdkKey.trim().length > 20 && bannerAdUnitId().trim().length > 8;
}

export function initAds(): Promise<boolean> {
  if (!boot) {
    boot = start();
  }
  return boot;
}

async function start(): Promise<boolean> {
  if (!canStart()) {
    return false;
  }
  try {
    if (__DEV__) {
      AppLovinMAX.setVerboseLogging(true);
    }
    const already = await AppLovinMAX.isInitialized();
    if (!already) {
      await AppLovinMAX.initialize(AppLovinConfig.sdkKey);
    }
    return true;
  } catch (error) {
    boot = undefined;
    if (__DEV__) {
      console.warn('AppLovin MAX failed to start', error);
    }
    return false;
  }
}
