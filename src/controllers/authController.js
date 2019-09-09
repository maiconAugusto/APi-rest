const User = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../config/authJson')

module.exports={
    async store(req, res){
        const { email, password } = req.body

        function CreateToken(params ={}){
            return jwt.sign(params,authConfig.secret,{
                expiresIn: "7d"
            })}

        if(!await User.findOne({email})){
            return res.status(400).json({message: 'User Not Exist'})
        }

        const user = await User.findOne({email})
        if(! await bcrypt.compare(password, user.password)){
            return res.status(200).json({message: 'Password Invalid'})
        }
        return res.status(200).json({user, token: CreateToken({id: user.id})})    
    }
}