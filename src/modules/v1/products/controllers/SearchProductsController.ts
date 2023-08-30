import { Request, Response } from "express";
import { ZodError, z } from "zod";
import elasticSearchClient from "../../../../shared/clients/elastic";

const productsSchema = z.object({
    search:z.string(),
    limit:z.string().default("10").transform(item=>Number(item))
  })
  
export default class SearchProductsController{
    async execute(request:Request, response:Response){
        try {
            const {search, limit} = productsSchema.parse(request.query)
            const { hits } = await elasticSearchClient.search({
              index: 'all_products_index',
              body: {
                size:limit,
                query: {        
                  bool:{
                    should:[
                      {
                        query_string:{
                          query:`*${search}*`,
                          fields:['title','description'],                  
                        },                
                      }
                    ]
                  }
                },
              },
            });
        
            const products = hits.hits.map((item:any)=>{
              const {title, description, currencyType, price, category} = item._source
              return {
                title,
                description,
                currencyType,
                price,
                category
              }
            })
        
            return response.json({
              data:{
                products:products,
                _count:hits.hits.length
              }
            })
          } catch (error) {
            console.error(error)
            if (error instanceof ZodError){
              return response.status(422).json({
                error
              })
            }
        
            return response.status(400).send("Bad Request")
          }
    }
}