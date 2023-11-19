import Branding from '@/components/ui/branding'
import { TypographyH2 } from '@/components/ui/h2-typography'
import { TypographyP } from '@/components/ui/p-typography'
import TestInstruction from '@/components/ui/test-instruction'
import TestTitle from '@/components/ui/test-title'
import { getTestDescription } from '@/lib/test-service'

export default async function Page({ params }: { params: { id: string } }) {
    const testDescription = await getTestDescription(params.id)
    console.log(testDescription)
    return (
        <div>
            <Branding></Branding>
            <main className="flex flex-col">
                <div>
                    <TestTitle id={params.id}></TestTitle>
                    <TypographyP text={testDescription}></TypographyP>
                </div>
                <div>
                    <TypographyH2 text="About This Test" />
                    <TestInstruction id={params.id}></TestInstruction>
                </div>
            </main>
        </div>
    )
}
