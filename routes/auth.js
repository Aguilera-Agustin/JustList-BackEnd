const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { register } = require('../controllers/auth');
const { emailIsAlreadyExists } = require('../helpers/dbValidations');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
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
    check('password','Password is not valid').not().isEmpty(),
    check('password','Password is too short').isLength(5),
    check('email').custom( emailIsAlreadyExists ),
    retrieveErrors
],register );

module.exports = router;