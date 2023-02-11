const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
   username: {
      type: String,
      unique: true,
      required: true
   },
   password: {
      type: String,
      required: true
   },
   email: {
      type: String, unique: true
   },
   threads: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'thread'
   }]
});

UserSchema.pre("save", async function (next) {
   const hash = await bcrypt.hashSync(this.password, 10)
   this.password = hash;
   next();
});

UserSchema.methods.isValidPassword = async function (password) {
   const user = this;
   const compare = await bcrypt.compare(password, user.password);
   return compare;
};

const User = mongoose.model('user', UserSchema);
module.exports = User;