import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

export default function CreateThread({ newThread }) {
  const navigate = useNavigate()
  let title;

  return (
    <>
      <Form
        className="text-light mt-5"
        onSubmit={(e) => {
          newThread(e, title);
          navigate('/forum');
        }
        }>
        <Form.Group
          controlId="title">
          <Form.Label>Thread Title</Form.Label>
          <Form.Control
            className="col-6 offset-3 text-center"
            type="text"
            placeholder="Title"
            ref={input => title = input}

             />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">Submit</Button>
      </Form>
    </>
  )
};