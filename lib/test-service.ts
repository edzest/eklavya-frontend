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

export function initiateTestSession(id: string, test: StoredTest) {
    sessionStorage.setItem(id, JSON.stringify(test))
}

export function startTestSession(id: string) {
    const storedTest = JSON.parse(
        sessionStorage.getItem(id) ?? EMPTY_JSON
    ) as StoredTest
    if (!storedTest.test) {
        return false
    }
    storedTest.startTime = Date.now()
    sessionStorage.setItem(id, JSON.stringify(storedTest))
    return true
}
