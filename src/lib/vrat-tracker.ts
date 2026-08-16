import AsyncStorage from '@react-native-async-storage/async-storage';

const DONE_PREFIX = 'bhaktipath.tracker.done.';
const SANTOSHI_START = 'bhaktipath.tracker.santoshi.start';

export async function getSantoshiStart(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(SANTOSHI_START);
  } catch {
    return null;
  }
}

export async function setSantoshiStart(date: string): Promise<void> {
  try {
    await AsyncStorage.setItem(SANTOSHI_START, date);
  } catch {
    // ignore
  }
}

export async function getCycleDone(cycleId: string): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(`${DONE_PREFIX}${cycleId}`);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export async function toggleCycleDate(cycleId: string, date: string): Promise<string[]> {
  const current = await getCycleDone(cycleId);
  const next = current.includes(date) ? current.filter((item) => item !== date) : [...current, date];
  try {
    await AsyncStorage.setItem(`${DONE_PREFIX}${cycleId}`, JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}
