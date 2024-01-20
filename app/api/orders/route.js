import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    const orders = await prisma.order.findMany({
        where: {
            status: false
        }
    })
    return Response.json(orders)
}

export async function POST(request){
    const data = await request.json();
    const order = await prisma.order.create({
        data: {
            ...data
        }
    })
    return Response.json({
        message: 'Order created',
    })
}