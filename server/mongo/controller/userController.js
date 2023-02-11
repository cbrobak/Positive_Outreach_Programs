const User = require('../models/user');

module.exports = {
  createNewUser: async (req, res) => {
    const userInfo = req.body;
    const { password, confirm } = userInfo;
    const regEx = /([A-Z][0-9])/g
    try {
      const userExists = await User.findOne({ username: userInfo.username });
      const emailExists = await User.findOne({ email: userInfo.email });
      if (!userExists) {
      
            if (password === confirm) {
              if (!emailExists) {
                userInfo.success = true;
                const newUser = await User.create(userInfo);
                res.send(newUser);
              } else {
                res.send('email');
              }
            } else {
              res.send('pass');
            }
      } else {
        res.send('user')
      }

    } catch (error) {
      console.log(error);
    }
  },
  signInUser: async (req, res) => {
    const userData = req.body;
    try {
      const findUser = await User.findOne({ username: userData.username });
      if (findUser) {
        const validate = await findUser.isValidPassword(userData.password);
        if (!validate) {
          res.send('noPass')
        } else {
          res.send(findUser)
        }
      } else {
        res.send('noUser')
      }
    } catch (error) {
      console.log(error);
    }
  },
  update: async (req, res) => {
    const userData = req.body;
    let { id, username, email, password, confirm } = userData;
    if (password !== 'New password' && userData.confirm !== 'Confirm password') {
      if (password === confirm) {
        try {
          let thisUser = await User.findById(id)
          const validate = await thisUser.isValidPassword(password)
          if (!validate) {
            const updatePassword = User.findOneAndUpdate({ id: id },
              { $set: { username, email, password } }, { new: true },
              function (err, user) {
                if (err) {
                  return err;
                } else {
                  thisUser.password = password;
                  user.save();
                  res.send(user)
                }
              })
          } else {
            res.send(thisUser)
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    else if (password === 'New password' && userData.confirm === 'Confirm password') {
      try {
        let thisUser = await User.findByIdAndUpdate(id,
          { $set: { username, email } }, { new: true })
          .clone();
        res.send(thisUser);
      } catch (error) {
        console.log(error)
      }
    }

  },
  getUserData: async (req, res) => {
    const { id } = req.params;
    const thisUser = await User.findOne({ username: id });
    res.send(thisUser);
  }
};