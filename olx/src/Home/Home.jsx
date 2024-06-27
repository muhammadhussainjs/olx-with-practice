import React, { useState } from 'react'
import photos from '../asset/photo.webp'
import mobile from '../asset/mobile1.jpeg'
import car1 from '../asset/car1.jpeg'
import car2 from '../asset/car2.jpeg'
import car3 from '../asset/car3.jpeg'
import MediaCard from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [phones, setPhones] = useState([
    {
      image: mobile,
      price: 5000,
      description: "This is the best mobile This is the best mobile This is the best mobile This is the best mobile This is the best mobile"
    },
    {
      image: mobile,
      price: 10000,
      description: "This is the best mobile This is the best mobile This is the best mobile This is the best mobile This is the best mobile"
    },
    {
      image: mobile,
      price: 20000,
      description: "This is the best mobile This is the best mobile This is the best mobile This is the best mobile This is the best mobile"
    },
  ])

  const [cardetail , setCardetail] = useState('')
  

  const [cars, setCars] = useState([
    {
      image: car1,
      price: 1000000,
      description: "This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars"
    },
    {
      image: car2,
      price: 2000000,
      description: "This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars"
    },
    {
      image: car3,
      price: 3000000,
      description: "This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars This is the best cars"
    },
  ])

  function gotocarDetail(item) {
   setCardetail(item)
   navigate('productdetail' , {state: {cardetail: item}})
  }
  function gotophoneDetail(item) {
   setCardetail(item)
   navigate('pHONEdetail' , {state: {phonedetail: item}})
  }
  return (
    <>
      <div className=' text-center  fw-bold fs-1 text-dark xlarger-font my-2'>OLX</div>
      <div>
        <img src={photos} alt=""  className='w-100'/>
      </div>
      <div className='mt-4 fw-semibold fs-3 text-dark xlarger-font'> 
        MOBILE PHONES
      </div>
      
      <div className='d-flex justify-content-evenly mt-4'>
        {phones.map((item, index) => {
        return  <MediaCard key={index} src={item.image} amount={item.price} description={item.description} onClick={()=> gotophoneDetail(item)} showminus={false} showplus={false}
         showone={false} />
      
            

          
      }) }
      </div>

      <div className='mt-4 fw-semibold fs-3 text-dark xlarger-font'>
        CARS
      </div>

      <div className='d-flex justify-content-evenly mt-4 mb-3' >
        {cars.map((item, index) => {
        return  <MediaCard key={index} src={item.image} price={item.price} description={item.description} onClick={()=> gotocarDetail(item)} showminus={false} showplus={false} showone={false} />
  }) }

  
      </div>
        
        </>
      )
}

export default Home