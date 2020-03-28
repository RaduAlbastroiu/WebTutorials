const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: Boolean
});

mongoose.model('recipient', recipientSchema);
