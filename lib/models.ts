export interface Test {
    id: string
    name: string
    shortDescription: string
    description: string
    metaData: {
        totalQuestions: number
        totalMarks: number
        totalTime: number
    }
    instructions: {
        body: string
    }
    questions: [
        {
            id: string
            text: string
            options: [
                {
                    id: string
                    text: string
                },
            ]
        },
    ]
}

export interface StoredTest {
    startTime?: number
    test?: Test
}
