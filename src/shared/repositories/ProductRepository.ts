import prisma from "../clients/prisma";

export default class ProductRepository{
    async findManyWithCategories({startDate, endDate}:{startDate?:Date, endDate?:Date}){
        return prisma.product.findMany({
            where:{
                isActive:true,
                createdAt: startDate || endDate ? {
                    gte:startDate ? startDate : undefined,
                    lte:endDate ? endDate : undefined
                } : undefined 
                
            },
            select:{
                id:true,
                title:true,
                description:true,
                // currencyType:true,
                // price:true, 
                coverUrl:true,               
                // category:{
                //     select:{
                //         title:true
                //     }
                // }
            },
        })
    }
}