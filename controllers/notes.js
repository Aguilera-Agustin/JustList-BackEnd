const { response } = require("express");
const Category = require("../models/category");
const Note = require("../models/note");

const createNote = async (req, res=response)=>{
    const {title, content, category} = req.body;
    const myCategory = await Category.findById(category)
    if(myCategory){
        const data = {
            title,
            content,
            category: myCategory._id
        }
        const myNote = new Note(data)
        await myNote.save()
        return res.status(201).json(myNote)
    }
    else{
        return res.status(400).json({
            errors:[{
                msg:'Category not found'
            }]
        })
    }
    
    
}
const getNotes = async (req, res=response)=>{
    const idCategory = req.query.category 
    if(idCategory){
        const notes = await Note.find({ category: idCategory, available:true})
        return res.json(notes)
    }
    else{
        return res.status(400).json({
            errors:[{
                msg:'Category not found'
            }]
        })
    }
    
}
const modifyNote = async (req, res=response)=>{
    const {idNote,title,content} = req.body
    const data = { 
        title, 
        content
    } 
    try{
        const note = await Note.findByIdAndUpdate(idNote, data)
        res.status(200).json(note)
        }
        catch(err){
            console.log(err)
            res.status(500).json({
                errors:[{
                    msg: 'Internal server error'
                }]
            })
        }
}
const deleteNote = async (req, res=response)=>{
    const idNote = req.body.note 
    try {
        const note = await Note.findByIdAndUpdate(idNote, {available: false})
        res.status(202).json(note)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            errors:[{
                msg: 'Internal server error'
            }]
        })
    }

    
}


module.exports = {
    createNote,
    getNotes,
    modifyNote,
    deleteNote
}