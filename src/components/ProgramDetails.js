import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './Styles/Programs.css'


const ProgramDetails = () => {
  const [program, setProgram] = useState("")

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/programs/${params.id}`)
      .then(response => response.json())
      .then(data => {
        setProgram(data)
      })
  }, [params.id])


  return (
    <div className='programs'>
      <h1>Program Details</h1>
      <h2>{program.title}</h2>
      <h3>{program.teacher}</h3>
      <br />
      <NavLink to={`/programs/${program.id}/students`}>Enrolled Students</NavLink>
      <br />
      <NavLink to={`/programs/${program.id}/edit`}>Edit Program</NavLink>
      <br />
      <NavLink to={"/programs"}>Back to Program List</NavLink>
    </div>
  )
}

export default ProgramDetails
