import React from 'react'
import { useLocation } from 'react-router-dom';

const Productdetail = ({route}) => {
  const location = useLocation();
  const carDetail = location.state?.cardetail;
  console.log(carDetail);


  return (
    <div>productdetail</div>
  )
}

export default Productdetail