import React from "react";

const studentCard = ({student}) => {
  return (
  <div className="student-card">
    <img className="student-image" src={student.pic} alt="pic"/>
    <h1 className="student-name">{student.firstName} {student.lastName}</h1>
    <p className="email">Email: {student.email}</p>
    <p className="company-name">Company: {student.company}</p>
    <p className="skill">Skill: {student.skill}</p>
  </div>
  )
};

export default studentCard;