const { Router } = require('express');
const { check } = require('express-validator');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { validateJWT } = require('../helpers/validateJWT');
const { existCategoryWithId } = require('../helpers/dbValidations');
const { getCategory, deleteCategory, createCategory } = require('../controllers/category');
const router = Router();


router.get('/',[
    validateJWT,
    retrieveErrors
], getCategory );

router.post('/',[
    validateJWT,
    retrieveErrors
], createCategory );

router.delete('/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(existCategoryWithId),
    retrieveErrors
], deleteCategory );

module.exports = router;