import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import newspaperSolid from "../images/newspaper-solid.svg";
import Coursebar from './Coursebar';

const Practice = () => {
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

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [feedback, setFeedback] = useState(Array(questions.length).fill(null));

  const handleOptionChange = (questionIndex, optionIndex) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[questionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const checkAnswers = () => {
    const newFeedback = selectedAnswers.map((selectedAnswer, i) => {
      return selectedAnswer === questions[i].answer;
    });
    setFeedback(newFeedback);
  };

  return (
    <div>
      <style>
        {
          `
              body {
                background-color: #A7D397;
            }

            .cont {
                background-color: #F5EEC8;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                padding: 20px;
                margin-top: 20px;
            }

            .question-contain {
                background-color: #fff;
                padding: 20px;
                border: 1px solid #dee2e6;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
            }

            .options label {
                font-size: 18px;
            }

            .correct-answer {
                color: green;
            }

            .wrong-answer {
                color: red;
            }

            .option-box {
                border: 2px solid black;
                padding: 10px;
                border-radius:  5px;
                margin: 5px 0;
                display: flex;
                justify-content: space-between;
            }

            .correct-option {
                border-color: green;
            }

            .selected-option {
                border-color: orange;
            }

            .feedback-icon {
                font-size: 18px;
                display: none;
            }

            .correct-icon {
                color: green;
            }

            .wrong-icon {
                color: red;
            }
          `
        }
      </style>

      <Navbar />
      <Coursebar />

      <div className="container cont">
        <div></div>
        <div className="d-flex justify-content-center">
          <h2>
            {' '}
            <img src={newspaperSolid} alt="" height="30px" width="30px" /> Practice Quiz
          </h2>
        </div>
        <br />
        <style>
            {`
                  body {
                    background-color: #A7D397;
                }
        
                .cont {
                    background-color: #F5EEC8;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
                    padding: 20px;
                    margin-top: 20px;
                }
        
                .question-contain {
                    background-color: #fff;
                    padding: 20px;
                    border: 1px solid #dee2e6;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
                }
        
                .options label {
                    font-size: 18px;
                }
        
                .correct-answer {
                    color: green;
                }
        
                .wrong-answer {
                    color: red;
                }
        
                .option-box {
                    border: 2px solid black;
                    padding: 10px;
                    border-radius:  5px;
                    margin: 5px 0;
                    display: flex;
                    justify-content: space-between;
                }
        
                .correct-option {
                    border-color: green;
                }
        
                .selected-option {
                    border-color: orange;
                }
        
                .feedback-icon {
                    font-size: 18px;
                    display: none;
                }
        
                .correct-icon {
                    color: green;
                }
        
                .wrong-icon {
                    color: red;
                }
            `}
        </style>
        <div className="question-container" id="questions-container">
          {questions.map((question, i) => (
            <div key={i} className="question-contain">
              <h4 id={`question${i}`}>
                {question.question}
                <span className="feedback-icon correct-icon">&#10004;</span>
                <span className="feedback-icon wrong-icon">&#10008;</span>
              </h4>
              <br />
              <div className="options">
                {question.options.map((option, j) => (
                  <label key={j} className={`option-box question${i} option${j}`}>
                    {option}
                    <span className="feedback-icon correct-icon">&#10004;</span>
                    <span className="feedback-icon wrong-icon">&#10008;</span>
                    <input
                      type="radio"
                      name={`answer${i}`}
                      value={j}
                      checked={selectedAnswers[i] === j}
                      onChange={() => handleOptionChange(i, j)}
                    />
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-primary btn-next mt-3" onClick={checkAnswers}> Check Answers </button>
        {feedback.map((isCorrect, i) => (
          <div key={i} className="feedback">
            Question {i + 1}: {isCorrect ? 'Correct' : 'Incorrect'}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Practice;

