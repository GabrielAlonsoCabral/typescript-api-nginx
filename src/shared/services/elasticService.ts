import elasticSearchClient from "../clients/elastic";
import ProductRepository from "../repositories/ProductRepository";
import { IElasticServiceAttributes, IElasticServiceConstructor } from "./types/elasticService";


export default class ElasticService implements IElasticServiceAttributes{
    productRepository: ProductRepository;
    
    constructor(props:IElasticServiceConstructor){
        Object.assign(this,props)
    }
    
    async bulkProducts(){
        const products = await this.productRepository.findAll() 
               
        const indexName = 'all_products_index';
        const docType = '_doc';
              
        this.bulkInsertData(products, indexName, docType)
          .then(() => {
            console.error('Bulk inserted sucessfully!');
        })
          .catch((error) => {
            console.error('Error inserting data:', error);
          });
        
  } 

  async bulkInsertData(data:any[], indexName:string,docType:string) {
    const body = data.flatMap((doc) => [{ index: { _index: indexName, _type: docType } }, doc]);
  
    try {
      const { errors } = await elasticSearchClient.bulk({ refresh: true, body });
  
      if (errors) {
        console.error('Bulk insert errors:', errors);
      }
            
    } catch (error) {
      console.error('Error bulk inserting data:', error);
    }
  }
  
}

