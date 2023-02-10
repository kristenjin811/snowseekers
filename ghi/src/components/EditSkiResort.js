import React, { useState, useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import states from './USStates'
import WebcamCapture from './WebcamCapture'



const EditSkiResort = () => {
  const [skiResorts, setSkiResorts] = useState(getDataFromLS());
  const { index } = useParams()
  console.log(index)
  const [skiResort, setSkiResort] = useState({ name: 'Dummy Resort', location: 'Alaska', skiRuns: '10' })
  const [isEdited, setIsEdited] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setSkiResort(skiResorts[index])
  }, [index, skiResorts])

  const handleChange = event => {
    setSkiResort({ ...skiResort, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()

    if (JSON.stringify(skiResort) !== JSON.stringify(skiResorts[index])) {
      skiResorts[index] = skiResort
      localStorage.setItem('skiResorts', JSON.stringify(skiResorts))
      setSkiResorts(skiResorts)
      setIsEdited(true)
      alert(
        'The information was saved.'
      )
    } else {
      alert(
        'No information was updated.'
      )
    }
  }

  if (isEdited) {
    return <Navigate to='/all'></Navigate>
  }

  return (
    <>
      <div className="px-4 py-5 my-5 mt-0 text-center">
        <h1 className="display-5 fw-bold">Ski Resorts</h1>
        <br></br>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Edit ski resort
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} id="form" className="center-form">
        <div className="form-group">
          <label htmlFor="name">Ski resort name:</label>
          <input type="text" onChange={handleChange} value={skiResort.name} className="form-control" name="name" id="name" required/>
        </div>
        <div className="form-group">

        <div>
          <label htmlFor="location">Location:</label>
          <select name="location" onChange={handleChange} value={skiResort.location} className="form-control" required>
            {states.map(state => (
              <option htmlFor="location" key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>

        </div>
        <div className="form-group">
          <label htmlFor="skiRuns">Number of ski runs:</label>
          <input type="number" min="0" onChange={handleChange} value={skiResort.skiRuns} className="form-control" name="skiRuns" id="skiRuns" required/>
        </div>
        <WebcamCapture setSkiResort={setSkiResort} />

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark edit-resort-button">Save</button>
          <br></br>
        </div>

      </form>
      <div className="text-center mt-3">
        <Link to="/all" className="btn btn-link cancel-link" style={{color: 'black'}}>Cancel Editing</Link>
      </div>
    </>
  )
}

export default EditSkiResort

const getDataFromLS = () => {
  const data = localStorage.getItem('skiResorts')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
