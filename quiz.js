import React, { useState, useEffect } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(60); 

  const questions = [
    {
      questionText: 'Which country has the highest life expectancy?',
      answerOptions: [
        { answerText: 'Portugal', isCorrect: false },
        { answerText: 'Oman', isCorrect: false },
        { answerText: 'Hong Kong', isCorrect: true },
        { answerText: 'Denmark', isCorrect: false },
      ],
    },
    {
      questionText: 'Who was the Ancient Greek God of the Sun?',
      answerOptions: [
        { answerText: 'Poseidon', isCorrect: false },
        { answerText: 'Apollo', isCorrect: true },
        { answerText: 'Aphrodite', isCorrect: false },
        { answerText: 'Demeter', isCorrect: false },
      ],
    },
    {
    questionText:'what was the most common surname in the United States?',
      answerOptions: [
        { answerText: 'Matin', isCorrect: false },
        { answerText: 'Smith', isCorrect: true },
        { answerText: 'Taylor', isCorrect: false },
        { answerText: 'Moore', isCorrect: false },
      ],
    },
  ];

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  useEffect(() => {
    if (secondsLeft > 0 && !showScore) {
      const timer = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [secondsLeft, showScore]);

  return (
    <div className='quiz'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button key={index} onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}>
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      <div className='timer'>Time Left: {secondsLeft} seconds</div>
    </div>
  );
};

export default Quiz;