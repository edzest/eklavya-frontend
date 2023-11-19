import { Test } from './models'

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
