import { TypographyP } from '@/components/ui/p-typography'
import { getQuestion } from '@/lib/test-service'

export default async function Question({
    params,
}: {
    params: { testId: string; questionId: string }
}) {
    const { question, nextQuestionId } = await getQuestion(
        params.testId,
        params.questionId
    )
    return (
        <article className="mt-10">
            <TypographyP text={question.text}></TypographyP>
            <ul>
                <li>abc</li>
            </ul>
        </article>
    )
}
