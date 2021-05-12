const { Router } = require('express');
const { check } = require('express-validator');
const { createNote, getNotes, modifyNote } = require('../controllers/notes');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { validateJWT } = require('../helpers/validateJWT');
const router = Router();


router.get('/',[
    retrieveErrors
], getNotes );

router.post('/',[
    validateJWT,
    check('title','Title is required').not().isEmpty(),
    check('content','Content is required').not().isEmpty(),
    retrieveErrors
], createNote );

router.put('/',[
    validateJWT,
    retrieveErrors
], modifyNote );

module.exports = router;