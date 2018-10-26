const restful = require('node-resful')
const mongoose = restful.mongoose

const userSchema = new mongoose.Schema()

module.exports = restful.model('User', userSchema)