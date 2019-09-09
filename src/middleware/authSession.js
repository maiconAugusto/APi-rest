const authConfig = require('../config/authJson')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next )=>{
    const authHeaders = req.headers.authorization

    if(! authHeaders){
        return res.status(401).json({ message: 'No token Provided'})
    }
    const parts = authHeaders.split(' ')
    if(!parts.length === 2){
        return res.status(401).json({message: 'Token error'})
    }
    const [, token ] = parts
    jwt.verify(token, authConfig.secret,(err,decode)=>{
        if(err) return res.status(401).json({ message: 'Error, token Invalid'})
        req.userId = decode.id
        return next()
    })
}