'use client'

import { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";

const KioskContext = createContext();

const KioskProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState({});
    const [product, setProduct] = useState({});
    const [modal, setModal] = useState(false);
    const [order, setOrder] = useState([]);
    const [name, setName] = useState('');
    const [total, setTotal] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const getCategories = async () => {
            const res = await axios.get("/api/categories");
            setCategories(res.data);
            setCurrentCategory(res.data[0]);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getTotal = () => {
            if(order.length === 0) return;
            const newTotal = order.reduce((acc, item) => acc + (item.price * item.amount), 0);
            setTotal(newTotal);
        }
        getTotal();
    }, [order]);

    const handleClickCategory = id => {
        const [category] = categories.filter(cat => cat.id === id);
        setCurrentCategory(category);
        router.push('/');
    }

    const handleClickProduct = product => {
        setProduct(product)
    }
    
    const handleChangeModal = () => {
        setModal(!modal);
    }

    const handleAddOrder = ({categoryId, ...product}) => {
        if(order.some(item => item.id === product.id)){
            const newOrder = order.map(item => item.id === product.id ? product : item);
            setOrder(newOrder);
            toast.success("Guardado correctamente");
        }else{
            setOrder([...order, product]);
            toast.success("Producto agregado al pedido");
        }
        setModal(false);
    }

    const handleEditAmount = id => {
        setModal(true);
        const [product] = order.filter(item => item.id === id);
        setProduct(product);
    }

    const handleRemoveProduct = id => {
        const newOrder = order.filter(item => item.id !== id);
        setOrder(newOrder);
        toast.success("Producto eliminado del pedido");
    }

    const handleSubmitOrder = async (e) => {
        e.preventDefault();
        try{
            await axios.post("/api/orders", {
                name,
                total,
                purchase: order,
                date: Date.now().toString()
            });
            toast.success("Pedido guardado correctamente");
            // Reset App
            setCurrentCategory(categories[0]);
            setOrder([]);
            setName('');
            setTotal(0);
            setTimeout(() => {
                router.push('/');
            }, 1000);
        }catch(err){
            console.log(err);
        }
    }

    return (
        <KioskContext.Provider value={{
            categories,
            currentCategory,
            handleClickCategory,
            product,
            handleClickProduct,
            modal,
            handleChangeModal,
            order,
            handleAddOrder,
            name,
            setName,
            total,
            handleEditAmount,
            handleRemoveProduct,
            handleSubmitOrder
        }}>
            {children}
        </KioskContext.Provider>
    )
}


export { KioskProvider }
export default KioskContext;
