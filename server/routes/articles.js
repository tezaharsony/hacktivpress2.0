const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')
const articleCont = require('../controllers/articleControllers');


const auth = (req, res, next) =>
{
  if(req.headers.hasOwnProperty('token')){
    var decoded = jwt.verify(req.headers.token, 'sssshhhh');
    {
      req.headers.authentic = decoded
      next()
    }
  }
  else {
    res.send('you should login')
  }
}

router.post('/', auth, articleCont.createArticle)

module.exports = router
