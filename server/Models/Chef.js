const {Schema,model, default: mongoose}=require("mongoose");

const chefSchema=new Schema({
    name:String,
    email:String,
    password:String,
    buissnessName:String,
    buissnessAddress:String,
    notifications:[{type:mongoose.Types.ObjectId,ref:"Notification"}],
    undreadNotification:{type:Boolean,default:false},
    isActive: { type: Boolean, default: false },
    buissnessLogo:String,
    licence:String,
    openingTime:Date,
    closingTime:Date
});

const Chef=model(chefSchema,"Chef");

module.exports=Chef;