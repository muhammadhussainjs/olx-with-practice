import React from 'react'
import { useLocation } from 'react-router-dom'
import MediaCard from '../components/Card';

const Productdetail = () => {
  const location = useLocation();
  const carDetail = location.state?.cardetail;
  console.log(carDetail);


  return (
    <>
    <div>productdetail</div>
    <div className='d-flex justify-content-evenly mt-4'>
        
           <MediaCard  src={carDetail.image} amount={carDetail.price} description={carDetail.description} showbutton={false}  />
          
          
          
          
      
      </div>
        </>
  )
}

export default Productdetail