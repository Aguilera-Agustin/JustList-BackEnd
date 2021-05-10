const { Router } = require('express');
const { check } = require('express-validator');
const { createNote } = require('../controllers/notes');
const { validateJWT } = require('../helpers/validateJWT');
const router = Router();


router.get('/',[
    
], createNote );

module.exports = router;