export function Header() {
    const HeadMenuItems = [
        'Features',
        'Discover',
        'Gallery',
        'Templates',
        'Updates',
    ]

    return (
        <header className="border-b border-gray-300">
            <div className="container mx-auto p-4">
                <ul className="flex gap-5">
                    {HeadMenuItems.map((each) => (
                        <li className="text-gray-666" key={each}>
                            {each}
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
