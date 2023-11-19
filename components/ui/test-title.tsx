import { getTestTitle } from '@/lib/test-service'
import { TypographyH2 } from './h2-typography'

export default async function TestTitle({
    size = 'LARGE',
    id,
}: {
    id: string
    size?: 'LARGE' | 'MEDIUM' | 'SMALL'
}) {
    const testTitle = await getTestTitle(id)
    if (size === 'LARGE') {
        return <TypographyH2 text={testTitle}></TypographyH2>
    }
}
