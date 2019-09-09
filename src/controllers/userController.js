const User = require('../model/user')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authJson')

module.exports={
    async store(req, res){
        const { email } = req.body

        function CreateToken(params ={}){
            return jwt.sign(params,authConfig.secret,{
                expiresIn: "7d"
            })}

        if(await User.findOne({email})){
            return res.status(200).json({message: 'Sorry, existing user'})
        }

        const user = await User.create(req.body)
        return res.status(200).json({user, token: CreateToken({id: user.id})})
    },

    async update(req, res){
        
        const user = await User.findByIdAndUpdate(req.userId,req.body,{new: true})
        return res.status(200).json(user)
    }
}