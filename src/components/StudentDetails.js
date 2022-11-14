import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import './Styles/Programs.css'

const StudentDetails = () => {
  const [student, setStudent] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:9292/students/${params.id}`)
      .then(response => response.json())
      .then(data => setStudent(data))
  }, [params.id])

  let status;

  if (student.active === true) {
    status = "Active"
  } else {
    status = "Inactive"
  }

  return (
    <div className='programs'>
      <h1>Student Details</h1>
      <h2>Name: {student.first_name} {student.last_name}</h2>
      <h3>Age: {student.age} years old</h3>
      <h3>Status: {status}</h3>
      <NavLink to={`/students/${student.id}/edit`}>Edit Student</NavLink>
      <br />
      <NavLink to={`/students`}>Back to Student List</NavLink>
    </div>
  )
}

export default StudentDetails
