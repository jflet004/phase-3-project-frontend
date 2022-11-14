import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Styles/Programs.css'

const EditProgram = () => {
  const [program, setProgram] = useState([])
  const [title, setTitle] = useState("")
  const [teacher, setTeacher] = useState("")
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:9292/programs/${params.id}`)
    .then(response => response.json())
    .then(data => {
      setProgram(data)
      setTitle(data.title)
      setTeacher(data.teacher)
    })
  }, [])

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
      teacher: teacher,
    }

    fetch(`http://localhost:9292/programs/${params.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(programObj)
      
    })
    .then(response => response.json())

    navigate(`/programs/${params.id}`)
  }

  return (
    <div className='programs'>
      <h1>Edit Program ({program.title})</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input type="text" value={title} onChange={handleTitleChange} />
        </div>
        <br />
        <div>
          <label>Teacher: </label>
          <input type="text" value={teacher} onChange={handleTeacherChange} />
        </div>
        <br />
        <input type="submit" value="Update Program" />
      </form>
    </div>
  )
}

export default EditProgram
