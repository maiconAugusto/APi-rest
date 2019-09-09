const addProduct = require('../model/addProduct')

module.exports={
    async index(req, res){
        console.log(req.userId)
        const product = await addProduct.find({author: req.userId})
            return res.json({product})
    }
    
}