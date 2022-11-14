import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Styles/Programs.css'

const AddProgram = () => {
  const [title, setTitle] = useState("")
  const [teacher, setTeacher] = useState("")
  
  const navigate = useNavigate()

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }
  const handleTeacherChange = e => {
    setTeacher(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const programObj = {
      title: title ,
      teacher: teacher 
    }

    fetch("http://localhost:9292/programs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(programObj)
      
    })
    .then(response => response.json())

    navigate("/programs")
  }

  return (
    <div className='programs'>
      <h1>New Program</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={ title } onChange={handleTitleChange} autoFocus={ true } />
        </div>
        <br />
        <div>
          <label>Teacher: </label>
          <input type="text" value={ teacher } onChange={handleTeacherChange} />
        </div>
        <br />
        <div>
          <input type="submit" value="Add Program" />
        </div>
      </form>
    </div>
  )
}

export default AddProgram
