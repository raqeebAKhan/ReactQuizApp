import React from 'react'
import "../App.css"
import { Questions } from '../helpers/Questions'
import { useState } from 'react'
import { useContext } from 'react';
import { QuizStateContext } from '../helpers/Context';


function Quiz() {
    const[currentQuestion, setCurrentQuestion] = useState(0);
    const[optionChosen, setOptionChosen] = useState("")


    const {score, setScore, quizState, setQuizState} = useContext(QuizStateContext)

    const chosenOption = (option) => {
        setOptionChosen(option);
    }
     
    const nextQuestion = () => {
        if(Questions[currentQuestion].Answer === optionChosen){
          setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
      if(Questions[currentQuestion].Answer === optionChosen){
        setScore(score + 1)
      }
      setQuizState("finished");
    }


  return (
    <div className='Quiz'>
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div>
        <button onClick={()=>{chosenOption('optionA')}}>{Questions[currentQuestion].optionA}</button>
        <button onClick={()=>{chosenOption('optionB')}}>{Questions[currentQuestion].optionB}</button>
        <button onClick={()=>{chosenOption('optionC')}}>{Questions[currentQuestion].optionc}</button>
        <button onClick={()=>{chosenOption('optionD')}}>{Questions[currentQuestion].optionD}</button>
        
      </div>

      {currentQuestion === Questions.length-1 ? (
      <button onClick={finishQuiz} id="nextQuestion">Finish Question</button>):( <button onClick={nextQuestion} id="nextQuestion">Next Question</button>) }
     
      
    </div>
  )
}

export default Quiz
