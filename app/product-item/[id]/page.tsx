import {
    Login,
    LogosFront,
    Plans,
    ProductsDetails,
    ProductState,
    RelatedProducts,
} from '../.././ui/Home'

export default function Home() {
    return (
        <>
            <div className="bg-white">
                <ProductState />
                <LogosFront />
            </div>
            <div className="bg-gray-f77">
                <ProductsDetails />
                <RelatedProducts />
            </div>
            <div className="bg-white">
                <Plans />
            </div>
            <div className="bg-gray-f77">
                <Login />
            </div>
        </>
    )
}
