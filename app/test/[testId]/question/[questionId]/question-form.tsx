'use client'

import React, { useEffect } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { usePathname, useRouter } from 'next/navigation'
import { getTestTitleInSession } from '@/lib/test-service'

export default function QuestionForm({
    questionTextRenderer,
    answerOptions,
    nextQuestionId,
    previousQuestionId,
}: {
    questionTextRenderer: React.ReactNode
    answerOptions: Array<{
        id: string
        text: string
    }>
    nextQuestionId?: string
    previousQuestionId?: string
}) {
    const answerIds = answerOptions.map((answerOption) => answerOption.id)
    const FormSchema = z.object({
        answer: z.string().refine((val) => answerIds.includes(val), {
            message: 'please select correct answer',
        }),
    })

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    const router = useRouter()
    const pathname = usePathname()

    useEffect(() => {
        if (!getTestTitleInSession()) {
            router.push('/')
        }
    }, [])

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        if (nextQuestionId) {
            const brokenURL = pathname.split('/')
            brokenURL[brokenURL.length - 1] = nextQuestionId
            router.push(brokenURL.join('/'))
        }
    }

    const onPrevious = () => {
        if (previousQuestionId) {
            const brokenURL = pathname.split('/')
            brokenURL[brokenURL.length - 1] = previousQuestionId
            router.push(brokenURL.join('/'))
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {questionTextRenderer}
                <FormField
                    control={form.control}
                    name="answer"
                    render={({ field }) => {
                        return (
                            <FormItem className="space-y-3">
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        {answerOptions.map((answerOption) => (
                                            <FormItem
                                                key={answerOption.id}
                                                className="flex items-center space-x-3 space-y-0"
                                            >
                                                <FormControl>
                                                    <RadioGroupItem
                                                        value={answerOption.id}
                                                    />
                                                </FormControl>
                                                <FormLabel className="font-normal">
                                                    {answerOption.text}
                                                </FormLabel>
                                            </FormItem>
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )
                    }}
                ></FormField>
                <Button
                    disabled={previousQuestionId === undefined ? true : false}
                    className="absolute bottom-10 left-3"
                    onClick={() => onPrevious()}
                >
                    Previous
                </Button>
                <Button
                    disabled={nextQuestionId === undefined ? true : false}
                    className="absolute bottom-10 right-3"
                    type="submit"
                >
                    {nextQuestionId === undefined ? 'Submit' : 'Next'}
                </Button>
            </form>
        </Form>
    )
}
