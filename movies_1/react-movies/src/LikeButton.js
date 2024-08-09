import { React, useState } from 'react';

export default function LikeButton(props) {

  // <LikeButton onLikeButtonClicked={props.onLikeClicked} counter={props.likes}/>
  function handleClick(event) {  // Closure
    console.log(event)
    props.onLikeButtonClicked()
  }

  return (
    <button onClick={handleClick} className="text-decoration-none btn text-danger ">&hearts; <span>{props.counter}</span></button>
  )
}

