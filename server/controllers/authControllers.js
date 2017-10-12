var userAuth = require ('../models/modelUsers')
var bcrypt = require ('bcrypt')
var jwt = require ('jsonwebtoken')

var Login = function (req,res) {
  userAuth.findOne({name: req.body.name}, (err, user) => {
    if (bcrypt.compareSync(req.body.password, user.password)) {
      var token = jwt.sign({
        id = user._id,
        name = user.name
      },'sssshhhh')
      res.send({
        token: token,
        name: user.name
      })
    } else {
    res.send('please insert your password')
    }
  } else {
    res.send('cant find user')
  })
}

module.exports = { Login };
