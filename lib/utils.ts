import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const EMPTY_JSON = '{}'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function subtractAndConvertToHHMMSS(epoch1: number, epoch2: number) {
    // Calculate the time difference in milliseconds
    const timeDifference = Math.abs(epoch2 - epoch1)

    // Create a new Date object with the time difference
    const date = new Date(timeDifference)

    // Extract hours, minutes, and seconds from the Date object
    const hours =
        date.getUTCHours() < 10 ? '0' + date.getUTCHours() : date.getUTCHours()
    const minutes =
        date.getUTCMinutes() < 10
            ? '0' + date.getUTCMinutes()
            : date.getUTCMinutes()
    const seconds =
        date.getUTCSeconds() < 10
            ? '0' + date.getUTCSeconds()
            : date.getUTCSeconds()

    // Format the result as HH:MM:SS
    return hours + ':' + minutes + ':' + seconds
}
