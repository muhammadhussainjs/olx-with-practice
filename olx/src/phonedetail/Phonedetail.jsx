import React from 'react'
import { useLocation } from 'react-router-dom'
import MediaCard from '../components/Card';

const Phonedetail = () => {
  const location = useLocation();
  const phoneDetail = location.state?.phonedetail;
  console.log(phoneDetail);


  return (
    <>
    <div>productdetail</div>
    <div className='d-flex justify-content-evenly mt-4'>
        
           <MediaCard  src={phoneDetail.image} amount={phoneDetail.price} description={phoneDetail.description}  />
          
          
          
          
      
      </div>
        </>
  )
}

export default Phonedetail