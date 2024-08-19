import {
    Header,
    LogosFront,
    ProductsDetails,
    ProductState,
    RelatedProducts,
} from './ui/Home'

export default function Home() {
    return (
        <>
            <div className="bg-white">
                <Header />
                <ProductState />
                <LogosFront />
            </div>
            <div className="bg-gray-f77">
                <ProductsDetails />
                <RelatedProducts />
            </div>
        </>
    )
}
