import React, { useState, useEffect, useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Coursebar from './Coursebar';
import '../quiz.css'; 
import studentGivingExam from '../images/student-giving-exam-4064797-3363987.png';

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



function Quiz(){
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [timer, setTimer] = useState(10);
    const [timerInterval, setTimerInterval] = useState(null);
    const [score, setScore] = useState(0);
    const [quizStarted, setQuizStarted] = useState(false);
    const [unattempted, setUnattempted] = useState(10);
    const [showScorebox, setShowScorebox] = useState(false);
        
    const loadQuestion = useCallback(() => {
      const question = questions[currentQuestion];
  
      const options = question.options.map((option, index) => (
          <div key={index} className="form-check">
              <input className="button-check" type="radio" name="answer options-outlined" id={`option${index}`} value={index} />
              <label className="btn btn-outline-success" htmlFor={`option${index}`}>
                  {option}
              </label>
          </div>
      ));
  
      const questionContainer = (
          <div>
              <h4>{currentQuestion + 1}. {question.question}</h4>
              {options}
          </div>
      );
  
      // Render questionContainer using JSX
      return questionContainer;
  }, [currentQuestion]);

  const startTimer = useCallback(() => {
    setTimer(10);
    const interval = setInterval(() => {
    setTimer((prevTimer) => prevTimer - 1);
    
      if (timer === -1) {
          clearInterval(interval);
      }
    }, 2000);
    setTimerInterval(interval);
},[timer]);

    const startQuiz = useCallback(() => {
        setQuizStarted(true);
        loadQuestion();
        startTimer();
    },[loadQuestion,startTimer]);
        
    const endQuiz = useCallback(() => {
        clearInterval(timerInterval);
        setTimer(-2);
        setShowScorebox(true);
    },[timerInterval]);
        
    const nextQuestion = useCallback(() => {
        clearInterval(timerInterval);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        
        if (currentQuestion < questions.length) {
              loadQuestion();
              startTimer();
        } else {
            clearInterval(timerInterval);
            endQuiz();
        }
    },[currentQuestion,endQuiz,loadQuestion,startTimer,timerInterval]);
        
    const skipQuestion = () => {
        clearInterval(timerInterval);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        
        if (currentQuestion < questions.length) {
            loadQuestion();
            startTimer();
          } else {
             endQuiz();
          }
    };
        
    const handleNextButtonClick = () => {
        const selectedAnswer = document.querySelector(
            'input[name="answer options-outlined"]:checked'
        )?.value;
        const correctAnswer = questions[currentQuestion].answer;
        
        if (typeof selectedAnswer !== 'undefined') {
            setUnattempted((prevUnattempted) => prevUnattempted - 1);
        }
        
        if (selectedAnswer === correctAnswer) {
          setScore((prevScore) => prevScore + 1);
        }
      
        nextQuestion();
    };
        
    useEffect(() => {

      if (quizStarted) {
        loadQuestion();
        startTimer();
      }
    
      return () => {
        // Cleanup code (if needed) when the component unmounts or when quizStarted changes
        clearInterval(timerInterval);
      };
    }, [quizStarted, currentQuestion, loadQuestion, startTimer, timerInterval]); 
    

    return (
      <div>
        <div>
            <Navbar />
            <Coursebar />
        </div>
        <div className="preface-box text-center container mt-4" id="preface-box"style={{ width: '50%' }}>
          <div className="doublbox">
            <h3>Welcome to the French Language Quiz</h3>
            <br />
            <br />
            <div className="container mt-3">
              <h6 style={{ color: 'red' }} className="font-weight-bold">
                Before you start, please read the rules:
              </h6>
              <div className="container" style={{ width: '65%' }}>
                <ol>
                  <li>Each question has a 10-second timer.</li>
                  <li>Choose the correct answer from the options.</li>
                </ol>
              </div>
            </div>
            <button id="start-quiz" className="btn btn-primary preface-button" onClick={startQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
        <div className="container mt-4 quizbox" id="quizbox" style={{ display: 'none' }}>
          <div className="doublbox">
            <div id="question-container"></div>
            <div className="mt-3">
              <span id="timer">{timer}</span> seconds remaining
            </div>
            <button id="next-button" className="btn btn-primary mt-3 btn-skip" onClick={handleNextButtonClick}>
              Save & Next
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button id="skip-question" className="btn btn-secondary btn-next" onClick={skipQuestion}>
              Skip
            </button>
            <div className="text-center mt-3">
              <button id="end-quiz" className="btn btn-danger btn-next preface-button" onClick={endQuiz}>
                End Quiz
              </button>
            </div>
          </div>
        </div>
        <div className="text-center container mt-4" id="scorebox" style={{ width: '50%', display: showScorebox ? 'block' : 'none' }}>
          <div className="doublbox">
            <h3>Your Score</h3>
            <br />
            <div className="container mt-3">
              <div className="container marksreport" id="marksreport" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img className="align-items-center" style={{ width: '30%', height: '30%' }} src={studentGivingExam} alt="" />
        </div>
    </div>
    );
    };
        

        




export default Quiz;





