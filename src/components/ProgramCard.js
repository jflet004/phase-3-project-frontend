import React from 'react'
import { NavLink } from 'react-router-dom'

const ProgramCard = ({ program, onDeleteProgram }) => {

  const handleDeleteClick = () => {
    fetch(`http://localhost:9292/programs/${program.id}`, {
      method: "DELETE"
    })
    .then(response => response.json())
    .then(() => onDeleteProgram(program.id))
  }
  return (
    <div>
        <li>
          <NavLink to={`/programs/${program.id}`}>
            {program.title}
          </NavLink> - {program.teacher} - <button>Edit</button> - <button onClick={handleDeleteClick}>Delete</button>
        </li>
    </div>
  )
}

export default ProgramCard
