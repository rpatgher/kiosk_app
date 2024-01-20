'use client'
import Product from "@/components/Product";
import useKiosk from "@/hooks/useKiosk";
import { Suspense } from "react";

export default function Home() {
    const { currentCategory } = useKiosk();
    return (
        <>
            <h1 className="text-4xl font-black ">{currentCategory.name}</h1>
            <p className="text-2xl my-10">Elige y personaliza tu pedido a continuación</p>
            <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {/* <Suspense fallback={<p>Loading...</p>}> */}
                    {currentCategory?.products?.map(product => (
                        <Product 
                        key={product.id}
                        product={product}
                        />
                    ))}
                {/* </Suspense> */}
            </div>
        </>
    )
}
