const Add = require('../model/addProduct')
const User = require('../model/user')

module.exports={
    async store(req,res){
        //req.userId
        //req.headers.user *ID*
        
        const userLogged = await User.findById(req.userId)
        const productLike = await Add.findById(req.params.id)

        if(productLike.like.includes(userLogged._id)){
            return res.json({message: "I like that!"})
        }

        productLike.like.push(userLogged._id)
        productLike.value += 1
        productLike.save()
        return res.status(200).json(productLike)

    }
}