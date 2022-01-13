import mongoose from 'mongoose'
const {Schema, model} = mongoose

const itemSchema= new Schema({
    Name:{
        type: String,
        required:true
    },
    Description:{
        type:String
    },
    Quantity:{
        type:Number,
        default: 0
    }
}) 

export const Item = model("item",itemSchema)