const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})
const user=mongoose.model('user',userSchema)

module.exports=user 