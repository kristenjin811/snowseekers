import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"
import states from './USStates'


const getDataFromLS = () => {
  const data = localStorage.getItem('skiResorts')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

function NewResortForm() {
  const [skiResorts, setSkiResorts] = useState(getDataFromLS());
  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [skiRuns, setSkiRuns] = useState('')
  const [isCreated, setIsCreated] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    let skiResort = {
      name,
      location,
      skiRuns
    }
    const skiResortExists = skiResorts.find(
      ({ name: existingName }) => existingName === name
    )
    if (!skiResortExists) {
      setSkiResorts([...skiResorts, skiResort])
      setName('')
      setLocation([])
      setSkiRuns(0)
      setIsCreated(true)
      alert(
        'A new ski resort was added. '
      )
    } else {
      alert('The ski resort already exists in the list.')
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem('skiResorts', JSON.stringify(skiResorts))
  }, [skiResorts])

  if (isCreated) {
    return <Navigate to='/all'></Navigate>
  }

  return (
    <>
      <div className="px-4 py-5 my-5 mt-0 text-center">
        <h1 className="display-5 fw-bold">Ski Resorts</h1>
        <br></br>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Add a new ski resort to the list
          </p>
        </div>
      </div>

      <form autoComplete="off" onSubmit={handleSubmit} id="form" className="center-form">
        <div className="form-group">
          <label htmlFor="name">Ski resort name:</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" name="name" id="name" required/>
        </div>
        <div className="form-group">

        <div>
          <label htmlFor="location">Location:</label>
          <select name="location" value={location} onChange={(e)=>setLocation(e.target.value)} className="form-control" required>
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
          <input type="number" min="0" onChange={(e)=>setSkiRuns(e.target.value)} value={skiRuns} className="form-control" name="skiRuns" id="skiRuns" required/>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-dark submit-button" >Add to list</button>
        </div>
      </form>

    </>
  )
}



export default NewResortForm
