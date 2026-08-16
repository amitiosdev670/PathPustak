import { sundarkandSections } from '@/content/sundarkand';
import { stotras } from '@/content/stotras';
import type { Scripture } from '@/content/types';

export const paths: Scripture[] = [...sundarkandSections, ...stotras];
