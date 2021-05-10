const User = require('../models/user')

const emailIsAlreadyExists = async (email="")=>{
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error(`The email ${email} is already in use`)
    }
}

const existsUserWithId = async (id="")=>{
    const user = await User.findById(id)
    if(!user){
        throw new Error('User not found')
    }
}

module.exports={
    emailIsAlreadyExists,
    existsUserWithId
}