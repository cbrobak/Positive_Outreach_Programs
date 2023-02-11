import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../api';
import { Button } from 'react-bootstrap';

export default function Forum({ threads, setThreads, loggedIn, getUser, onClick, deleteAThread }) {
  const navigate = useNavigate();

  const loadThreads = async () => {
    const getThreads = await api.getThreads();
    const { data } = getThreads;
    setThreads(data);
  };

  useEffect(async () => {
    return loadThreads();
  }, []);

  return (
    <>
      <div>
        <h1
          className="text-light">
          Posts:
        </h1>
        <h3 className="text-warning">Please keep posts positive and uplifting.</h3>
        {threads ? threads.length > 0 ? threads.map((el, idx) => {
          return <div
            className="container"
            key={idx}
            value={el.title}
          >
            <div
              id={el._id}
              className="row border mb-1 d-flex align-items-center">
              <a
                href="#"
                onClick={onClick}
                className="text-primary col-3 offset-1">
                {el.title}
              </a>
              <div
                className="text-light col-3 offset-1">
                by:&nbsp;
                <a
                  href="#"
                  id={el.author.username}
                  onClick={(e) => {
                    getUser(e.target.id)
                    navigate('/user')
                  }}>
                  {el.author.username}
                </a>
                <div>
                  {el.comments.length}&nbsp;
                  comments.
                 </div>
              </div>
              {loggedIn.username === el.author.username ?
                <h3
                  className="col-1 offset-2 far fa-window-close mt-2 text-danger" onClick={(e) => {
                    deleteAThread(el._id)
                  }}>
                </h3> :
                null}
            </div>
          </div>
        }) :
          <h1 className="text-danger mt-5">No Posts yet.</h1> : null}

      </div>

      <Button
        onClick={
          () => navigate('/createThread')}>Create a post
        </Button>
    </>
  )
};