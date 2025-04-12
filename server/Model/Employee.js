const mongoose = require('mongoose')

//schema for the database

const EmployeeSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

// model creating
const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports =EmployeeModel //exporting