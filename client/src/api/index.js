import axios from 'axios';

// Affirmation routes
const getAffirmations = () => axios.get('/getAffirmations');
const getAffirmationArray = () => axios.get('/getAffirmationArray');

// Book routes
const getBooks = () => axios.get('/getBooks');

// User routes
const getUserData = id => axios.get(`/getUserData/${id}`);
const update = payload => axios.put('/update', payload);
const createNewUser = payload => axios.post('/createNewUser', payload);
const signInUser = payload => axios.post('/signInUser', payload);

// Forum routes
const getThreads = () => axios.get('/getThreads');
const getThread = payload => axios.post('/getThread', payload);
const makeThread = payload => axios.post('/makeThread', payload);
const createComment = payload => axios.post('/createComment', payload);
const deleteComment = payload => axios.post('/deleteComment', payload);
const deleteThread = payload => axios.post('/deleteThread', payload);

const api = {

  // Affirmation routes
  getAffirmations,
  getAffirmationArray,

  // Book routes
  getBooks,

  // User routes
  createNewUser,
  signInUser,
  update,
  getUserData,

  // Forum routes
  getThread,
  getThreads,
  makeThread,
  createComment,
  deleteComment,
  deleteThread,
};

export default api;