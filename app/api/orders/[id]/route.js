import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request, {params}){
    const { id } = params
    const orders = await prisma.order.findMany({
        where: { id: +id }
    })
    return Response.json(orders)
}

export async function PUT(request, {params}){
    const { id } = params
    const orders = await prisma.order.update({
        where: { id: +id },
        data: {
            status: true
        }
    })
    return Response.json({
        message: 'Order updated successfully',
    })
}