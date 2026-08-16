import AsyncStorage from '@react-native-async-storage/async-storage';

function key(date: string): string {
  return `bhaktipath.kram.${date}`;
}

export async function getKramDone(date: string): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(key(date));
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === 'string') : [];
  } catch {
    return [];
  }
}

export async function toggleKramStep(date: string, stepId: string): Promise<string[]> {
  const current = await getKramDone(date);
  const next = current.includes(stepId) ? current.filter((id) => id !== stepId) : [...current, stepId];
  try {
    await AsyncStorage.setItem(key(date), JSON.stringify(next));
  } catch {
    // ignore
  }
  return next;
}
