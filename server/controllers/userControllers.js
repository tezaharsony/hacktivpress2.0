var User = require ('../models/modelUsers')
var bcrypt = require ('bcryptjs')

var newUser = function (req,res) {
var salt = bcrypt.genSaltSync(10);
var password = bcrypt.hashSync(req.body.password, salt);
  let createUser = new User({
    name: req.body.name,
    password: password,
    createdAt: new Date()
  })

  createUser.save((err, result) => {
    if (err) {
      res.send(err)
    } else {
      res.send(result)
    }
  })
}

var getAllUsers = function (req,res) {
  User.find({}, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.send(user)
    }
  })
}

var removeSpecifiedUser = function (req,res) {
  User.findOneAndRemove({_id:req.params.id}, (err,user) => {
    if (err) {
      res.send(err)
    } else {
      res.send(user)
    }
  })
}

module.exports = {
  newUser,
  getAllUsers,
  removeSpecifiedUser
};
// var User = require ('../Models/userModel')
// var bcrypt = require ('bcryptjs')
//
// var create = function(req, res) {
//   var salt = bcrypt.genSaltSync(10);
//   var password = bcrypt.hashSync(req.body.password, salt);
//
//   let newUser = new User({
//     name: req.body.name,
//     password: password,
//     createdAt: new Date()
//   })
//   newUser.save((err, createdUser) => {
//     if(err) {
//       res.send(err)
//     } else {
//       res.send(createdUser)
//     }
//   })
// }
//
// var getAllUsers = function (req, res) {
//   User.find(function (err, users){
//     if (!err) {
//       res.send (users)
//     } else {
//       res.send (err)
//     }
//   })
// }
//
// var removeSpecifiedUser = function(req, res) {
//   User.findOneAndRemove({_id: req.params.id}, (err, user) => {
//     if(err) res.send(err)
//     res.send("data deleted")
//   })
// }
//
//
// module.exports = { create,getAllUsers,removeSpecifiedUser };
