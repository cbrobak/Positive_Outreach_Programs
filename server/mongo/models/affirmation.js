const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AffirmationSchema = new Schema({
  category: {type: String, required: true, unique: true},
  affirmation: {type: Array, required: true}
});

const Affirmation = mongoose.model('affirmation', AffirmationSchema);
module.exports = Affirmation;