import Image from "next/image"
import useKiosk from "@/hooks/useKiosk"
import { formatToMoney } from "@/helpers/"

const Product = ({product}) => {
    const { name, image, price } = product;
    const { handleClickProduct, handleChangeModal } = useKiosk();
    return (
        <div className="border p-3">
            <Image
                src={`/assets/img/${image}.jpg`}
                alt={`${name} Image`}
                width={200}
                height={200}
                className="w-full"
            />
            <div className="p-5">
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">{formatToMoney(price)}</p>
                <button 
                    className="bg-indigo-500 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
                    type="button"
                    onClick={() => {
                        handleClickProduct(product)
                        handleChangeModal()
                    }}
                >
                    Agregar
                </button>
            </div>
        </div>
    )
}

export default Product
