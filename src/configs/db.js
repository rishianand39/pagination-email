const moongose = require('mongoose');

const connect = moongose.connect(
    'mongodb+srv://rishianand:1234@cluster0.nweui.mongodb.net/pagination-email?retryWrites=true&w=majority'
);

module.exports = connect;