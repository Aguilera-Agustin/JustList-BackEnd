const Category = require('../models/category');
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
const existCategoryWithId = async (id="")=>{
    const myCategory = await Category.findById(id)
    if(!myCategory){
        throw new Error('Category not found')
    }
}



module.exports={
    emailIsAlreadyExists,
    existsUserWithId,
    existCategoryWithId
}