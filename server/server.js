const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get("/message",function(req,res){
    res.json({message: "Hello from Server !! Yayyyy !!"});
});

app.listen(8000,function(){
    console.log("Server started at port 8000");
})