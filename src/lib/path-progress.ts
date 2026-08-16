import AsyncStorage from '@react-native-async-storage/async-storage';

const LAST_KEY = 'bhaktipath.sundarkand.last';

export async function getLastSundarkandId(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(LAST_KEY);
  } catch {
    return null;
  }
}

export async function setLastSundarkandId(id: string): Promise<void> {
  try {
    await AsyncStorage.setItem(LAST_KEY, id);
  } catch {
    // Offline path still works without progress.
  }
}
