const affirmation = require('../mongo/controller/affirmationController');
const user = require('../mongo/controller/userController');
const book = require('../mongo/controller/bookController');
const thread = require('../mongo/controller/threadController');

module.exports = (app) => {
//Affirmation Routes
  app.get('/getAffirmations', affirmation.getAffirmations);
  app.get('/getAffirmationArray', affirmation.getAffirmationArray);

  // Book routes
  app.get('/getBooks', book.getBooks);

  //  Forum routes
  app.post('/getThread', thread.getThread);
  app.post('/makeThread', thread.makeThread);
  app.post('/createComment', thread.createComment);
  app.get('/getThreads', thread.getThreads);
  app.post('/deleteComment', thread.deleteComment);
  app.post('/deleteThread', thread.deleteThread);

  // User Routes
  app.post('/createNewUser', user.createNewUser);
  app.post('/signInUser', user.signInUser);
  app.put('/update', user.update);
  app.get('/getUserData/:id', user.getUserData);
  
}