import React from "react";
import { useState, useEffect } from "react";
import StudentCard from "./StudentCard";
import './App.css'

const url = 'https://api.hatchways.io/assessment/students';

const App = () => {

  const [students, setStudent] = useState([]);
  const [searchStudent, setSearchStudent] = useState('');

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
      <div className="search-container">
        <input id="name-search" type='text' placeholder="Search by name" 
        onChange={e => {setSearchStudent(e.target.value)}}/>
      </div>
      <div className="search-container">
        <input id="tag-search" type='text' placeholder="Search by tag" />
      </div>
      {students.length > 0 ? 
      <div className="container">
        {students.filter((student) => {
          if (searchStudent === "") {
            return student;
          } else if (student.firstName.toLowerCase().includes(searchStudent.toLowerCase())) {
            return student;
          } else {
            return null;
          }
        }).map((student) => <StudentCard key={student.id} student={student}/>)}
      </div> : <>No students found</>}
    </div>
  )
}

export default App;