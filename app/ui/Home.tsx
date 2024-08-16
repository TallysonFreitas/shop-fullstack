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
        <header className="border-b border-gray-300 fixed w-full top-0">
            <div className="container mx-auto p-4">
                <ul className="flex gap-5">
                    {HeadMenuItems.map((each) => (
                        <li className="text-gray-666" key={each}>
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
        <div
            className="container mx-auto py-24 flex flex-col gap-10 items-center"
            style={{ maxWidth: '800px' }}
        >
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
