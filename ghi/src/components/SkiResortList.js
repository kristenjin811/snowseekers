import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link, Navigate } from "react-router-dom"
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
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    localStorage.setItem('skiResorts', JSON.stringify(skiResorts))
  }, [skiResorts])

  // delete button works without refreshing the page after each deletion
  const removeSkiResort = index => {
    setSkiResorts(skiResorts.filter((_, i) => i !== index))
  }


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
      <h4>{skiResorts.length} results found:</h4>

      <div className="container">
        <CardGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
          {currentPageResorts.length ? (
            currentPageResorts.map((skiResort, index) => (
            <Card key={skiResort.name} style={{ width: '18rem', flex: '1 0 33%' }}>
              <Card.Body>
                <Card.Img variant="top" src="https://www.macmillandictionary.com/external/slideshow/thumb/Grey_thumb.png" />
                <Card.Title>{skiResort.name}</Card.Title>
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
              <p className="empty-list-text">No ski resorts are added yet.</p>
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
