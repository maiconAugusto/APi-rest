const { model, Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Add = new Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    condition:{
        type: String,
        required: true
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:'users',
        required: true
    },
    image:{
        type: String,
        required: true
    },
    postDate:{
        type: String,
        required: true
    },
    like:[{
        type: Schema.Types.ObjectId,
        ref: 'user',
        require: true
    }],
    value:{
        type: Number,
        default: 0
    },
},{
    timestamps: true
})

Add.plugin(mongoosePaginate)

module.exports = model('products',Add)