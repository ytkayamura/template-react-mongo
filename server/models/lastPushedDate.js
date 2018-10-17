const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const LastPushedDate = new Schema({
  lastDate: { type: Date },
});
module.exports = mongoose.model('lastPushedDate', LastPushedDate);
