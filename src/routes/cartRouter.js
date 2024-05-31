import { Router } from "express";
import CartManager from "../daos/filesystem/cartsManager.js";
const router = Router();
import {__dirname} from '../utils.js'

const cartManager = new CartManager( __dirname + "/data/cart.json");

router.post("/", async (req, res) => {

    try {
        const cart = await cartManager.createCart();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
})

router.get("/:cid", async (req, res) => {
    try {
        const { cid } = req.params;
        const cart = await cartManager.getCartById(cid);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ msg: "Error" })
    }
})

router.post("/:cid/productos/:id", async (req, res) => {
    try {
        const { cid } = req.params;
        const { id } = req.params;
        const response = await cartManager.saveToCart(cid, id);
        res.json(response)

    } catch (error) {
        res.status(500).json({ msg: "Error" })

    }
})
export default router