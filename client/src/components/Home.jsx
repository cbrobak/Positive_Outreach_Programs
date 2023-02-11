import React, { useState, useEffect } from "react";
import api from "../api";

export default function Home() {

  const [affirmation, setAffirmation] = useState();
  const [bookTitle, setBookTitle] = useState();
  const [bookAuthor, setBookAuthor] = useState();

  useEffect(async () => {
    const getAffirmations = await api.getAffirmations()
    const { data } = getAffirmations
    // console.log(data)
    let idx = Math.floor(Math.random() * data.length)
    setAffirmation(data[idx].affirmation[idx])
  }, [])

  useEffect(async () => {
    const getBooks = await api.getBooks()
    const { data } = getBooks
    let idx = Math.floor(Math.random() * data.length)
    setBookTitle(data[idx].title)
    setBookAuthor(data[idx].author)
  }, [])

  return (
    <>
      <div className="container">
        <div
          className="row">
          <div
            className="col-6">
            <h3
              className="mt-5 text-light">
              Selected Positive Affirmation:
            </h3>
            <h5
              className="mt-3 opaque text-info">
              {affirmation}
            </h5>
          </div>
          <div
            className="col-6">
            <h3
              className="mt-5 text-light">
              Recommended book:
            </h3>
            <h5
              className="mt-3 opaque text-info">
              {bookTitle}
            </h5>
            <h5
              className="mt-3 opaque text-info">
              by:&nbsp;
            {bookAuthor}
            </h5>
          </div>
        </div>

        <div
          id="about"
          className="row text-light mt-3">
          <h1
            className="mx-3">
            Our mission:
          </h1>
          <p
            className="mx-3 opaque text-info">
            We strive to effect positive world change through personal responsibility, Individual growth, and co-operative empowerment. We believe that no man is an island, and to that extent we rely on each other for the positive encouragement to give the needed boost to achieve our greatest potential. However, the responsibility for taking action, learning and implementing the necessary tools, and growing in to our fullest potential must, and can <em>ONLY</em> reside with each of us, individually.
          </p>
        </div>
      </div>
    </>
  )
};