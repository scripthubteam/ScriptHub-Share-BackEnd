const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String,
  userid: String,
  password: {
    required: false,
    type: String
  },
  email: {
    required: false,
    type: String
  },
  authentication: String
})

module.exports = mongoose.model('users', userSchema)
