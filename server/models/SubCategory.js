import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
        required: true
    }
});
const subCategory = mongoose.model('subCategory',subCategorySchema);
export default subCategory;