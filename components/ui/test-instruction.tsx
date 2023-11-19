import { getTestInstruction } from '@/lib/test-service'

export default async function TestInstruction({ id }: { id: string }) {
    const instruction = await getTestInstruction(id)
    return <p>{instruction}</p>
}
