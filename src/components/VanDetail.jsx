
import { useParams } from 'react-router'
import React, { useState, useEffect } from 'react'

function VanDetail() {
    const [values,setValues] = useState([])
    const params = useParams()

  useEffect(()=> {
    fetch(`/api/vans/${params.id}`)
    .then(res => res.json())
    .then(data => setValues(data.vans))
    
  },[params.id])
  
 

  return (
    <div className='vanDetails'>
    <h1 className='vanDetails__h1'>Description</h1>
    <img src={values.imageUrl} className='vanDetail__img'/>
    <p className='vanDetail__type'>{values.type}</p>
    <p className='vanDetails__description'>{values.description}  </p>
    </div>
  )
}

export default VanDetail