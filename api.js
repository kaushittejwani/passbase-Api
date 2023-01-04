const express = require('express')
const app=express();
const cors=require('cors')
const bodyParser=require('body-parser');
const port=process.env.port||8000;
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
app.use(express.static('public'))
var data="";
app.post('/passbase-webhooks',(req,res)=>{
     data=req.body
    res.status(200);
    console.log(data);
 
    switch(data.events){
        case"VERIFICATION_COMPLETED":
        console.log("VERIFICATION_PENDING")
        break;
        case"VERIFICATION_REVIEWED":
        console.log('VERIFICATION_APPROVED')
        break;
        default:
            console.log('VERIFICATION_PENDING')
    }
    
})
app.get('/passbase-webhooks',(req,res)=>{
    
 setInterval(() => {
    res.status(200);
    res.send(data);
 },1000);
   
})
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
