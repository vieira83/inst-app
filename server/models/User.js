var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

var UserSchema = new Schema({
  username:  String,
  password: {
    type: String
  }
});

UserSchema.methods.createUser = (newUser, callback) => {
  var self=this;
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports = mongoose.model('User', UserSchema);
