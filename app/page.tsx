import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    var name = 'Ekalavya'

    return (
        <main className="sm:flex-row max-w-screen-lg mx-auto ">
            <Image
                src="/work-in-progress.png"
                alt="Work In Progress image"
                width={500}
                height={500}
                className="w-40"
            />
            <br />
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                {name}
            </h1>
            <br />
            <p className="font-bold">
                An online mock exam platform by{' '}
                <a
                    href="https://www.edzest.org/"
                    target="_blank"
                    className="text-blue-500 hover:underline"
                >
                    Edzest Education Services
                </a>
                .
            </p>
            <br />
            <p className="text-justify">
                Edzest is building the ultimate online mock exam platform
                designed to elevate your exam preparation to new heights! We
                pride ourselves in providing high-quality training to our
                students via live online sessions, revision classes, training
                materials and youtube videos. To provide further support to our
                students we are bringing an online mock exam platform with
                questions that mirror the complexity of real exams, accompanied
                by detailed answers and explanations crafted by our team of
                expert educators.
            </p>
            <br />
            <p className="text-justify">
                With Ekalavya, you&apos;ll experience a personalized journey,
                tailoring your practice sessions to specific topics and
                difficulty levels. Our real exam simulation environment ensures
                you&apos;re ready for the pressure and format of the actual
                exam, while our performance analytics help you track your
                progress, identify strengths and weaknesses, and refine your
                study strategy.
            </p>
            <br />
            <p className="text-justify">
                While the platform is being built by our engineers, you can take
                an early look by attempting a foundational quiz on agile
                approach. Click the button below to get started.
            </p>
            <br />
            <Link href="/test/1251">
                <Button className="cursor-pointer">Take the demo exam</Button>
            </Link>
        </main>
    )
}
