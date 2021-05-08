const { response } = require('express');
const bcryptjs = require('bcryptjs');
const encrypt = require('../helpers/encryption');
const User = require('../models/user');
const {generateJWT} = require('../helpers/jwtGeneration') 

const login = async (req,res=response)=>{
    const {email, password} = req.body;
    try {
        const user = await User.findOne({email}) //Exist the user?
        if(!user){
            return res.status(400).json({
                msg:'The user could not be found'
            })
        }
        if(!user.available){
            return res.status(400).json({
                msg:'The user was deleted'
            })
        }
        
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                msg:'Your email or password are incorrect'
            })
        }
        const token = await generateJWT(user._id);
        return res.json({
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'An error occurred in the server'
        })
    }
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