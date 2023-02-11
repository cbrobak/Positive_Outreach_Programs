import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// This function returns a modal depending on the data sent from db call
export default function UserModal({ loggedIn, show, dataErr, handleClose }) {
  const navigate = useNavigate()
  let text, title;

  if (dataErr) {
    switch (dataErr) {
      case 'noUser':
        title = `User name error:`
        text = `That user name does not exist.`
        break;
      case 'user':
        title = `User name error:`
        text = `That user name is already in use.`
        break;
      case 'noPass':
        title = `Password error:`
        text = `That password does not match the account name.`
        break;
      case 'pass':
        title = `Password error:`
        text = `Your passwords do not match.`
        break;
      case 'email':
        title = `Email error:`
        text = `That email address is already in use.`
        break;
      case 'tooShort':
        title = `Password error:`
        text = `Passwords must be at least 6 characters long.`
        break;
      case 'invalid':
        title = `Password error:`
        text = `Passwords must include at least 1 uppercase letter and 1 number.`
        break;
    }
  } else if (loggedIn) {
    title = `Success`
    text = `Thanks for signing up ${loggedIn.username}`
  }
  
  return (
    <Modal
      show={show}
      onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="mb-5 border border-top-0">
        {text}
      </Modal.Body>
      {loggedIn ?
        <Button
          className="col-4 offset-4 mb-3"
          onClick={
            () => navigate('/')}>
          Home
        </Button> :
        null}
    </Modal>
  )
};