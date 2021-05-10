const { Router } = require('express');
const { check } = require('express-validator');
const { login, loginWithToken } = require('../controllers/auth');
const { register } = require('../controllers/auth');
const { emailIsAlreadyExists } = require('../helpers/dbValidations');
const { validateJWT } = require('../helpers/validateJWT');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { existsUserWithId } = require('../helpers/dbValidations')
const router = Router();


router.post('/login',[
    check('email','Email is not valid').isEmail(),
    check('password','Password is not valid').not().isEmpty(),
    check('password','Password is too short').isLength(5),
    retrieveErrors
],login );

router.post('/register',[
    check('email','Email is not valid').not().isEmpty(),
    check('email','Email is not valid').isEmail(),
    check('name','Name is not valid').not().isEmpty(),
    check('password','Password is not valid').not().isEmpty(),
    check('password','Password is too short').isLength(5),
    check('email').custom( emailIsAlreadyExists ),
    retrieveErrors
],register );

router.get('/login/token',[
    validateJWT,
    retrieveErrors    
],loginWithToken)

module.exports = router;