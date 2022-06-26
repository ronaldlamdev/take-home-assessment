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
  
    const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <div className="search-container">
        <input type='text' placeholder="Search..." 
        onChange={event => {setSearchTerm(event.target.value)}}/>
      </div>
      {students.length > 0 ? 
      <div className="container">
        {students.filter((student) => {
          if (searchTerm === "") {
            return student
          } else if (student.firstName.toLowerCase().includes(searchTerm.toLowerCase())) {
            return student
          }
        }).map((student) => <StudentCard key={student.id} student={student}/>)}
      </div> : <>No students found</>}
    </div>
  )
}

export default App;