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
router.get('/', auth, articleCont.getAllArticles)
router.get('/:id/getone', auth, articleCont.getOneArticle)
router.get('/:author/getbyauthor', auth, articleCont.getOneArticleByAuthor)
router.get('/:category/getbycategory', auth, articleCont.getOneArticleByCategory)
router.delete('/:id', auth, articleCont.removeSpecifiedArticle)

module.exports = router
