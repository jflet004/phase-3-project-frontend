import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [age, setAge] = useState(0)

  const navigate = useNavigate()

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

    fetch("http://localhost:9292/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(studentObj)
      
    })
    .then(response => response.json())

    navigate("/programs")
  }

  return (
    <div>
      <h1>New Student</h1>
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
        <input type="submit" value="Add Student" />
      </form>
    </div>
  )
}

export default AddStudent
