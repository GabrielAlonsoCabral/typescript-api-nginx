import dayjs from "dayjs";
import elasticSearchClient from "../clients/elastic";
import ProductRepository from "../repositories/ProductRepository";
import { IElasticServiceAttributes, IElasticServiceConstructor, IElasticServiceIndexes } from "./types/elasticService";


export default class ElasticService implements IElasticServiceAttributes{
    productRepository: ProductRepository;
    
    constructor(props:IElasticServiceConstructor){
        Object.assign(this,props)
    }
    
    async bulkProducts({startDate, endDate}:{startDate?:Date,endDate?:Date}){
        const products = await this.productRepository.findManyWithCategories({startDate,endDate})
        const docType = '_doc';
              
        this.bulkInsertData(products,'search_products', docType)
          .then(() => {
            console.info('Bulk inserted sucessfully!');
        })
          .catch((error) => {
            console.error('Error inserting data:', error);
          });
        
  }

  async bulkInsertData(data:any[], indexName:IElasticServiceIndexes,docType:string) {
    const body = data.flatMap((doc) => [{ index: { _index: indexName, _type: docType } }, doc]);
    try {
      const { errors, items } = await elasticSearchClient.bulk({ body, index:indexName, refresh:true });
      
      if (errors) {
        console.error('Bulk insert errors:', errors);
      }
            
    } catch (error:any) {      
      console.error('Error bulk inserting data:', error);
    }
  } 
}

