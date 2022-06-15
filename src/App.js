import React from "react";
import { useState, useEffect } from "react";

const url = 'https://api.hatchways.io/assessment/students';

const App = () => {

  const [students, setStudent] = useState([]);

  const getStudents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudent(data);
  }

  return (
    <div className="app">
      <button onClick={getStudents}>Click Me</button>
      <div className="container">
        
      </div>
    </div>
  )
}

export default App;