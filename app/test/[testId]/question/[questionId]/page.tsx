import { TypographyP } from '@/components/ui/p-typography'
import { getQuestion } from '@/lib/test-service'
import QuestionForm from './question-form'

export default async function Question({
    params,
}: {
    params: { testId: string; questionId: string }
}) {
    const { question, nextQuestionId, previousQuestionId } = await getQuestion(
        params.testId,
        params.questionId
    )
    return (
        <>
            <QuestionForm
                answerOptions={question.options}
                questionTextRenderer={
                    <div>
                        <TypographyP
                            text={`Q.${params.questionId} `}
                        ></TypographyP>
                        <TypographyP text={question.text}></TypographyP>
                    </div>
                }
                nextQuestionId={nextQuestionId}
                previousQuestionId={previousQuestionId}
            ></QuestionForm>
        </>
    )
}
