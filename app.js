
const user = require('./models/user');
const _ = require('lodash');
const Sequalize = require('sequelize');
const sequalize = require('./config/database.js')

var express = require('express');
var app = express();

app.post('/signup',async(req,res)=>{
    try{
    var body = _.pick(req.body,['mobileNo','emailId','full_name','user_status']);
    console.log(body);
    if(!body.mobileNo){
        var msg =  {message: "Mobile Number is required",status:"500", userDetails: null};
        res.status(500).send(msg)
        return false;
    }
    if(!body.emailId){
        var msg =  {message: "EmailId is required",status:"500", userDetails: null};
        res.status(500).send(msg)
        return false;
    }
    await user.findOne({
        where:{
            mobileNo:body.mobileNo
        }
    }).then(re=>{
        if(re){
            var msg =  {message: "User already exist",status:"501", userDetails: re};
            res.status(500).send(msg)
            return false;
        }
        else{
            var user1 = new user(body);
            user.save();
            var msg =  {message: "User Saved successfully",status:"202", userDetails: user1};
            res.status(200).send(msg)
        }
    })
}
    
catch(err){
    console.log(err);
    var msg =  {message: "Something went wrong",status:"500"};
    res.status(200).send(msg)
}
})       


app.post('/viewUserByMobileNo',async(req,res)=>{
    try{
    var body = _.pick(req.body,['mobileNo','emailId','full_name','user_status']);
    if(!body.mobileNo){
        var msg =  {message: "Mobile Number is required",status:"500", userDetails: null};
        res.status(500).send(msg)
        return false;
    }
    await user.findOne({
        where:{
            mobileNo: body.mobileNo
        }
    }).then(re=>{
        var msg =  {message: "User fetched successfully",status:"202", userDetails: re};
        res.status(200).send(msg)
    })
}
    
catch(err){
    console.log(err);
    var msg =  {message: "Something went wrong",status:"500"};
    res.status(200).send(msg)
}
})       

app.post('/viewAllUser',async(req,res)=>{
    try{
    var body = _.pick(req.body,['mobileNo','emailId','full_name','user_status']);
    if(!body.mobileNo){
        var msg =  {message: "Mobile Number is required",status:"500", userDetails: null};
        res.status(500).send(msg)
        return false;
    }
    await user.findAll()
    .then(re=>{
        var msg =  {message: "User fetched successfully",status:"202", userDetails: re};
        res.status(200).send(msg)
    })
}
    
catch(err){
    console.log(err);
    var msg =  {message: "Something went wrong",status:"500"};
    res.status(200).send(msg)
}
})       




var port =3001;
app.listen(port, () => {
    sequalize.sync();
    console.log(`listining on port ${port}`);
    });
             