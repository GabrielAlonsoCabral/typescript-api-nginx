import express from 'express';
import RoutesV1 from "../../modules/v1/routes";

const routes = express()
routes.use(
    RoutesV1
)

export default routes