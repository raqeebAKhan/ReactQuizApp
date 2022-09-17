import React from 'react'
import "../App.css"
import { useContext } from 'react';
import { QuizStateContext } from '../helpers/Context';

function Menu() {
    const {quizState, setQuizState, userName, setUserName} = useContext(QuizStateContext)
  return (
    <div className='Menu'>
      <h1>Quiziz</h1>
        <input type="text" placeholder='Enter Name' onChange={(event)=> {
            setUserName(event.target.value);
        }}></input>
        <button onClick={() => {
            setQuizState("questions")
        }}>Start Quiz</button>
      
    </div>
  )
}

export default Menu;
