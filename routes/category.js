const { Router } = require('express');
const { check } = require('express-validator');
const { createCategory, getCategory, modifyCategory, deleteCategory } = require('../controllers/Category');
const { retrieveErrors } = require('../middlewares/retrieveErrors');
const { validateJWT } = require('../helpers/validateJWT');
const { existCategoryWithId } = require('../helpers/dbValidations');
const router = Router();


router.get('/',[
    validateJWT,
    retrieveErrors
], getCategory );

router.post('/',[
    validateJWT,
    retrieveErrors
], createCategory );

router.put('/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(existCategoryWithId),
    retrieveErrors
], modifyCategory );

router.delete('/:id',[
    validateJWT,
    check('id', 'Invalid ID').isMongoId(),
    check('id').custom(existCategoryWithId),
    retrieveErrors
], deleteCategory );

module.exports = router;