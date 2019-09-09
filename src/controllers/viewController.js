const User = require('../model/user')
const Add = require('../model/addProduct')
module.exports={
    index(req, res){
        const view = User.findById(req.params.id,(err,data)=>{
            if(err) return res.json({message: 'Not found'})
            if(!data) return res.json({message: 'User not exist'})
            if(data) return res.json(data)
        })
            
    },
    indexProduct(req, res){
        const view = Add.find({author:req.params.id},(err,data)=>{
            if(err) return res.json({message: 'Not found'})
            if(!data) return res.json({message: 'Product not exist'})
            if(data) return res.json(data)
        })
    }
}