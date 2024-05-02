import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "../../Home/Home"
import Productdetail from '../../Productdetail/Productdetail'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productdetail" element={<Productdetail/>} />
    </Routes>

    </BrowserRouter>
    
    
  )
}

export default Router