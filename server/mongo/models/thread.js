const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ThreadSchema = new Schema({
   title: {
      type: String,
   },
   author: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user'
   },
   comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'comment'
   }]
});
const Thread = mongoose.model('thread', ThreadSchema);
module.exports = Thread;