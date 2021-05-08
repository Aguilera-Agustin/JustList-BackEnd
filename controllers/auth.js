const { response } = require('express');
const bcryptjs = require('bcryptjs')


const login = (req,res=response)=>{
    res.json({
        tes:'ting'
    })
}
const register = (req,res=response)=>{
    res.json({
        test:'Register'
    })
}

module.exports={
    login,
    register
}