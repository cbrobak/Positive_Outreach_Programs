import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header({ getUser, setFooterShow, loggedIn, logOut }) {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="container-fluid text-danger border border-bottom-0 bg-warning">
        Where the sky is the only limit...
      </div>
      <div
        className="container-fluid border border-top-0">
        <div
          className="row">
          <div
            className="col-4 offset-4 text-warning topText"
            onClick={() => navigate('/')}>P.O.P
            </div>
          <div
            className="col-4 offset-4 text-light">
            Positive Outreach Programs
          </div>
          <div
            className="col-4 log">
            {!loggedIn ?
              <div>
                <a href="/login" className="col-2 hiding">Log in</a>
                <a href="/create" className="col-2 hiding">New user</a>
              </div> :
              <div className="hiding text-primary text-underline">
                <p>
                  Welcome &nbsp;
                  <a id={loggedIn.username} href="#" onClick={(e) => {
                    getUser(e.target.id);
                    setFooterShow(false);
                    navigate('/user');
                  }}>
                    {loggedIn.username.capper()}
                  </a>
                </p>
                <br />
                <a href="#" onClick={logOut}>Sign out
                </a>
              </div>
            }
          </div>
          {loggedIn ?
            <nav
              className="row text-light">
              <Link
                to="/forum"
                className="col-6 links">
                Forum
              </Link>
              <Link
                to="/affirm"
                className="col-6 links">
                Magic Cue-Ball
              </Link>
            </nav> :
            null
          }
        </div>
      </div>
    </>
  )
};