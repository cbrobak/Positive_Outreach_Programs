import React from 'react';
import UserModal from './UserModal';
import { Button, Form } from 'react-bootstrap'

export default function Login({ loggedIn, handleClose, signIn, show, dataErr }) {
  let username, password;
  return (
    <>
      <UserModal
        loggedIn={loggedIn}
        show={show}
        dataErr={dataErr}
        handleClose={handleClose}
      />

      <Form
        className="m-1"
        onSubmit={
          (e) => signIn(e, username, password)}>
        <Form.Group
          controlId="username">
          <Form.Label
            className="text-light">
            Name:
          </Form.Label>
          <Form.Control
            className="col-4 offset-4 mb-1 text-center"
            type="text"
            name="username"
            placeholder="User name"
            ref={input => username = input}
            autoFocus
            required />
        </Form.Group>

        <Form.Group
          controlId="password">
          <Form.Label
            className="text-light">
            Password:
          </Form.Label>
          <Form.Control
            className="col-4 offset-4 mb-1 text-center"
            type="password"
            name="password"
            placeholder="Password"
            ref={input => password = input}
            required />
        </Form.Group>

        <Button
          className="col-2"
          variant="primary"
          type="submit">
          Sign in
        </Button>

      </Form>
    </>
  )
};