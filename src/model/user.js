const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    avatar:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true,
    }
},{
    timestamps: true
})
userSchema.pre('save', async function(next){
    this.password = await bcrypt.hash(this.password, 10)
    return next()
})

module.exports = model('users',userSchema)