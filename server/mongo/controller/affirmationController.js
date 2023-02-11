const Affirmation = require('../models/affirmation');

module.exports = {
  getAffirmations: async (req, res) => {
    try {
      let affInfo = await Affirmation.find()
      res.send(affInfo)
    } catch (error) {
      console.log(error)
    }

  },
  getAffirmationArray: async (req, res) => {
    try {
      let affInfo = await Affirmation.find()
      res.send(affInfo)
    } catch (error) {
      console.log(error)
    }

  }
};