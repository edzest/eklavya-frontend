'use client'

import { getSessionTestTime } from '@/lib/test-service'
import { subtractAndConvertToHHMMSS } from '@/lib/utils'
import { useEffect, useState } from 'react'
import { TypographyLarge } from './large-typography'

export function Timer() {
    const [currentTime, setCurrentTime] = useState<number>(Date.now())
    const [finishTime, setFinishTime] = useState<number>()

    useEffect(() => {
        const { finishTime } = getSessionTestTime() ?? { finishTime: undefined }
        if (finishTime) {
            setFinishTime(finishTime)
        }
    }, [])

    useEffect(() => {
        let intervalId: number | undefined
        if (currentTime && finishTime) {
            intervalId = window.setInterval(() => {
                setCurrentTime(Date.now())
            }, 1000)
        }
        return () => {
            clearInterval(intervalId)
        }
    }, [currentTime, finishTime])

    return (
        <div>
            <TypographyLarge
                text={
                    currentTime && finishTime
                        ? subtractAndConvertToHHMMSS(currentTime, finishTime)
                        : '--:--:--'
                }
            ></TypographyLarge>
        </div>
    )
}
