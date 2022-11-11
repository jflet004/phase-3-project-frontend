import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard'

const StudentList = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then(response => response.json())
    .then(data => setStudents(data))
  }, [])

  const studentList = students.map(student => 
  <StudentCard 
    key={student.id}
    student={student}
  />)

  return (
    <div>
      <h1>Students</h1>
      {studentList}
    </div>
  )
}

export default StudentList
