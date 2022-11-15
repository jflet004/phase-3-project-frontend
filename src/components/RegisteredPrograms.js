import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ProgramCard from './ProgramCard'

const RegisteredPrograms = () => {
  const [programs, setPrograms] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/students/${params.id}/programs`)
    .then(response => response.json())
    .then(data => setPrograms(data))
  }, [])

  return (
    <div className='programs'>
      <h1>Enrolled programs</h1>
      {programs.map(program => (<li key={program.id}>{`${program.title} with ${program.teacher}`}</li>))}
    </div>
  )
}

export default RegisteredPrograms
