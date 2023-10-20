import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const isEmpty = (data: any) => {
  if (['', undefined, null].includes(data)) {
    return true;
  }
  if (Array.isArray(data) && data.length === 0) {
    return true;
  }

  if (JSON.stringify(data) === '{}') {
    return true;
  }
  return false;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
