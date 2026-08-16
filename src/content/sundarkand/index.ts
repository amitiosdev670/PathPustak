import type { Scripture } from '@/content/types';
import { sundarkandPart01 } from '@/content/sundarkand/part-01';
import { sundarkandPart02 } from '@/content/sundarkand/part-02';
import { sundarkandPart03 } from '@/content/sundarkand/part-03';
import { sundarkandPart04 } from '@/content/sundarkand/part-04';
import { sundarkandPart05 } from '@/content/sundarkand/part-05';
import { sundarkandPart06 } from '@/content/sundarkand/part-06';
import { sundarkandPart07 } from '@/content/sundarkand/part-07';
import { sundarkandPart08 } from '@/content/sundarkand/part-08';
import { sundarkandPart09 } from '@/content/sundarkand/part-09';
import { sundarkandPart10 } from '@/content/sundarkand/part-10';
import { sundarkandPart11 } from '@/content/sundarkand/part-11';
import { sundarkandPart12 } from '@/content/sundarkand/part-12';
import { sundarkandPart13 } from '@/content/sundarkand/part-13';
import { sundarkandPart14 } from '@/content/sundarkand/part-14';

export const sundarkandSections: Scripture[] = [
  sundarkandPart01,
  sundarkandPart02,
  sundarkandPart03,
  sundarkandPart04,
  sundarkandPart05,
  sundarkandPart06,
  sundarkandPart07,
  sundarkandPart08,
  sundarkandPart09,
  sundarkandPart10,
  sundarkandPart11,
  sundarkandPart12,
  sundarkandPart13,
  sundarkandPart14,
];

export function getSundarkandSection(id: string): Scripture | undefined {
  return sundarkandSections.find((item) => item.id === id);
}

export function sundarkandNeighbors(id: string): { prev?: Scripture; next?: Scripture } {
  const index = sundarkandSections.findIndex((item) => item.id === id);
  if (index < 0) return {};
  return {
    prev: sundarkandSections[index - 1],
    next: sundarkandSections[index + 1],
  };
}
