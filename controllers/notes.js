const { response } = require("express");

const createNote = (req, res=response)=>{
    res.json({
        test:'ing'
    })
}


module.exports = {
    createNote
}