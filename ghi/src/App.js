import SkiResortList from './components/SkiResortList'
import NewResortForm from './components/NewResortForm'
import EditSkiResort from './components/EditSkiResort'

import Nav from './components/Nav'
import Footer from './components/Footer'
import MainPage from './components/MainPage'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {

  return (
      <BrowserRouter>
        <Nav/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>

        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="all/" element={<SkiResortList />}/>
            <Route path="new/" element={<NewResortForm />} />
            <Route path="edit/:index" element={<EditSkiResort />}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
  );
}

export default App
