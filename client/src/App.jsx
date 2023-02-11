import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import CueBall from './components/CueBall';
import Affirm from './components/Affirm';
import Header from './components/Header';
import Forum from './components/Forum';
import CreateComment from './components/CreateComment';
import CreateThread from './components/CreateThread';
import Thread from './components/Thread';
import Login from './components/Login';
import User from './components/User';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import CreateUser from './components/CreateUser';
import api from './api';

export default function App() {
  const navigate = useNavigate();
  const [affirmationValue, setAffirmationValue] = useState('');
  const [threads, setThreads] = useState([]);
  const [threadData, setThreadData] = useState();
  const [headerShow, setHeaderShow] = useState(true);
  const [footerShow, setFooterShow] = useState(true);
  const [userProfile, setUserProfile] = useState()
  const [loggedIn, setLoggedIn] = useState((sessionStorage.getItem('myUser') === undefined ? {} : JSON.parse(sessionStorage.getItem('myUser'))));
  const [show, setShow] = useState(false);
  const [dataErr, setDataErr] = useState('');
  const handleClose = () => setShow(false);

  // This is my own method to capitalize first names or other things of import
  String.prototype.capper = function () {
    let str = this;
    return str[0].toUpperCase() + str.slice(1)
  };

  const logOut = () => {
    const signOut = confirm('Do you want to sign out?')
    if (signOut) {
      sessionStorage.clear()
      setLoggedIn('')
      navigate('/')

    }
  }

  // Function for the select menu on "affirm" component
  const onSelect = (e) => {
    let target = e.target.value;
    setAffirmationValue(target);
    navigate('/cueBall');
  };

  // Function for the on click of a thread title on "forum" component
  const onClick = async (e) => {
    e.preventDefault()
    let target = e.target.parentNode.id;
    navigate('/thread');
    try {
      const payload = {
        threadId: target,
        author: loggedIn.username
      }
      const getThread = await api.getThread(payload)
      const { data } = getThread;
      setThreadData(data)
    } catch (error) {
      console.log(error)
    }
  };

  const signIn = async (e, username, password) => {
    e.preventDefault()
    const payload = {
      username: username.value,
      password: password.value
    }
    try {
      const signInUser = await api.signInUser(payload)
      let { data } = signInUser;
      switch (data) {
        case 'noUser':
          setShow(true);
          setDataErr('noUser');
          break;
        case 'noPass':
          setShow(true);
          setDataErr('noPass');
          break;
        case 'pass':
          setShow(true);
          setDataErr('pass');
          break;
        default:
          setLoggedIn(data)
          data = JSON.stringify(data)
          sessionStorage.setItem('myUser', data)
          navigate('/')
      };
    } catch (error) {
      console.log(error)
    }
  }

  const newThread = async (e, title) => {
    e.preventDefault()
    const payload = {
      author: loggedIn._id,
      title: title.value,
    }

    try {
      const makeThread = await api.makeThread(payload)
      const { data } = makeThread;
      setThreadData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const makeComment = async (e, comment) => {
    e.preventDefault()
    const author = loggedIn._id
    const payload = {
      thread: threadData._id,
      comment: comment.value,
      author: author
    }
    try {
      const createComment = await api.createComment(payload)
      const { data } = createComment;
      setThreadData(data)
      navigate('/forum')
    } catch (error) {
      console.log(error)
    }
  }

  const deleteAComment = async (e) => {
    let targetId = e.target.parentNode.id;
    let targetComment = e.target.parentNode.children[1].innerHTML;
    const payload = {
      title: threadData.title,
      commentId: targetId,
      commentTitle: targetComment
    };
    const deleteComment = await api.deleteComment(payload)
    const { data } = deleteComment;
    setThreadData(data);
  };

  const deleteAThread = async (targetId) => {
    const payload = {
      id: targetId
    };
    let deleted = await api.deleteThread(payload);
    const { data } = deleted;
    setThreads(data);
  };

  // Function to create a new user on the "createuser" component
  const onSubmit = async (e, username, password, confirm, email) => {
    e.preventDefault();
    const payload = {
      username: username.value,
      password: password.value,
      confirm: confirm.value,
      email: email.value,
      success: false
    };

    try {
      const cap = /([A-Z])/g
      const num = /([0-9])/g
      if (password.value.match(cap) && password.value.match(num)) {
        if (password.value.length >= 8) {
          const createNewUser = await api.createNewUser(payload);
          let { data } = createNewUser;
          switch (data) {
            case 'user':
              setShow(true);
              setDataErr('user');
              break;
            case 'pass':
              setShow(true);
              setDataErr('pass');
              break;
            case 'email':
              setShow(true);
              setDataErr('email');
              break;
            default:
              setShow(true);
              setLoggedIn(data);

              data = JSON.stringify(data)
              sessionStorage.setItem('myUser', data)
          }
        } else {
          alert("Passwords must be at least 6 characters long.")
        }
      } else {
        alert("Passwords must contain at least 1 uppercase letter and 1 number.")
      }
    } catch (error) {
      console.log(error);
    };
  };

  const editProfile = async (e, username, email, password, confirm) => {
    e.preventDefault();
    const thisUsername = loggedIn.username;
    const payload = {
      id: loggedIn._id,
      user: thisUsername,
      username: username.value,
      email: email.value,
      password: password.value,
      confirm: confirm.value
    }
    try {
      const cap = /([A-Z])/g
      const num = /([0-9])/g
      if (password.value.match(cap) && password.value.match(num)) {
        if (password.value.length >= 8) {
          const update = await api.update(payload);
          let { data } = update;
          setLoggedIn(data);
          data = JSON.stringify(data)
          sessionStorage.setItem('myUser', data);
        } else {
          alert("Passwords must be at least 6 characters long.")
        }
      } else {
        alert("Passwords must contain at least 1 uppercase letter and 1 number.")
      }
    } catch (error) {
      console.log(error);
    };
  };

  const getUser = async (target) => {
    const getUserData = await api.getUserData(target)
    const { data } = getUserData;
    setUserProfile(data)
  }

  return (
    <div>
      {headerShow ?
        <Header
          getUser={getUser}
          setHeaderShow={setHeaderShow}
          setFooterShow={setFooterShow}
          loggedIn={loggedIn}
          logOut={logOut}
        /> :
        null
      }
      <Routes>
        <Route
          exact path="/"
          element={
            <Home
              loggedIn={loggedIn}
            />} />
        <Route
          path="/affirm"
          element={
            <Affirm
              setHeaderShow={setHeaderShow}
              setFooterShow={setFooterShow}
              onSelect={onSelect}
            />} />
        <Route
          path="/user"
          element={
            <User
              show={show}
              handleClose={handleClose}
              dataErr={dataErr}
              setFooterShow={setFooterShow}
              userProfile={userProfile}
              loggedIn={loggedIn}
              editProfile={editProfile}
            />} />
        <Route
          path="/cueBall"
          element={
            <CueBall
              setHeaderShow={setHeaderShow}
              setFooterShow={setFooterShow}
              affirmationValue={affirmationValue}
            />} />
        <Route
          path="/forum"
          element={
            <Forum
              threads={threads}
              setThreads={setThreads}
              loggedIn={loggedIn}
              getUser={getUser}
              setFooterShow={setFooterShow}
              onClick={onClick}
              deleteAThread={deleteAThread}
            />} />
        <Route
          path="/thread"
          element={
            <Thread
              loggedIn={loggedIn}
              threadData={threadData}
              deleteAComment={deleteAComment}
              getUser={getUser}
            />} />
        <Route
          path="/createComment"
          element={
            <CreateComment
              makeComment={makeComment}
              threadData={threadData}
            />} />
        <Route
          path="/createThread"
          element={
            <CreateThread
              newThread={newThread}
            />} />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              signIn={signIn}
              show={show}
              dataErr={dataErr}
              handleClose={handleClose}
            />} />
        <Route
          path="/create"
          element={
            <CreateUser
              loggedIn={loggedIn}
              onSubmit={onSubmit}
              show={show}
              handleClose={handleClose}
              dataErr={dataErr}
            />} />
        <Route
          path="*"
          element={
            <NotFound />} />
      </Routes>
      {footerShow ? <Footer setFooterShow={setFooterShow} /> : null}
    </div>
  )
};