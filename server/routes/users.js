var express = require('express');
var router = express.Router();
var userCont = require ('../controllers/userControllers')
var jwt = require('jsonwebtoken')

var auth = (req, res, next) => {
  if(req.headers.hasOwnProperty('token')) {
    var decoded = jwt.verify(req.headers.token, 'sssshhhh'); {
      req.headers.authentic = decoded
      next ()
    }
  } else {
    res.send ('you should login')
  }
}

router.post('/', auth, userCont.newUser)
router.get('/', auth, userCont.getAllUsers)
router.delete('/:id/deluser', auth, userCont.removeSpecifiedUser)

module.exports = router;
