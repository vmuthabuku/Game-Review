const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    reviewer:{
        type:String,
        required:true
    },
    review:{
        type:String,
        default:'n/a'
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5
    },
    price:{
        type:String,
        default:'n/a'
    },
    ownerId:{
        type:String,
        required:true
    }
},{timestamps:true})

const Game = mongoose.model('Game',gameSchema )

module.exports = { Game }