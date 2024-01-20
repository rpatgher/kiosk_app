'use client'
import useKiosk from "@/hooks/useKiosk"
import ProductOverview from "@/components/ProductOverview";

const Overview = () => {
    const { order } = useKiosk();
    return (
        <>
            <h1 className="text-4xl font-black">Resumen</h1>
            <p className="text-2xl my-10">Revisa tu pedido</p>
            {order.length === 0 ? (
                <p className="text-center text-2xl">No hay elementos en tu pedido</p>
            ) : (
                order.map(product => (
                    <ProductOverview
                        key={product.id}
                        product={product}
                    />
                ))
            )}
        </>
    )
}

export default Overview
