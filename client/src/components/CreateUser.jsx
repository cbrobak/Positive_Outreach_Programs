import React from 'react';
import UserModal from './UserModal';
import { Button, Form } from 'react-bootstrap';

export default function CreateUser({ loggedIn, onSubmit, show, handleClose, dataErr }) {
  let username, password, confirm, email;

  return (
    <>
      <UserModal
        loggedIn={loggedIn}
        show={show}
        dataErr={dataErr}
        handleClose={handleClose}
      />
      <br />
      <div
        className="container">
        <div
          className="row">
          <Form
            className="m-1"
            onSubmit={(e) => onSubmit(e, username, password, confirm, email)}>
            <Form.Group
              controlId="username"
              className="col-8 offset-2">
              <Form.Label
                className="text-light mt-2">
                User Name:&nbsp;
              </Form.Label>
              <Form.Control
                className="mb-1 text-center"
                type="text"
                name="username"
                placeholder="User name"
                ref={input => username = input}
                autoFocus
                required />
            </Form.Group>

            <Form.Group
              controlId="password"
              className="col-8 offset-2">
              <Form.Label
                className="text-light mt-2">
                Password:&nbsp;
              </Form.Label>
          <p className="text-danger small">Password must be 8 characters and include 1 capital letter and 1 number</p>

              <Form.Control
                className="mb-1 text-center"
                type="password"
                name="password"
                placeholder="Password"
                ref={input => password = input}
                required />
            </Form.Group>

            <Form.Group
              controlId="confirm"
              className="col-8 offset-2">
              <Form.Label
                className="text-light mt-2">
                Confirm password:&nbsp;
              </Form.Label>
              <Form.Control
                className="mb-1 text-center"
                type="password"
                name="confirm"
                placeholder="Confirm password"
                ref={input => confirm = input} required />
            </Form.Group>

            <Form.Group
              controlId="email"
              className="col-8 offset-2">
              <Form.Label
                className="text-light mt-2">
                E-mail address:&nbsp;
              </Form.Label>
              <Form.Control
                className="mb-1 text-center"
                type="text"
                name="email"
                placeholder="E-mail address"
                ref={input => email = input}
                required />
            </Form.Group>

            <Button
              className="col-2 m-1"
              variant="primary"
              type="submit">
              Submit</Button>

          </Form>
        </div>
      </div>
    </>
  )
};