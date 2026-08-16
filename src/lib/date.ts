const INDIA_TZ = 'Asia/Kolkata';

export function todayInIndia(): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: INDIA_TZ }).format(new Date());
}

export function formatDisplayDate(isoDate: string, lang: 'hi' | 'en'): string {
  const date = new Date(`${isoDate}T12:00:00+05:30`);
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: INDIA_TZ,
  }).format(date);
}

export function formatShortDate(isoDate: string, lang: 'hi' | 'en'): string {
  const date = new Date(`${isoDate}T12:00:00+05:30`);
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    day: 'numeric',
    month: 'short',
    timeZone: INDIA_TZ,
  }).format(date);
}

export function formatWeekday(isoDate: string, lang: 'hi' | 'en'): string {
  const date = new Date(`${isoDate}T12:00:00+05:30`);
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    weekday: 'long',
    timeZone: INDIA_TZ,
  }).format(date);
}

export function formatMonthYear(yearMonth: string, lang: 'hi' | 'en'): string {
  const date = new Date(`${yearMonth}-15T12:00:00+05:30`);
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    month: 'long',
    year: 'numeric',
    timeZone: INDIA_TZ,
  }).format(date);
}

export function dayNumber(isoDate: string): string {
  return isoDate.slice(8, 10);
}

export function shiftMonth(yearMonth: string, delta: number): string {
  const [year, month] = yearMonth.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1 + delta, 1));
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, '0')}`;
}

export function indiaDateAtHour(isoDate: string, hour: number, minute = 0): Date {
  const padded = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:00`;
  return new Date(`${isoDate}T${padded}+05:30`);
}

export function addDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split('-').map(Number);
  const utc = new Date(Date.UTC(year, month - 1, day + days));
  return utc.toISOString().slice(0, 10);
}
