import React, { useState, useEffect } from 'react'
import StudentCard from './StudentCard'
import './Styles/Programs.css'

const StudentList = () => {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/students")
    .then(response => response.json())
    .then(data => setStudents(data))
  }, [])

  const removeStudent = id => setStudents(students.filter(student => student.id !== id))
  
  const studentList = students.map(student => 
  <StudentCard key={student.id} student={student} onDeleteStudent={removeStudent} />)


  return (
    <div className='programs'>
      <h1>Students</h1>
      {studentList}
    </div>
  )
}

export default StudentList
