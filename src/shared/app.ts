import ProductRepository from "./repositories/ProductRepository";
import routes from "./routes";
import CronService from "./services/cronService";
import ElasticService from "./services/elasticService";
const app = routes

const productRepository = new ProductRepository()
const elasticService = new ElasticService({
    productRepository
})

const cronService = new CronService({
    elasticService
})
cronService.bulkProducts()
export default app