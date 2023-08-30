import express from 'express';
import { searchProductsRoutes } from '../products/routes/SearchProductsRoutes';

const RoutesV1 = express();

RoutesV1.use(
    '/v1',    
    searchProductsRoutes
)


export default RoutesV1
