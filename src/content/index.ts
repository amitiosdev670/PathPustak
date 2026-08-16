import { aartis } from '@/content/aartis';
import { kathas } from '@/content/kathas';
import { paths } from '@/content/paths';
import { sundarkandNeighbors, sundarkandSections } from '@/content/sundarkand';
import { stotras } from '@/content/stotras';
import type { ContentKind, Scripture, ScriptureGroup } from '@/content/types';

export const allScriptures: Scripture[] = [...aartis, ...paths, ...kathas];

export function getScripture(kind: ContentKind | string, id: string): Scripture | undefined {
  return allScriptures.find((item) => item.kind === kind && item.id === id);
}

export function scripturesInGroup(group: ScriptureGroup): Scripture[] {
  return allScriptures.filter((item) => item.group === group);
}

export { aartis, kathas, paths, stotras, sundarkandNeighbors, sundarkandSections };
