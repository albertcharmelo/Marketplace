import dbConnect from "lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import { getProductoById } from "controllers/ProductoController";

export default async function handler(req: NextApiRequest , res : NextApiResponse ) {
    
    const { method } = req 
    
    await dbConnect().catch((error) => {
        res.status(400).json({ success: false });
    });
    
    switch (method) {
        case "GET":
        try{
            getProductoById(req,res);
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