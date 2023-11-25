import { StoredTest, Test } from './models'
import { EMPTY_JSON } from './utils'

export async function getTest(id: string) {
    const response = await fetch(`${process.env.BASE_TEST_URL}/${id}`)
    const test = (await response.json()) as Test
    return test
}

export async function getTestInstruction(id: string) {
    const test = await getTest(id)
    return test.instructions.body
}

export async function getTestTitle(id: string) {
    const test = await getTest(id)
    return test.name
}

export async function getTestDescription(id: string) {
    const test = await getTest(id)
    return test.shortDescription
}

export async function getQuestion(testId: string, questionId: string) {
    const test = await getTest(testId)
    const foundQuestionIndex = test.questions.findIndex(
        (question) => question.id === questionId
    )
    return {
        question: test.questions[foundQuestionIndex],
        nextQuestionId:
            foundQuestionIndex < test.questions.length - 1
                ? foundQuestionIndex + 1
                : -1,
    }
}

export function initiateTestSession(test: StoredTest) {
    sessionStorage.setItem('test', JSON.stringify(test))
}

export function startTestSession() {
    const storedTest = JSON.parse(
        sessionStorage.getItem('test') ?? EMPTY_JSON
    ) as StoredTest
    if (!storedTest.test) {
        return false
    }
    storedTest.startTime = Date.now()
    sessionStorage.setItem('test', JSON.stringify(storedTest))
    return true
}

export function getTestTitleInSession() {
    const storedTest = JSON.parse(
        sessionStorage.getItem('test') ?? EMPTY_JSON
    ) as StoredTest
    return storedTest.test?.name
}

export function getSessionTestTime() {
    const storedTest = JSON.parse(
        sessionStorage.getItem('test') ?? EMPTY_JSON
    ) as StoredTest
    if (storedTest.startTime && storedTest.test?.metaData.totalTime) {
        const finishTime =
            storedTest.startTime + storedTest.test?.metaData.totalTime * 1000
        return {
            finishTime: finishTime,
            startTime: storedTest.startTime,
        }
    }
}
