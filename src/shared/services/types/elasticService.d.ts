export type IElasticServiceConstructor = {
    productRepository:ProductRepository
}
export interface IElasticServiceAttributes{
    productRepository:ProductRepository
}

export type IElasticServiceIndexes = "search_products" | "search_products_ids"
