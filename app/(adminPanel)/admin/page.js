'use client'

import useSWR from 'swr'
import axios from 'axios'

import Order from '@/components/Order'


const Admin = () => {
    const fetcher = () => axios('/api/orders').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/orders', fetcher, { refreshInterval: 1000 })
    return (
        <>
            <h1 className="text-4xl font-black">Panel de Administración</h1>
            <p className="text-2xl my-10">Administra tus órdenes</p>
            {data && data.length ? (data.map(order => (
                <Order 
                    key={order.id}
                    order={order}
                />
            ))) : (
                <p>No hay órdenes pendientes</p>
            )}
        </>
    )
}

export default Admin
