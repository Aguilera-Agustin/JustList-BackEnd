const User = require('../models/user')

const emailIsAlreadyExists = async (email="")=>{
    const emailExist = await User.findOne({email});
    if(emailExist){
        throw new Error(`The email ${email} is already in use`)
    }
}


module.exports={
    emailIsAlreadyExists
}