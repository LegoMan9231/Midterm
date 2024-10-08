import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [answer1, editAnswer1] = useState('');
  const [answer2, editAnswer2] = useState('');
  const [answer3, editAnswer3] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Check the answers
    if (answer1 === "B" && answer2 === "C" && answer3 === "C") {
      goToWelcomePage(); // Navigate to the Welcome page
    } else {
      alert("Incorrect answers. Please try again.");
    }
  };

  const goToWelcomePage = () => {
    navigate('/welcome'); // Navigate to the Welcome page
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <p>Welcome to the qualifier quiz</p>
      <form onSubmit={handleSubmit}>
        <h2>Question 1</h2>
        <p>What is the primary purpose of a RESTful API?</p>
        <select value={answer1} onChange={e => editAnswer1(e.target.value)}>
          <option value="">Select an answer</option>
          <option value="A">A. To provide a graphical interface for users</option>
          <option value="B">B. To allow communication between a client and a server over HTTP</option>
          <option value="C">C. To manage databases directly</option>
          <option value="D">D. To style web pages</option>
        </select>

        <h2>Question 2</h2>
        <p>Which of the following is a JavaScript framework used for building user interfaces?</p>
        <select value={answer2} onChange={e => editAnswer2(e.target.value)}>
          <option value="">Select an answer</option>
          <option value="A">A. Django</option>
          <option value="B">B. Ruby on Rails</option>
          <option value="C">C. React</option>
          <option value="D">D. Flask</option>
        </select>

        <h2>Question 3</h2>
        <p>In which part of a web application would you typically handle user authentication?</p>
        <select value={answer3} onChange={e => editAnswer3(e.target.value)}>
          <option value="">Select an answer</option>
          <option value="A">A. Frontend</option>
          <option value="B">B. Database</option>
          <option value="C">C. Backend</option>
          <option value="D">D. All of the above</option>
        </select>

        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizPage;
