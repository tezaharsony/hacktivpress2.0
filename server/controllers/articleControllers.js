var Article = require ('../models/modelArticles')

var createArticle = function(req,res){
  let newArticle = new Article({
    title : req.body.title,
    content : req.body.content,
    category : req.body.category,
    createdAt : new Date(),
    author : req.headers.authentic.id
  })
  newArticle.save((err, article) =>{
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
}

var getAllArticles = function (req,res) {
  Article.find({}, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
  .populate({path:'author', model:'users'})
}

var getOneArticle = function (req,res) {
  Article.findOne({_id:req.params.id}, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
}

var getOneArticleByAuthor = function (req,res) {
  Article.findOne({author:req.params.author}, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
  .populate({path:'author', model:'users'})
}

var getOneArticleByCategory = function (req,res) {
  Article.findOne({category:req.params.category}, (err, article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
}


var removeSpecifiedArticle = function (req,res) {
  Article.findOneAndRemove({_id:req.params.id}, (err,article) => {
    if (err) {
      res.send(err)
    } else {
      res.send(article)
    }
  })
}

module.exports = {
  createArticle,getAllArticles,getOneArticle,getOneArticleByAuthor,getOneArticleByCategory,removeSpecifiedArticle
};
