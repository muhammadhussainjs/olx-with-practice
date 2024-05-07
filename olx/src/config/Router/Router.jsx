import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Home from "../../Home/Home"
import Productdetail from '../../Productdetail/Productdetail'
import Phonedetail from '../../phonedetail/Phonedetail'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productdetail" element={<Productdetail/>} />
        <Route path="/phonedetail" element={<Phonedetail/>} />
    </Routes>

    </BrowserRouter>
    
    
  )
}

export default Router