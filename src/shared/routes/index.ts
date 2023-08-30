import express from 'express';
import RoutesV1 from "../../modules/v1/routes";
import cors from 'cors';

const routes = express()
routes.use(cors())
routes.use(    
    RoutesV1
)

export default routes