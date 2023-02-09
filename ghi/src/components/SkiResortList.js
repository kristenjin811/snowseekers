import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import {Card, CardGroup, Button, ButtonGroup} from 'react-bootstrap'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const getDataFromLS = () => {
  const data = localStorage.getItem('skiResorts')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}


function SkiResortList() {
  const [skiResorts, setSkiResorts] = useState(getDataFromLS());

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const getCurrentPage = (skiResorts, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return skiResorts.slice(startIndex, startIndex + itemsPerPage);
  }

  const currentPageResorts = getCurrentPage(skiResorts, currentPage, itemsPerPage);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentPage])

  useEffect(() => {
    localStorage.setItem('skiResorts', JSON.stringify(skiResorts))
  }, [skiResorts])

  // delete button works without refreshing the page after each deletion
  const removeSkiResort = index => {
    setSkiResorts(skiResorts.filter((_, i) => i !== index))
  }

  // Unsplash API
  const [photos, setPhotos] = useState('')
  const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY
  console.log(API_KEY)
  useEffect(() => {
    const fetchPhotos = async () => {
      const promises = skiResorts.map(async skiResort => {
        const response = await fetch(
          `https://cors-anywhere.herokuapp.com/https://api.unsplash.com/search/photos?query=${skiResort.name}+ski+resort&client_id=${API_KEY}`
        )
        const data = await response.json()
        return data.results[0].urls.small
      })
      const results = await Promise.all(promises)
      setPhotos(results)
    }
    fetchPhotos()
  }, [skiResorts, API_KEY])


  return (
    <>
      <div className="px-4 py-5 my-5 mt-0 text-center">
        <h1 className="display-5 fw-bold">Ski Resorts</h1>
        <br></br>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Explore winter's wonderland
          </p>
        </div>
      </div>
      <h4 data-testid="number-of-ski-resorts">{skiResorts.length} results found:</h4>

      <div className="card-container" >
        <CardGroup>
          {currentPageResorts.length ? (
            currentPageResorts.map((skiResort, index) => (
              <Card className="card-with-border" key={skiResort.name} style={{ width: '33.33%', flex: '1 0 33.33%', border: 'none'}}>
              <Card.Body>
              <Card.Img variant="top" src={photos[index]}/>
                <Card.Title>{skiResort.name.toUpperCase()}</Card.Title>
                <Card.Subtitle>{skiResort.location}</Card.Subtitle>
                <Card.Text>{skiResort.skiRuns} ski runs</Card.Text>

                <DropdownButton size="sm" variant="secondary" as={ButtonGroup} title="Edit" id="bg-nested-dropdown">
                  <Dropdown.Item eventKey="1" as={Link} to={`/edit/${index}`}>Edit</Dropdown.Item>
                  <Dropdown.Item eventKey="2" onClick={() => removeSkiResort(index)}>Delete</Dropdown.Item>
                </DropdownButton>
              </Card.Body>
            </Card>
            ))
            ) : (
              <p className="empty-list-text">There's nothing on this page. Please go to the previous page.</p>
              )}
        </CardGroup>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center pagination" >
        {currentPage > 1 &&
          <Button variant="outline-dark" onClick={() => setCurrentPage(currentPage - 1)}>Prev</Button>
        }
        {currentPage < Math.ceil(skiResorts.length / itemsPerPage) &&
          <Button variant="outline-dark" onClick={() => setCurrentPage(currentPage + 1)}>Next</Button>
        }
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/new" className="btn btn-dark submit-button">Add a ski resort</Link>
      </div>

    </>
  )
}



export default SkiResortList
