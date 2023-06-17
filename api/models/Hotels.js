import mongoose from 'mongoose';


const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        require:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        required:true
    },
    photo:{
        type:[String]
    },
    description:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String],
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }
})

export default mongoose.model('Hotels', HotelSchema);