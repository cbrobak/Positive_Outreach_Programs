import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import UserModal from './UserModal';

export default function User({ show, handleClose, dataErr, setFooterShow, userProfile, loggedIn, editProfile }) {

  <UserModal
    loggedIn={loggedIn}
    show={show}
    dataErr={dataErr}
    handleClose={handleClose}
  />
  let username, email, password, confirm;
  const navigate = useNavigate()
  { userProfile ? loggedIn.username === userProfile.username ? setFooterShow(false) : null : null }


  return (
    <>
      {userProfile ?
        loggedIn.username === userProfile.username ?
          <div
            className="container text-danger mt-5">
            <h1>Welcome to your profile {loggedIn.username.capper()}!</h1>
            <h3>Edit profile:</h3>

            <Form
              className="col-8 offset-2"
              onSubmit={
                (e) => {
                  e.preventDefault()
                  editProfile(e, username, email, password, confirm);
                  navigate('/')
                }
              }>

              <Form.Group
                controlId="username">
                <Form.Label>
                  Username
                  </Form.Label>
                <Form.Control
                  className="text-center"
                  type="text"
                  defaultValue={loggedIn.username}
                  ref={input => username = input} />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control className="text-center" type="email"
                  ref={input => email = input}
                  defaultValue={loggedIn.email}
                />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group
                controlId="password"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className="text-center"
                  type="password"
                  ref={input => password = input}
                  defaultValue={'New password'}
                />
              </Form.Group>
              <Form.Group controlId="confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  className="text-center"
                  type="password"
                  ref={input => confirm = input}
                  defaultValue={'Confirm password'}
                />
              </Form.Group>
              <Button
                className="m-1"
                variant="primary"
                type="submit">
                Submit
              </Button>
            </Form>
          </div> :
          userProfile ?
            <div className="mt-5 text-light">
              <h1>Welcome to {userProfile.username.capper()}s' page</h1><br />
              <h2>E-mail address: {userProfile.email}</h2>
            </div> :
            null
        : null}
    </>
  )
}