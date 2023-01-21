import Producto from "models/Producto";
import { NextApiRequest, NextApiResponse } from "next";
import CreateProducto from "interface/CreateProducto";


 /* Trae todos los productos desde la base de datos */
export async function getAllProductos(req : NextApiRequest , res : NextApiResponse) {
    
    try {
        const productos = await Producto.find({});
        res.status(200).json({ success: true, data: productos });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
  
}

/* Crea un nuevo modelo en la base de datos */
export async function createProducto(req : NextApiRequest , res : NextApiResponse) {
    
    try {
        
        const producto = await Producto.create(req.body as CreateProducto); 
        res.status(201).json({ success: true, data: producto });
    }
    catch (error) {
        res.status(400).json({ success: false, error: error });
    }
}

/* Trae un producto por su id */
export async function getProductoById(req : NextApiRequest , res : NextApiResponse) {
    
    try {
        const producto = await Producto.findById(req.query.id as string);
        res.status(200).json({ success: true, data: producto });
    }
    catch (error) {
        res.status(400).json({ success: false });
    }
}


