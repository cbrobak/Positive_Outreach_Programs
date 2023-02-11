import React from "react";
import { useNavigate } from "react-router-dom";

export default function Thread({ loggedIn, threadData, deleteAComment, getUser }) {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="text-warning">Only helpful and encouraging comments will be tolerated.</h3>
      <div
        className="text-danger">
        <h1>
          {threadData ? threadData.title : null}
        </h1>
        <h1
          className="col-4"
          id="commentText">
          Comments:
        </h1>

        {threadData ?
          threadData.comments.map((el, idx) => {
            return <div
              className="row border my-2 mx-1"
              id={threadData.comments[idx]._id}
              key={idx}>
              <h3 className="col-1">
                {idx + 1}:
            </h3>
              <h3 className="col-6">
                {el.comment}
              </h3>
              <h3 className="col-3">
                by &nbsp;
                <a href="#"
                  id={el.author.username}
                  onClick={
                    (e) => {
                      getUser(e.target.id)
                      navigate('/user')
                    }}>{el.author.username}
                </a>
              </h3>
              {loggedIn.username === threadData.comments[idx].author.username ?
                <h3 className="col-1 offset-1 far fa-window-close mt-2"
                  onClick={
                    (e) => {
                      deleteAComment(e)
                    }
                  }>
                </h3> :
                null}
            </div>
          })
          : null
        }

        <button
          type="button"
          onClick={
            () => navigate('/createComment')}>
          &nbsp;Add Comment&nbsp;
        </button>
      </div>
    </>
  )
};