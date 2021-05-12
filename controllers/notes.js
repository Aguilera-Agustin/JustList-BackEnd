const { response } = require("express");
const Category = require("../models/category");
const Note = require("../models/note");

const createNote = async (req, res=response)=>{
    const {title, content} = req.body;
    const idCategory = req.query.category 
    if(idCategory){
        const myCategory = await Category.findById(idCategory)
        if(myCategory){
            const data = {
                title,
                content,
                category: myCategory._id
            }
            const myNote = new Note(data)
            await myNote.save()
            return res.json(myNote)
        }
        else{
            return res.status(400).json({
                errors:[{
                    msg:'Category not found'
                }]
            })
        }
    }
    else{
        return res.status(400).json({
            errors:[{
                msg:'Query params not found'
            }]
        })
    }
}
const getNotes = (req, res=response)=>{
    res.json({
        test:'ing'
    })
}
const modifyNote = (req, res=response)=>{
    res.json({
        test:'ing'
    })
}
const deleteNote = (req, res=response)=>{
    res.json({
        test:'ing'
    })
}


module.exports = {
    createNote,
    getNotes,
    modifyNote,
    deleteNote
}