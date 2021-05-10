const { Router } = require('express');
const { check } = require('express-validator');
const { createNote, getNote, modifyNote } = require('../controllers/notes');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { validateJWT } = require('../helpers/validateJWT');
const router = Router();


router.get('/',[
    validateJWT,
    retrieveErrors
], getNote );

router.post('/',[
    validateJWT,
    retrieveErrors
], createNote );

router.put('/',[
    validateJWT,
    retrieveErrors
], modifyNote );

module.exports = router;