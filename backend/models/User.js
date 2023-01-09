const mongoose=require('mongoose')
const userSchema=new mongoose.Schema({


    username:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    password:{
        type:String,
        required:true
    },

    sex:{
        type:String,
        
    },

    age:{
        type:Number,
        
        
    },

     weight:{
        type:Number,
        
       
    },
    height:{
        type:Number,
        
    },


    role:{
        type:String,
        default:"user",
        enum:["user","admin"]
    },

    imageUrl: {
        type:String,
    }

   
});
module.exports=mongoose.model('User',userSchema);