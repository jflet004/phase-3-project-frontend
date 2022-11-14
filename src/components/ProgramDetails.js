import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

const ProgramDetails = () => {
  const [program, setProgram] = useState("")

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/programs/${params.id}`)
    .then(response => response.json())
    .then(data => {
      setProgram(data)
      console.log(data)
    })
  }, [params.id])

  // const students = program.students.map(x => x.first_name)
// debugger

  return (
    <div>
      <h1>Program Details</h1>
      <h2>Title: {program.title}</h2>
      <h3>Teacher: {program.teacher}</h3>
      <br />
      <NavLink to={"/programs/edit"}>Edit Program</NavLink>
      <br />
      <NavLink to={"/programs"}>Back to Program List</NavLink>
    </div>
  )
}

export default ProgramDetails
