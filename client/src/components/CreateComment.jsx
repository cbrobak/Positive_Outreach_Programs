import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function CreateComment({ makeComment }) {
  let comment;
  return (
    <>
      <Form
        className="text-light mt-5"
        onSubmit={(e) => {
          makeComment(e, comment);
        }}
      >
        <Form.Group
          controlId="comment">
          <Form.Label>
            Comment</Form.Label>
          <Form.Control
            className="col-6 offset-3 text-center"
            type="text"
            placeholder="Comment"
            ref={input => comment = input}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit">
          Submit</Button>
      </Form>
    </>
  )
};