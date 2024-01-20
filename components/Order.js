import { formatToMoney } from "@/helpers"
import { toast } from "react-toastify"
import Image from "next/image"
import axios from "axios"

const Order = ({order}) => {
    const { id, total, name, purchase: products } = order;

    const completeOrder = async () => {
        try {
            const data = await axios.put(`/api/orders/${id}`);
            toast.success('Orden completada')
        } catch (error) {
            console.log(error);
            toast.success('Hubo un error')
        }
    };

    return (
        <div className="border p-10 space-y-5">
            <h3 className="text-2xl font-black">Orden: {id}</h3>
            <p className="text-lg font-bold">Cliente: {name}</p>
            <div className="">
                {products.map(product => (
                    <div key={product.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                        <div className="w-32">
                            <Image
                                src={`/assets/img/${product.image}.jpg`}
                                alt={`${product.name} Image`}
                                width={400}
                                height={500}
                            />
                        </div>
                        <div className="p-5 space-y-2">
                            <h4 className="text-xl font-bold text-amber-500">{product.name}</h4>
                            <p className="text-lg font-bold">Cantidad: {product.amount}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="md:flex md:items-center md:justify-between my-10">
                <p className="mt-5 font-black text-4xl text-amber-500">Total a pagar: {formatToMoney(total)}</p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded"
                    onClick={completeOrder}
                >
                    Completar orden
                </button>
            </div>
        </div>
    )
}

export default Order
