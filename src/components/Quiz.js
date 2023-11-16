import React, { useState, useEffect,useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Coursebar from './Coursebar';
import '../quiz.css'; 

  const questions = [
              {
                  question: "What is 'hello' in French?",
                  options: ["Bonjour", "Bonsoir", "Salut"],
                  answer: 0
              },
              {
                  question: "How do you say 'goodbye' in French?",
                  options: ["Au revoir", "Adieu", "À bientôt"],
                  answer: 0
              },
              {
                  question: "What is 'thank you' in French?",
                  options: ["Merci", "S'il vous plaît", "Excusez-moi"],
                  answer: 0
              },
              {
                  question: "How do you say 'yes' in French?",
                  options: ["Oui", "Non", "Peut-être"],
                  answer: 0
              },
              {
                  question: "What is 'cat' in French?",
                  options: ["Chien", "Chat", "Oiseau"],
                  answer: 1
              },
              {
                  question: "How do you say 'water' in French?",
                  options: ["Feu", "Air", "Eau"],
                  answer: 2
              },
              {
                  question: "What is 'red' in French?",
                  options: ["Bleu", "Vert", "Rouge"],
                  answer: 2
              },
              {
                  question: "How do you say 'book' in French?",
                  options: ["Fleur", "Livre", "Maison"],
                  answer: 1
              },
              {
                  question: "What is 'one' in French?",
                  options: ["Deux", "Un", "Trois"],
                  answer: 1
              },
              {
                  question: "How do you say 'please' in French?",
                  options: ["Merci", "S'il vous plaît", "Excusez-moi"],
                  answer: 1
              }
        ];

const QuizComponent = ({ question, options, onOptionSelect, onNextClick }) => (
  <div>
    {/* Your existing HTML for the quiz component */}
    <h4>{question}</h4>
    {/* Render options and handle option selection */}
    {options.map((option, index) => (
      <div key={index}>
        <input
          type="radio"
          name="answer options-outlined"
          id={`option${index}`}
          value={index}
          onChange={() => onOptionSelect(index)}
        />
        <label htmlFor={`option${index}`} className="btn btn-outline-success">
          {option}
        </label>
      </div>
    ))}
    {/* Button to proceed to the next question */}
    <button onClick={onNextClick}>Save & Next</button>
  </div>
);

const ScoreComponent = ({ scoreInfo }) => {
  return (
    <div>
      {/* Your existing HTML for the score component */}
      <h3>Your Score</h3>
      <p>Attempted Questions: {scoreInfo.attemptedQuestions}</p>
      <p>Your Score: {scoreInfo.score}</p>
    </div>
  );
}
    


function  Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timer, setTimer] = useState(10);
  const [timerInterval, setTimerInterval] = useState(null);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [unattempted, setUnattempted] = useState(10);
  const [showQuiz, setShowQuiz] = useState(true);
  const [scoreVisible, setScoreVisible] = useState(false);
  const [scoreInfo, setScoreInfo] = useState({
    attemptedQuestions: 0,
    score: 0,
  });
  const endQuiz = useCallback(() => {
    clearInterval(timerInterval);
    setTimer(-2);

    // Hide unnecessary elements and display the score
    setShowQuiz(false);
    setScoreVisible(true);

    // Calculate the number of attempted questions
    const attemptedQuestions = 10 - unattempted;

    // Update the UI with the score and attempted questions
    setScoreInfo({
      attemptedQuestions,
      score,
    });
  },[score,timerInterval,unattempted]);
  const nextQuestion = useCallback(() => {
    clearInterval(timerInterval);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion < questions.length) {
      loadQuestion();
      startTimer();
    } else {
      endQuiz();
    }
  },[currentQuestion,endQuiz,loadQuestion,startTimer,timerInterval]);

  const loadQuestion = useCallback(() => {
    const question = questions[currentQuestion];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = ''; // Clear existing content
  
    // Add question heading
    const questionHeading = document.createElement('h4');
    questionHeading.textContent = `${currentQuestion + 1}. ${question.question}`;
    questionContainer.appendChild(questionHeading);
  
    // Add radio buttons for options
    for (let i = 0; i < question.options.length; i++) {
      const optionDiv = document.createElement('div');
      optionDiv.classList.add('form-check');
  
      const radioButton = document.createElement('input');
      radioButton.type = 'radio';
      radioButton.name = 'answer options-outlined';
      radioButton.id = `option${i}`;
      radioButton.value = i;
  
      const label = document.createElement('label');
      label.htmlFor = `option${i}`;
      label.classList.add('btn', 'btn-outline-success');
      label.textContent = question.options[i];
  
      optionDiv.appendChild(radioButton);
      optionDiv.appendChild(label);
  
      questionContainer.appendChild(optionDiv);
    }
  },[currentQuestion]);
  

  const startTimer = useCallback(() => {
    setTimer(10); // Reset timer to 10 seconds
  
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
  
      if (timer === -1) {
        clearInterval(interval);
        nextQuestion(); // Move to the next question when the timer reaches -1
      }
    }, 1000);
  
    setTimerInterval(interval); // Save the interval ID in state for later clearing
  },[nextQuestion,timer]);
  

  useEffect(() => {
    if (quizStarted) {
      loadQuestion();
      startTimer();
    }
  }, [quizStarted, loadQuestion, startTimer]);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  


  

  const handleNextButtonClick = () => {
    const selectedAnswer = document.querySelector('input[name="answer options-outlined"]:checked')?.value;
    const correctAnswer = questions[currentQuestion].answer;

    if (typeof selectedAnswer !== 'undefined') {
      setUnattempted((prevUnattempted) => prevUnattempted - 1);
    }

    if (selectedAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    nextQuestion();
  };

  const skipQuestion = () => {
    clearInterval(timerInterval);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);

    if (currentQuestion < questions.length) {
      loadQuestion();
      startTimer();
    } else {
      // endQuiz();
    }
  };

  return (
    <div>
      <Navbar />
      <Coursebar />
      {showQuiz && (
        <QuizComponent
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          onOptionSelect={handleNextButtonClick}
          onNextClick={nextQuestion}
        />
      )}
      {scoreVisible && <ScoreComponent scoreInfo={scoreInfo} />}
    </div>
  );
};


export default Quiz;





