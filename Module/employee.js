const express = require('express');
const mongoose = require('mongoose');

const EmpSchema = new mongoose.Schema({
       
        empName : {type: String},
        position : {type:String},
        deptName : {type: String},
        phNo :{type:Number},
        email:{type:String}

        
});

const EmpModel = mongoose.model("employeee",EmpSchema);
module.exports = EmpModel;