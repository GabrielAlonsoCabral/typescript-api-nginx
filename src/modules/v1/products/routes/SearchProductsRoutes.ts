import { Router } from "express";
import SearchProductsController from "../controllers/SearchProductsController";

const searchProductsRoutes = Router()

const searchProductsController = new SearchProductsController()

searchProductsRoutes.get("/products",searchProductsController.execute)

export {
    searchProductsRoutes
};
