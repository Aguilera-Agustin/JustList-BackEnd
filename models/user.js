const { Schema, model } = require('mongoose');


const UserSchema = Schema({
    email: {
        type: String,
        required: [true, 'Email must be provided'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Email must be provided'],
    },
    password: {
        type: String,
        required: [true, 'Password must be provided'],
    },
    available: {
        type: Boolean,
        default: true
    },
});


UserSchema.methods.toJSON = function() {
    const { __v,available, ...userData  } = this.toObject();    
    return userData;
}

module.exports = model( 'User', UserSchema );
