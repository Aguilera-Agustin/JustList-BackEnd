const { response, request } = require("express");
const Category = require("../models/category");

const createCategory = async(req, res=response)=>{
    const {name} = req.body;
    const categoryDB = await Category.findOne({name})
    if(categoryDB){
        res.status(400).json({
            errors:[
                {msg:'Category is already exists',}
            ]
        })
    }

    const data = { 
        name, 
        user : req.user._id
    }

    const myCategory = new Category(data);
    await myCategory.save();

    res.status(201).json(
        myCategory
    )
    
}
const getCategory = async (req, res=response)=>{
    const { limit = 5, init = 0 } = req.query;
    const query = { available: true,  user: req.user._id};

    const [ counter, categorys ] = await Promise.all([
        Category.countDocuments(query),
        Category.find(query)
            .skip( Number( init ) )
            .limit(Number( limit ))
    ]);

    res.json({
        counter,
        categorys
    });
}
const modifyCategory = async (req=request, res=response)=>{
    const data = req.body
    const id = req.params.id
    const myCategory = await Category.findByIdAndUpdate(id,data)
    res.json({
        msg: 'Your category was updated successfully'
    })
}
const deleteCategory = async(req, res=response)=>{
    const id = req.params.id
    await Category.findByIdAndUpdate(id,{available:false})
    res.json({
        msg: 'Your category was deleted successfully'
    })
}


module.exports = {
    createCategory,
    getCategory,
    modifyCategory,
    deleteCategory
}