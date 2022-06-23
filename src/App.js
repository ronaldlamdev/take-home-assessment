import React from "react";
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import './App.css'

const url = 'https://api.hatchways.io/assessment/students';

const App = () => {

  const [students, setStudent] = useState([]);

  const getStudents = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setStudent(data.students);
  }

  useEffect(( () => {
    getStudents();
  }
  ), [])

  return (
    <div className="app">
      {students.length > 0 ? 
      <div className="container">
        {students.map((student) => <StudentCard key={student.id} student={student}/>)}
      </div> : <>No students found</>}
    </div>
  )
}

export default App;