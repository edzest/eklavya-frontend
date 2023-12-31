import React from 'react'

import { Timer } from '@/components/ui/test-timer'
import TestTitle from '@/components/ui/test-title'

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode
    params: { testId: string; questionId: string }
}) {
    return (
        <section className="px-10 flex flex-col min-h-screen mx-auto max-w-screen-lg">
            <header className="flex justify-between">
                <TestTitle id={params.testId} size="MEDIUM"></TestTitle>
                <Timer></Timer>
            </header>
            <hr className="mt-4"></hr>
            <main className="grow mt-10">{children}</main>
        </section>
    )
}
