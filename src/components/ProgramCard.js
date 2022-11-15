import React from 'react'
import { NavLink } from 'react-router-dom'
import './Styles/Programs.css'


const ProgramCard = ({ program, students, onDeleteProgram }) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/programs/${program.id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => onDeleteProgram(program.id))
  }
  return (
    <div className='text'>
      <li>
        <NavLink to={`/programs/${program.id}`}>{program.title}</NavLink> - {program.teacher} - <button onClick={handleDeleteClick}>Delete</button>
      </li>
    </div>
  )
}

export default ProgramCard
