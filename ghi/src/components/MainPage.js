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
            <h2 className="display-5 fw-bold">Welcome to SnowSeekers! This ultimate ski resort bucket list is dedicated to helping you plan and keep track of all the amazing ski resorts you want to visit. </h2>
            <br></br>
            <Link to="all/" className="btn btn-dark btn-lg px-4 gap-3">Go to your ski resort bucket list</Link>
          </div>
        </div>
      </>
    )
  }
}


export default MainPage
