const express = require('express');
const mongoose= require('mongoose');
const bodyparser = require('body-parser');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
const Login = require('./model/Login');
const cors = require('cors');
const URL='mongodb+srv://ayushh:ayush@cluster0.5a5hg.mongodb.net/Cluster0?retryWrites=true&w=majority';
app.use(bodyparser.json());
app.use(express.json());

mongoose.connect(URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`sucessfully connected`);
}).catch((e)=>{
    console.log(e);
})
app.use(cors());

//app.get('/',(req,res)=>{
  //  res.send("hello");
//});


app.post('/items' , async(req,res)=>{
    const register= new Login(req.body);
    
    console.log(register);
    const insertR =  register.save();
    res.send(insertR);
        
   
    
});   
 app.get('/items',(req,res,next)=>{
     Login.find({})
     .then(data => res.json(data))
     .catch(next)

}); 

    





app.listen(port,(req,res)=>{
    console.log(`connected at ${port}`);
    
})