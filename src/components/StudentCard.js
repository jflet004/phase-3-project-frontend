import React from 'react'
import { NavLink } from 'react-router-dom'

const StudentCard = ({ student, onDeleteStudent }) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/students/${student.id}`, {
      method: "DELETE",
    })
    .then(response => response.json())
    .then(() => onDeleteStudent(student.id) )
  } 

  return (
    <div>
        <li>
          <NavLink to={`/students/${student.id}`}>
            {student.first_name} {student.last_name}
          </NavLink> - <button onClick={handleDeleteClick}>Delete</button>
        </li>
    </div>
  )
}

export default StudentCard
