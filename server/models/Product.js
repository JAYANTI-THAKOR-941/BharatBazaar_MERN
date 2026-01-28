import mongoose from 'mongoose'

const productSchema = mongoose.Schema({

    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    category:{
        type:String,
    },
    price:{
        type:Number,
        required: true
    },
    image:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Product',productSchema);