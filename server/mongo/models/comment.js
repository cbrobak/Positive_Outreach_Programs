const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
   comment: {
      type: String,
      required: true
   },
   author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true
   }
});

const Comment = mongoose.model('comment', CommentSchema);
module.exports = Comment;