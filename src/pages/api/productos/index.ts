import dbConnect from "lib/mongodb";
import { createProducto,getAllProductos,getProductoById } from "controllers/ProductoController";
import { NextApiRequest, NextApiResponse } from "next";





export default async function handler(req: NextApiRequest , res : NextApiResponse ) {

    const { method } = req 
    
    await dbConnect().catch((error) => {
        res.status(400).json({ success: false });
    });

    
    switch (method) {
        case "GET":
        try{
            getAllProductos(req,res);
        }
        catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        case "POST":
        try{
             createProducto(req,res);
        }
        catch (error) {
            res.status(400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
}


