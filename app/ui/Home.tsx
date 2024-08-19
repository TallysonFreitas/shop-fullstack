import { CheckCircleIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'

export function Header() {
    const HeadMenuItems = [
        'Features',
        'Discover',
        'Gallery',
        'Templates',
        'Updates',
    ]

    return (
        <header className="border-b border-gray-300 fixed w-full top-0 bg-white">
            <div className="container mx-auto p-4">
                <ul className="flex gap-5">
                    {HeadMenuItems.map((each) => (
                        <li
                            className="text-gray-666 hover:text-gray-900"
                            key={each}
                        >
                            <a href="#">{each}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}

export function ProductState() {
    return (
        <div className="container mx-auto py-24 flex flex-col gap-12 items-center max-w-800">
            <h1 className="text-7xl font-bold pt-10">The Product Name</h1>
            <Image
                className="rounded-xl"
                width={800}
                height={400}
                src={'https://placehold.co/800x400/png'}
                alt="iamgem"
            />
            <p className="text-4xl font-semibold text-center">$49.99</p>
            <div className="flex flex-col gap-5 items-center">
                <p className="w-3/5 text-center text-gray-888 text-2xl font-medium">
                    Go from design to site with Framer, the web builder for
                    creative pros.
                </p>
                <a
                    className="py-2 px-4 text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 rounded-lg w-28 text-center font-semibold shadow-lg"
                    href="#"
                >
                    Buy Now
                </a>
            </div>
        </div>
    )
}

export function LogosFront() {
    const Logos = ['Logo', 'Logo', 'Logo', 'Logo']

    return (
        <div className="container mx-auto flex justify-center items-center gap-10 pb-24">
            {Logos.map((each) => (
                <p className="text-4xl text-gray-999 font-bold" key={each}>
                    {each}
                </p>
            ))}
        </div>
    )
}

export function ProductsDetails() {
    return (
        <div className="container mx-auto py-24 px-12 lg:px-24 grid grid-cols-2 gap-8">
            <Image
                src={'https://placehold.co/500x356/png'}
                className="w-full rounded-xl"
                width={500}
                height={356}
                alt="imagem"
            />
            <div className="flex flex-col gap-8 justify-center items-start">
                <h2 className="font-bold text-4xl">Fast</h2>
                <p className="font-medium text-xl text-gray-888 w-3/5">
                    You&apos;ve never made a website this fast before.
                </p>
                <a
                    className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-2xl"
                    href="#"
                >
                    Read More
                </a>
            </div>
            <div className="flex flex-col gap-8 justify-center items-start">
                <h2 className="font-bold text-4xl">Easy</h2>
                <p className="font-medium text-xl text-gray-888 w-3/5">
                    Works like the canvas tools you&apos;re familiar with.
                </p>
                <a
                    className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-2xl"
                    href="#"
                >
                    Read More
                </a>
            </div>
            <Image
                src={'https://placehold.co/500x356/png'}
                className="w-full rounded-xl"
                width={500}
                height={356}
                alt="imagem"
            />
        </div>
    )
}

function ItemProduct({
    prodTitle,
    describe,
    image,
    link,
}: {
    prodTitle: string
    describe: string
    image: string
    link: string
}) {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
                className="w-full"
                height={240}
                width={320}
                src={'https://placehold.co/320x240/png'}
                alt="imagem"
            />
            <div className="p-8 bg-white flex flex-col gap-5 items-start h-full">
                <h3 className="font-semibold text-lg">{prodTitle}</h3>
                <p className="text-gray-666">{describe}</p>
                <a
                    className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                    href={link}
                >
                    Read More
                </a>
            </div>
        </div>
    )
}

export function RelatedProducts() {
    const Data = [
        {
            prodTitle: 'Scaling Your Site',
            describe: 'Learn about hosting built for scale and reliability.',
            image: '',
            link: '#',
        },
        {
            prodTitle: 'Optimize for SEO',
            describe:
                'Learn how Framer can optimize your site for search engines.',
            image: '',
            link: '#',
        },
        {
            prodTitle: 'CMS Examples',
            describe: 'Get inspired by blogs, job openings, events and more.',
            image: '',
            link: '#',
        },
    ]
    return (
        <div className="container mx-auto py-24 px-10 lg:px-24 grid grid-cols-3 gap-5">
            {Data.map((each) => (
                <ItemProduct
                    key={each.prodTitle}
                    prodTitle={each.prodTitle}
                    describe={each.describe}
                    image={each.image}
                    link={each.link}
                />
            ))}
        </div>
    )
}

function ItemPlan({
    plan,
    coustInCents,
    benefits,
    link,
}: {
    plan: string
    coustInCents: number
    benefits: string[]
    link: string
}) {
    return (
        <div className="w-full p-8 flex flex-col gap-5 shadow-xl rounded-xl items-start">
            <p className="text-gray-666 font-semibold text-sm">{plan}</p>
            <p className="text-gray-333 text-5xl font-bold">
                ${coustInCents / 100}
                <span className="text-gray-666 text-sm font-semibold">
                    p/month
                </span>
            </p>
            <ul className="flex flex-col gap-3 py-5">
                {benefits.map((each) => (
                    <li className="flex items-center gap-2" key={each}>
                        <CheckCircleIcon className="text-gray-333 size-7" />
                        <span className="text-sm text-gray-333 font-semibold">
                            {each}
                        </span>
                    </li>
                ))}
            </ul>
            <a
                className="py-3 px-4 font-semibold bg-gray-f2f rounded-lg"
                href={link}
            >
                Get Started
            </a>
        </div>
    )
}

export function Plans() {
    const PlansData = [
        {
            plan: 'Personal',
            coustInCents: 500,
            benefits: [
                '1 projects',
                'Analytics',
                'Insights Panel',
                'Share Features',
            ],
            link: '#',
        },
        {
            plan: 'Personal',
            coustInCents: 1000,
            benefits: [
                '2 projects',
                'Analytics',
                'Insights Panel',
                'Share Features',
            ],
            link: '#',
        },
        {
            plan: 'Personal',
            coustInCents: 5000,
            benefits: [
                'Unlimited Projects',
                'Analytics',
                'Insights Panel',
                'Share Features',
            ],
            link: '#',
        },
    ]

    return (
        <div className="container mx-auto py-24 px-10 lg:px-24 grid grid-cols-3 text-sm gap-5">
            {PlansData.map((each) => (
                <ItemPlan
                    key={each.plan}
                    coustInCents={each.coustInCents}
                    plan={each.plan}
                    benefits={each.benefits}
                    link={each.link}
                />
            ))}
        </div>
    )
}

export function Login() {
    return (
        <div className="container mx-auto flex flex-col justify-center items-center gap-8 p-24">
            <h2 className="text-center text-5xl font-bold">Sign up today.</h2>
            <a
                className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-2xl"
                href="#"
            >
                Get Started
            </a>
        </div>
    )
}

export function Footer() {
    return (
        <footer className="bg-gray-222">
            <div className="container mx-auto flex justify-between p-24 text-white">
                <p>© Framer Inc. 2023</p>
                <ul className="flex gap-4">
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </footer>
    )
}
