import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Coursebar from './Coursebar';

function Lecture() {
  
  const [selectedModule, setSelectedModule] = useState(0);
  
  const videoURLs = [
    'https://www.youtube.com/embed/-7woR4auqso?si=0qtpazVsLuZ2Blmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    'https://www.youtube.com/watch?v=cctA8tkRY3M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' , 
    'https://www.youtube.com/watch?v=ujDtm0hZyII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'   
  ];
  const lessons = [
    // Module 1 lessons
    [
      'Lesson 1: Introduction to French',
      'Lesson 2: Basic Vocabulary',
      'Lesson 3: Greetings and Politeness',
    ],
    // Module 2 lessons
    [
      'Lesson 1: Common Phrases',
      'Lesson 2: Numbers and Counting',
      'Lesson 3: Days of the Week',
    ],
    // Module 3 lessons
    [
      'Lesson 1: Family and Relationships',
      'Lesson 2: Food and Dining',
      'Lesson 3: Travel Phrases',
    ],
  ];
  

  const handleModuleSelect = (module) => {
    setSelectedModule(module - 1);
  };

  return (
    <>
      <Navbar />
      <Coursebar />
      <div className="container">
        <h1 className="mt-4">French for beginners</h1>

        {/* Module Dropdown */}
        <div className="dropdown mt-4">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="moduleDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Module
          </button>
          <div className="dropdown-menu" aria-labelledby="moduleDropdown">
            <a className="dropdown-item" href="na" onClick={() => handleModuleSelect(1)}>Module 1</a>
            <a className="dropdown-item" href="na" onClick={() => handleModuleSelect(2)}>Module 2</a>
            <a className="dropdown-item" href="na" onClick={() => handleModuleSelect(3)}>Module 3</a>
          </div>
        </div>

        {/* Video Container */}
        <div className="embed-responsive embed-responsive-16by9 mt-4">
          <iframe
            className="embed-responsive-item"
            src={videoURLs[selectedModule]}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={`videoPlayer-${selectedModule + 1}`}
          ></iframe>
        </div>

        {/* Lesson List */}
        <ul className="list-group mt-4">
          {lessons.map((lesson, index) => (
            <li key={index} className="list-group-item">{lesson}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Lecture;

  