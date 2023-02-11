import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";
let newArr;

function randomizer(itemArray) {
  return itemArray.sort(() => Math.random() - 0.5);
};

export default function CueBall({ setHeaderShow, setFooterShow, affirmationValue }) {
  const [text, setText] = useState([])
  const navigate = useNavigate()
  let randomArray;

  useEffect(async () => {
    const getText = await api.getAffirmationArray()
    let data = getText.data;
    data.map(el => {
      if (affirmationValue === el.category) {
        randomArray = randomizer(el.affirmation)
        newArr = randomArray[Symbol.iterator]()
        setText(randomArray[0])
      }
    })
  }, [text])

  useEffect(() => {
    $("#cueBall").hover(
      () => {
        {
          text === undefined ?
            setText(randomArray[0])
            :
            setText(newArr.next().affirmationValue)
        }
        $('#cueBall').addClass('shake');
        $("#cueBallText")
          .addClass('invisible')
          .removeClass('bg-dark')
        $("#cueBallText")
          .removeClass('fadeIn')
      },
      () => {
        $("#cueBallText")
          .addClass('fadeIn');
        $('#cueBall')
          .removeClass('shake');
        $('#cueBallText')
          .addClass('bg-dark')
          .removeClass('invisible');
      }
    )
  }, []);

  let changeBall = () => {
    let unit;
    let height = window.innerHeight;
    let width = window.innerWidth;
    if (height < width) {
      unit = height;
    }
    else {
      unit = width;
    };

    $("#cueBall").css({
      width: `${unit / 1.5}px`,
      height: `${unit / 1.5}px`,
      padding: `${unit / 50}px`,
      position: `relative`,
      left: `${width / 2 - (unit / (2 * 1.5))}px`,
      top: `${height / 2 - (unit / (2 * 1.25))}px`,
      backgroundColor: 'antiqueWhite',
      borderRadius: '50%'
    });

    $("#cueBallText").css({
      width: `${unit / 1.75}px`,
      fontSize: `${unit / 45}px`,
      padding: `${unit / 75}px`,
      textAlign: 'center',
      position: `relative`,
      top: `12em`,
      left: `.75em`
    })
  };
  changeBall();

  window.addEventListener('resize', changeBall);

  return (
    <>
      <div id="cueBall"
        className="m-1">
        <div
          id="cueBallText"
          className="d-flex align-items-center justify-content-center text-primary">
          {text}
        </div>
      </div>
      <div
        className="buttonPosition row">  
        <button
          type="button"
          className="bg-primary text-light col-4 offset-4"
          onClick={() => {
            setHeaderShow(true);
            setFooterShow(true);
            navigate('/');
          }
          }>
          Home
          </button>
      </div>
    </>
  )
};