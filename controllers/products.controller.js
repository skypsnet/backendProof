const Product = require('../models/product.model');

const getProducts = async (req, res) => {
  
    try{
  
      const products = await Product.find(req.body);
      res.status(200).json(products)
  
    }catch{
  
      res.status(500).json({message: error.message})
  
    }
  
  }

const getProduct = async (req, res)=>{

    try{
       const {id} = req.params;
       const product = await Product.findById(id);
       res.status(200).json(product);
  
    }catch(error){
  
      res.status(500).json({message: error.message})
  
    }
  
}

const createProduct = async (req, res)=>{
   
    try{
      const product = await Product.create(req.body);
      res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message})
    }
   
}

const updateProduct = async(req,res)=>{
     
    try{
 
     const {id} = req.params;
     const producto = await Product.findByIdAndUpdate(id, req.body);
 
     if(!producto){
       return res.status(404).json({message: "Producto no encontrado"});
     }
 
     const productoAct = await Product.findById(id);
 
     console.log(productoAct)
 
     res.status(200).json(productoAct);
 
 
    }catch(error){
      res.status(500).json({message: error.message})
    }
 
 }

const deleteProduct = async(req,res)=>{

    try{
 
     const {id} = req.params;
     console.log(id)
     const Producto = await Product.findByIdAndDelete(id);
 
     if(!Producto){
       return res.status(500).json({message: "Producto no encontrado"});
     }
 
     res.status(200).json({message: "Producto eliminado exitosamente"})
 
    }catch(error){
      
     res.status(500).json({message:error.message})
 
    }
     
 
 }



module.exports = {

    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct

}