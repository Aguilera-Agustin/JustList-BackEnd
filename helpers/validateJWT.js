const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


const validateJWT = async( req = request, res = response, next ) => {

    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            msg: 'Your request has no token.'
        });
    }

    try {
        
        const {uid} = jwt.verify( token, process.env.SECRETORPRIVATEKEY );

        // leer el usuario que corresponde al uid
        const user = await User.findById( uid );

        if( !user ) {
            return res.status(401).json({
                msg: 'User not found with your token'
            })
        }

        // Verificar si el uid tiene estado true
        if ( !user.available ) {
            return res.status(401).json({
                msg: 'User not available with your token'
            })
        }
        
        
        req.user = user;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token not valid'
        })
    }

}




module.exports = {
    validateJWT
}