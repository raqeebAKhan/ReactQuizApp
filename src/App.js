import './App.css';
import { useState } from 'react';
import Menu from './Components/Menu';
import Quiz from './Components/Quiz';
import { QuizStateContext } from './helpers/Context';
import Finish from './Components/Finish';

function App() {
  const[quizState, setQuizState] = useState('menu')
  const[userName, setUserName] = useState("")
  const[score, setScore] = useState(0)
  return (
    <div className="App">
      <QuizStateContext.Provider value={{quizState, setQuizState, userName, setUserName, score, setScore}}>
     <h1>Quiz App</h1>
    {quizState === "menu" && <Menu/>}
    {quizState === "questions" && <Quiz/>}
    {quizState === "finished" && <Finish/>}
    </QuizStateContext.Provider>
    </div>
  );
}

export default App;
