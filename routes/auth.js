const { Router } = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth');
const { register } = require('../controllers/auth');
const router = Router();


router.post('/login',[

],login );

router.post('/register',[

],register );

module.exports = router;