import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StudentCard from './StudentCard'

const EnrolledStudents = () => {
  const [students, setStudents] = useState([])
  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/programs/${params.id}/students`)
    .then(response => response.json())
    .then(data => setStudents(data))
  }, [])

  return (
    <div className='programs'>
      <h1>Enrolled Students</h1>
      {students.map(student => (<li key={student.id}>{`${student.first_name} ${student.last_name}`}</li>))}
    </div>
  )
}

export default EnrolledStudents
