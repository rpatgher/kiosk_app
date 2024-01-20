import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(){
    const categories = await prisma.category.findMany({
        include: {
            products: true
        }
    })
    return Response.json(categories)
}