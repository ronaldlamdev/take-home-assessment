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
      </div> 
    </div>
    
  </div>
  )
};

export default studentCard;