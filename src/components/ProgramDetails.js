import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProgramDetails = () => {
  const [program, setProgram] = useState("")

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/programs/${params.id}`)
    .then(response => response.json())
    .then(data => setProgram(data))
  }, [params.id])


  return (
    <div>
      <h1>Program Details</h1>
      <h2>Title: {program.title}</h2>
      <h3>Teacher: {program.teacher}</h3>
    </div>
  )
}

export default ProgramDetails
