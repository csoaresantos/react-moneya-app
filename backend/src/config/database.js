const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{PATH}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{PATH}' informado é menor que o limite minimo de '{MAX}'."
mongoose.Error.messages.String.enum = "O '{VALUES}' náo é válido para o atributo '{PATH}'."