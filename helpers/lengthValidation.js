const validateCategoryLength=(data='') =>{
    if(data.length < 1 || data.length>35){
        console.log(data.length)
        throw new Error('Are you a QA tester? Nope! haha')
    }
}

module.exports = {
    validateCategoryLength
}