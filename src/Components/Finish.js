import React from 'react'
import "../App.css"
import { useContext } from 'react';
import { QuizStateContext } from '../helpers/Context';
import { Questions } from '../helpers/Questions';
function Finish() {
    
    const {score, setScore, quizState, setQuizState, userName} = useContext(QuizStateContext)
    const restartquiz = () => {
      setScore(0)
      setQuizState("menu")
    }
    return (
    <div className='finish'>
        <h1>Quiz Finished</h1>
        <h3>{userName}</h3>
        <h1>{score}/{Questions.length}
        </h1>
        <button onClick={restartquiz}>Restart</button>
      
    </div>
  )
}

export default Finish
