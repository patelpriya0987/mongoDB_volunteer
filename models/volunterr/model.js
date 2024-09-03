const mongoose = require('mongoose');
const todoSchema = mongoose.Schema({
    fname : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    number : {
        type:Number,
        required:true
    },
    skill : {
        type:String,
        required:true
    },
    complate : {
        type:Boolean,
        default:false
    }
})

const todoModel = mongoose.model('volunteer',todoSchema);

module.exports = todoModel;