const { response } = require("express");

const createNote = (req, res=response)=>{
    res.json({
        test:'ing'
    })
}
const getNote = (req, res=response)=>{
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
    getNote,
    modifyNote,
    deleteNote
}