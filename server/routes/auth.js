const express = require('express');
const router = express.Router();
const AuthCont = require('../controllers/authControllers')

router.post('/', AuthCont.Login)


module.exports = router
