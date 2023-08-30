import prisma from "../clients/prisma";

export default class ProductRepository{
    async findAll(){
        return prisma.product.findMany({
            where:{
                isActive:true
            },
            select:{
                title:true,
                description:true,
                currencyType:true,
                price:true,                
                category:{
                    select:{
                        title:true,
                        description:true
                    }
                }
            },
        })
    }
}