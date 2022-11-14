import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Styles/Programs.css'


const EditStudent = () => {
  const [student, setStudent] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/students/${params.id}`)
    .then(response => response.json())
    .then(data => {
      setStudent(data)
      setFirstName(data.first_name)
      setLastName(data.last_name)
      setAge(data.age)
    })
  }, [])

  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }
  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }
  const handleAgeChange = e => {
    setAge(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const studentObj = {
      first_name: firstName ,
      last_name: lastName,
      age: age,
      active: true 
    }

    fetch(`http://localhost:9292/students/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentObj)
      
    })
    .then(response => response.json())

    navigate(`/students/${params.id}`)
  }

  return (
    <div className='programs'>
      <h1>Edit Student ({student.first_name} {student.last_name})</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>
        <br />
        <div>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
        <br />
        <div>
          <label>Age: </label>
          <input type="text" value={age} onChange={handleAgeChange} />
        </div>   
        <br />
        <input type="submit" value="Update Student" />
      </form>
    </div>
  )
}

export default EditStudent
