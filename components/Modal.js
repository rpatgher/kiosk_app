'use client'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import useKiosk from '@/hooks/useKiosk';
import Image from 'next/image';
import { formatToMoney } from '@/helpers';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#myapp');

const ModalComponent = () => {
    const { modal, handleChangeModal, product, handleAddOrder, order } = useKiosk();
    const { name, image, price } = product;
    const [amount, setAmount] = useState(1);
    const [editProduct, setEditProduct] = useState(false);


    useEffect(() => {
        if(order.some(item => item.id === product.id)){
            setEditProduct(true);
            const [item] = order.filter(item => item.id === product.id);
            setAmount(item.amount);
        }else{
            setEditProduct(false);
            setAmount(1);
        }
    }, [product, editProduct]);

    return (
        modal && (
            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <div className="md:flex gap-10">
                    <div className='md:w-1/3'>
                        <Image 
                            src={`/assets/img/${image}.jpg`}
                            alt={`${name} Image`}
                            width={300}
                            height={400}
                            className="w-full"
                        />
                    </div>
                    <div className='md:w-2/3'>
                        <div className='flex justify-end '>
                            <button
                                onClick={() => {
                                    handleChangeModal();
                                }}
                            >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            </button>
                        </div>
                        <h1 className="text-3xl font-bold mt-5">{name}</h1>
                        <p className='mt-5 font-black text-5xl text-amber-500'>{formatToMoney(price)}</p>
                        <div className='flex items-center gap-4 mt-5'>
                            <button
                                type='button'
                                onClick={() => {
                                    if (amount <= 1) return;
                                    setAmount(amount - 1)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                            <p className='text-xl'>{amount}</p>
                            <button
                                type='button'
                                onClick={() => {
                                    if (amount >= 5) return;
                                    setAmount(amount + 1)
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </button>
                        </div>
                        <button
                            type='button'
                            className='bg-indigo-600 hover:bg-indigo-800 text-white mt-5 px-5 py-2 uppercase font-bold rounded'
                            onClick={() => handleAddOrder({...product, amount})}
                        >
                            {editProduct ? 'Guardar Cambios' : 'Añadir al Pedido'}
                        </button>
                    </div>
                </div>
            </Modal>
        )
    )
}

export default ModalComponent
