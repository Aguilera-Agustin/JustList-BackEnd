const { response } = require('express');
const bcryptjs = require('bcryptjs');
const encrypt = require('../helpers/encryption');
const User = require('../models/user');

const login = (req,res=response)=>{
    res.json({
        tes:'ting'
    })
}
const register = async(req,res=response)=>{
    const {name, password, email} =req.body;
    const encryptedPassword = encrypt(password);
    const user = new User({email, name, password});
    user.password=encryptedPassword
    await user.save();
    res.json({
        user
    })
}

module.exports={
    login,
    register
}