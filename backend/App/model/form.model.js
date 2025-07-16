let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let formSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

let formModel = mongoose.model('collection',formSchema)

module.exports = formModel