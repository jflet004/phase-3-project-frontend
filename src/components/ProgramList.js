import React, { useState, useEffect } from 'react'
import ProgramCard from './ProgramCard'
import './Styles/Programs.css'

const ProgramList = () => {
  const [programs, setPrograms] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/programs")
      .then(response => response.json())
      .then(data => setPrograms(data))
  }, [])

  const removeProgram = (id) => setPrograms(programs.filter(program => program.id !== id))

  const programList = programs.map(program =>
    <ProgramCard
      key={program.id}
      program={program}
      students={program.students}
      onDeleteProgram={removeProgram}
    />)
  return (
    <div >
      <h1 className='programs'>Programs</h1>
      {programList}
    </div>
  )
}

export default ProgramList
