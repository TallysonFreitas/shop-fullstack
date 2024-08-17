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
        <div className="container mx-auto py-24 flex flex-col gap-10 items-center max-w-800">
            <h1 className="text-7xl font-bold pt-10">The Product Name</h1>
            <Image
                className="rounded-xl"
                width={800}
                height={400}
                src={'https://placehold.co/800x400/png'}
                alt="iamgem"
            />
            <p className="text-4xl font-semibold text-center">$49.99</p>
            <p className="w-1/2 text-center text-gray-888 text-2xl font-medium">
                Pequena descricao sobre o Produto
            </p>

            <a
                className="py-2 px-4 text-white bg-green-600 transition duration-500 ease-in-out hover:bg-green-700 rounded-lg w-28 text-center font-semibold shadow-lg"
                href="#"
            >
                Buy Now
            </a>
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
            <div className="flex flex-col gap-5 justify-center items-start">
                <h2 className="font-bold text-4xl">Fast</h2>
                <p className="font-medium text-xl text-gray-888">
                    You&apos;ve never made a website this fast before.
                </p>
                <a
                    className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-2xl"
                    href="#"
                >
                    Read More
                </a>
            </div>
            <div className="flex flex-col gap-5 justify-center items-start">
                <h2 className="font-bold text-4xl">Easy</h2>
                <p className="font-medium text-xl text-gray-888">
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
