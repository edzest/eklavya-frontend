import Branding from '@/components/ui/branding'
import { TypographySmall } from '@/components/ui/small-typography'
import TestTitle from '@/components/ui/test-title'
import { getTest, getTestDescription } from '@/lib/test-service'
import StartTest from '../start-test'

export default async function Page({ params }: { params: { testId: string } }) {
    const testDescription = await getTestDescription(params.testId)
    const test = await getTest(params.testId)
    return (
        <div className="min-h-[calc(100vh-2rem)] flex flex-col gap-3">
            <Branding></Branding>
            <main className="flex justify-center grow">
                <div className="flex flex-col justify-center gap-4 text-center">
                    <TestTitle id={params.testId}></TestTitle>
                    <TypographySmall text={testDescription}></TypographySmall>
                    <StartTest test={test}></StartTest>
                </div>
            </main>
        </div>
    )
}
