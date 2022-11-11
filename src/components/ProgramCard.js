import React from 'react'
import { NavLink } from 'react-router-dom'

const ProgramCard = ({ program }) => {
  return (
    <div>
        <li>
          <NavLink to={`/programs/${program.id}`}>
            {program.title}
          </NavLink>
        </li>
    </div>
  )
}

export default ProgramCard
