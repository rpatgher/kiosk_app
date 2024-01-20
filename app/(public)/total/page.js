'use client'
import { useEffect, useCallback } from "react";
import useKiosk from "@/hooks/useKiosk";
import { formatToMoney } from "@/helpers";

const Total = () => {
    const { order, name, setName, handleSubmitOrder, total } = useKiosk();

    const checkOrder = () => {
        return order.length === 0 || name === '' || name.length < 3;
    };

    return (
        <>
            <h1 className="text-4xl font-black">Total</h1>
            <p className="text-2xl my-10">Confirma tu pedido a continuación</p>

            <form
                onSubmit={handleSubmitOrder}
            >
                <div>
                    <label htmlFor="name" className="block uppercase text-slate-800 font-bold text-xl">Nombre</label>
                    <input 
                        type="text" 
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        id="name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </div>
                <div className="mt-10">
                    <p className="text-2xl">Total a pagar: <span className="font-bold">{formatToMoney(total)}</span></p>
                </div>
                <div className="mt-5">
                    <input 
                        className={`bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center ${checkOrder() ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-indigo-700 cursor-pointer'}`}
                        type="submit"
                        value="Confirmar Pedido"
                        disabled={checkOrder()}
                    />
                </div>
            </form>
        </>
    )
}

export default Total
