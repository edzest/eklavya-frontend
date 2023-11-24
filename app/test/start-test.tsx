'use client'

import { Button } from '@/components/ui/button'
import { StoredTest, Test } from '@/lib/models'
import { initiateTestSession, startTestSession } from '@/lib/test-service'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function StartTest({ test }: { test: Test }) {
    const router = useRouter()

    useEffect(() => {
        initiateTestSession(test.id, { test })
    }, [test])

    const handleStartTest = () => {
        startTestSession(test.id)
        router.push(`/question/${test.questions[0].id}`)
    }

    return <Button onClick={handleStartTest}>Start Test</Button>
}
