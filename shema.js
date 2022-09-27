const mongoose = require('mongoose');

const User = mongoose.model('Cadastro', {
    name: {type : String, required: true},
    idade: Number,
})
module.exports = User;