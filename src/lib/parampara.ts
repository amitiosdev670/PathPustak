import AsyncStorage from '@react-native-async-storage/async-storage';

const GLOBAL_KEY = 'bhaktipath.parampara.global';
const TYPE_PREFIX = 'bhaktipath.parampara.type.';
const SLUG_PREFIX = 'bhaktipath.parampara.slug.';

export async function getGlobalParampara(): Promise<string> {
  try {
    return (await AsyncStorage.getItem(GLOBAL_KEY)) ?? '';
  } catch {
    return '';
  }
}

export async function setGlobalParampara(note: string): Promise<void> {
  try {
    await AsyncStorage.setItem(GLOBAL_KEY, note.trim());
  } catch {
    // Keep reading offline even if save fails.
  }
}

export async function getParampara(type: string, slug: string): Promise<{ typeNote: string; slugNote: string }> {
  try {
    const [typeNote, slugNote] = await Promise.all([
      AsyncStorage.getItem(`${TYPE_PREFIX}${type}`),
      AsyncStorage.getItem(`${SLUG_PREFIX}${slug}`),
    ]);
    return { typeNote: typeNote ?? '', slugNote: slugNote ?? '' };
  } catch {
    return { typeNote: '', slugNote: '' };
  }
}

export async function setTypeParampara(type: string, note: string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${TYPE_PREFIX}${type}`, note.trim());
  } catch {
    // ignore
  }
}

export async function setSlugParampara(slug: string, note: string): Promise<void> {
  try {
    await AsyncStorage.setItem(`${SLUG_PREFIX}${slug}`, note.trim());
  } catch {
    // ignore
  }
}
