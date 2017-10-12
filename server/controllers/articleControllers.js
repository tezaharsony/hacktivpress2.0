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

module.exports = {
  createArticle
};




// var create = function(req, res) {
//   let newThread = new Thread({
//     title: req.body.title,
//     thread: req.body.thread,
//     createdAt: new Date(),
//     user_id: req.headers.authentic.id
//   })
//   newThread.save((err, createdThread) => {
//     if(err) {
//       res.send(err)
//     } else {
//       res.send(createdThread)
//     }
//   })
// }
