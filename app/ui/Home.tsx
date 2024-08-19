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
        <div className="container mx-auto p-24 grid grid-cols-2 gap-8">
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

function ItemProduct() {
    return (
        <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
                className="w-full"
                height={240}
                width={320}
                src={'https://placehold.co/320x240/png'}
                alt="imagem"
            />
            <div className="p-8 bg-white flex flex-col gap-5 items-start">
                <h3 className="font-semibold text-lg">Scaling Your Site</h3>
                <p className="text-gray-666 w-4/5">
                    Learn about hosting built for scale and reliability. for
                    scale and reliability.
                </p>
                <a
                    className="bg-gray-900 text-white text-sm font-semibold px-4 py-2 rounded-lg"
                    href="#"
                >
                    Read More
                </a>
            </div>
        </div>
    )
}

export function RelatedProducts() {
    return (
        <div className="container mx-auto p-24 grid grid-cols-3 gap-5">
            <ItemProduct />
            <ItemProduct />
            <ItemProduct />
        </div>
    )
}
