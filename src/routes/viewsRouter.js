import { Router } from "express";
import {__dirname} from '../utils.js';
import ProductManager from "../daos/filesystem/manager.js";
const productManager = new ProductManager(__dirname + "/data/nuevoProducto.json");
const router = Router();
import * as controller from "../controllers/chatController.js"

router.get('/', async (req, res)=>{
    const products = await productManager.getProducts();
    res.render('home', { products })
});

router.get('/realtimeproducts', async (req, res) => {
    const products = await productManager.getProducts();
    res.render('realTimeProducts', { products }); 
});

router.get("/chats", controller.getAll);


export default router; 