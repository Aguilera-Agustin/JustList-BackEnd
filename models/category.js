const { Schema, model } = require('mongoose');


const CategorySchema = Schema({
    name:{
        type: 'string',
        required: [true,'Name is required']
    },
    available:{
        type: 'boolean',
        default: true
    },
    color:{
        type:'string',
        default: 'red'
    },
    user:{
        type:Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    }
});


CategorySchema.methods.toJSON = function() {
    const { __v,available, ...CategoryData  } = this.toObject();    
    return CategoryData;
}

module.exports = model( 'Category', CategorySchema );
