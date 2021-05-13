const { Router } = require('express');
const { check } = require('express-validator');
const { createNote, getNotes, modifyNote, deleteNote } = require('../controllers/notes');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { validateJWT } = require('../helpers/validateJWT');
const router = Router();


router.get('/',[
    retrieveErrors
], getNotes );

router.post('/',[
    validateJWT,
    check('title','Title is required').not().isEmpty(),
    check('title','Title is too long').isLength({min:1, max:20}),
    check('content','Content is required').not().isEmpty(),
    check('content','Are you a QA tester? Nice! haha').isLength({min:1,max:350}),
    retrieveErrors
], createNote );

router.put('/',[
    validateJWT,
    retrieveErrors
], modifyNote );

router.delete('/',[
    validateJWT,
    retrieveErrors
], deleteNote );

module.exports = router;