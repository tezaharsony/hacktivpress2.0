var mongoose = require ('mongoose')
var Schema = mongoose.Schema

const articleSchema = new Schema ({
  title : String,
  content : String,
  category : String ,
  author : {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
})

var Article = mongoose.model('articles', articleSchema)

module.exports = Article;
