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
      {students.map(student => <StudentCard key={student.id} student={student} />)}
    </div>
  )
}

export default EnrolledStudents
