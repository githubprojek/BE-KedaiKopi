import express from "express";
import { getAllProducts, getProductById, addProduct, deletedProduct, newMenu, popularCoffee } from "../controllers/product.controllers.js";

const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/addproducts", addProduct);

router.delete("/deleteproducts/:productId", deletedProduct);

router.get("/newmenu", newMenu);
router.get("/popularcoffee", popularCoffee);

export default router;
