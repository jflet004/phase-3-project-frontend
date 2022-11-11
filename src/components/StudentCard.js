import React from 'react'
import { NavLink } from 'react-router-dom'

const StudentCard = ({ student }) => {
  return (
    <div>
        <li>
          <NavLink to={`/students/${student.id}`}>
            {student.first_name} {student.last_name}
          </NavLink>
        </li>
    </div>
  )
}

export default StudentCard
