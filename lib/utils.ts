import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const EMPTY_JSON = '{}'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}
