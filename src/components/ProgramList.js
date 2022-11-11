import React, { useState, useEffect } from 'react'
import ProgramCard from './ProgramCard'

const ProgramList = () => {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/programs")
      .then(response => response.json())
      .then(data => setPrograms(data))
  }, [])

  const programList = programs.map(program =>
    <ProgramCard
      key={program.id}
      program={program}
    />)
  return (
    <div>
      <h1>Programs</h1>
      {programList}
    </div>
  )
}

export default ProgramList
