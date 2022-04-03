import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect( () => { 

    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
      return;
    }
      
    const timerID = setTimeout(() => {
      setTimeRemaining((timeRemaining) => timeRemaining - 1)
        }, 1000);
      console.log("i'm decreasing by 1");  

      return function () { //This function runs every time our setTimeout runs/setTimeRemaing decreases by 1
        clearTimeout(timerID);
      console.log("the clearTimeout function has now been run")} 
      
      
          
  },[timeRemaining] ) 

  

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
