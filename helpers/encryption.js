const encrypt = (param) =>{
    const bcrypt = require('bcryptjs');
    const mySalt = bcrypt.genSaltSync();
    const encryptedParam = bcrypt.hashSync(param,mySalt);
    return encryptedParam;
}

module.exports = encrypt