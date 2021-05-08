const { response } = require('express');
const bcryptjs = require('bcryptjs')


const login = (req,res=response)=>{
    res.json({
        tes:'ting'
    })
}

module.exports={
    login
}