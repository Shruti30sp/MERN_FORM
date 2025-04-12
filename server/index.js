const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //CORS (Cross-Origin Resource Sharing) is used to allow or restrict access to your server’s resources from different origins (domains).
const EmployeeModel = require('./Model/Employee')

const app = express();
app.use(express.json()); //transfer data into json format coming from frontend
app.use(cors());

mongoose.connect("mongodb://localhost:27017/register");


app.post('/login',(req,res)=>{
    const {email, password}= req.body;
    EmployeeModel.findOne({email:email})
    .then(user=>{
        if(user)
        {
            if(user.password === password)
            {
                res.json("Success")
            }else{
                res.json("the password is incorrrect!!")
            }
        }
        else{
            res.json("no recaod existed!")
        }
    })
})
app.post('/register', (req,res)=>{
 EmployeeModel.create(req.body) //records are under body from frontend
 .then(employees => res.json(employees))
 .catch(err=>res.json(err))

})


app.listen(3001, () =>{
    console.log("Server Started");
    
});
