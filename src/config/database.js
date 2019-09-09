const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://maiconAugusto:maicon123@cluster0-gkjmo.mongodb.net/test?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(()=>{
    console.log('mongoDB connect')
})
.catch(()=>{
    console.log('mongoDB not connect')
})

module.exports = mongoose