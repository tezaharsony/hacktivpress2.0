var mongoose = require ('mongoose')
var Schema = mongoose.Schema

const userSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'fill your name please']
  },
  password: {
    type: String,
    required: [true, 'fill your password please']
  }
}, {
  timestamps: true
})

var User = mongoose.model('users', userSchema)

module.exports = User;
