const Add = require('../model/addProduct')
const User = require('../model/user')

module.exports={
    async index(req, res){

        const add = await Add.paginate({},{
            page: req.query.page || 1,
            limit: 20,
            populate: ['author'],
            sort: '-createdAt' })
        return res.json(add)
    },
    async store(req, res){
 
        const add = await Add.create({...req.body, author: req.userId})
        req.io.emit('newProduct',add)
        return res.status(200).json(add)
    },

    async update(req, res){

        const add = await Add.findOneAndUpdate({author: req.params.id}, req.body, {new: true })
        return res.status(200).json(add)
    },

    async remove(req, res){
        //req.params.id *id da publicação*
        const add = await Add.findByIdAndDelete(req.params.id,(err, data)=>{
            if(err) return res.status(400).json({message: 'Delete Error'})
            if(!data) return res.status(200).json({message: 'Product not Exist'})
        return res.status(200).json()})
    }
}