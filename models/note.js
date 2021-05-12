const { Schema, model } = require('mongoose');


const NoteSchema = Schema({
    title:{
        type: 'string',
        required: [true,'Title is required']
    },
    available:{
        type: 'boolean',
        default: true
    },
    content:{
        type: 'string',
        required: [true,'Description is required']
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category', 
        required:true
    }
});


NoteSchema.methods.toJSON = function() {
    const { __v,available, ...noteData  } = this.toObject();    
    return noteData;
}

module.exports = model( 'Note', NoteSchema );
