const mongoose = require('mongoose');


const loginSchema =  new mongoose.Schema({
    subject:{
        type:String,
        
        maxlength:400
        
     
    },
    date:{
        type:Date
    },
       
  
    query:{
        type:String,
        maxlength:500
        
        
    }
});


//loginSchema.pre("save", async function(next){
    //this.password = await bcrypt.hash(this.password , 10);
    //console.log(`Password save is ${this.password}`);
    //next();
    
//})

const Login = new mongoose.model("Login",loginSchema);

module.exports = Login;




