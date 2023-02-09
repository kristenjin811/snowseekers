import React from 'react'
import { Link } from "react-router-dom"


class MainPage extends React.Component {


  render () {
    const myStyle={
      backgroundImage: "url('https://wallpaperaccess.com/full/133728.jpg')",
    }
    return (
      <>
        <div className="main" style={myStyle}>
          <br></br>
          <br></br>
          <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">From world-class winter resorts to secret stashes of champagne powder - SnowSeeker is the site you've been looking for.</h1>
            <br></br>
            <Link to="all/" className="btn btn-dark btn-lg px-4 gap-3">Explore all ski resorts</Link>
          </div>
        </div>
      </>
    )
  }
}


export default MainPage
