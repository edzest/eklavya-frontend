import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from '../lib/utils'
import './globals.css'

export const metadata: Metadata = {
    title: 'Eklavya',
    description: 'your friendly test platform',
}

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased p-4',
                    fontSans.variable
                )}
            >
                {children}
            </body>
        </html>
    )
}
