import React from "react";

const studentCard = ({student}) => {

  const AvgGrade = () => {
    let total = student.grades.reduce((sum, current) => sum + parseInt(current), 0);
    let average = total/student.grades.length;
    return average;
  }

  return (
  <div className="student-card">
    <img className="student-image" src={student.pic} alt="pic"/>
    <div className="text-container">
      <h1 className="student-name">{student.firstName} {student.lastName}</h1>
      <div className="more-info-container">
        <p className="email">Email: {student.email}</p>
        <p className="company-name">Company: {student.company}</p>
        <p className="skill">Skill: {student.skill}</p>
        <p className="average">Average: <AvgGrade/>%</p>
        <ul className="test-grades-list">
          <li>Test 1: <span>{student.grades[0]}%</span></li>
          <li>Test 2: <span>{student.grades[1]}%</span></li>
          <li>Test 3: <span>{student.grades[2]}%</span></li>
          <li>Test 4: <span>{student.grades[3]}%</span></li>
          <li>Test 5: <span>{student.grades[4]}%</span></li>
          <li>Test 6: <span>{student.grades[5]}%</span></li>
          <li>Test 7: <span>{student.grades[6]}%</span></li>
          <li>Test 8: <span>{student.grades[7]}%</span></li>
        </ul> 
      </div> 
    </div>
  </div>
  )
};

export default studentCard;