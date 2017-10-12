var express = require('express');
var router = express.Router();
var userCont = require ('../controllers/userControllers')

router.post('/', userCont.newUser)
router.get('/', userCont.getAllUsers)
router.delete('/:id/deluser', userCont.removeSpecifiedUser)

module.exports = router;
