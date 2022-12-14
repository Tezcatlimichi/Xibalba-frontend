import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

const Underwater =()=>{
  let { id } = useParams()
  let {caveId} = useParams()

  const [data, setData] = useState('')


useEffect(() => {
    const getData = async () => {
      const response = await axios.get(` https://xibalba-backend.herokuapp.com/countries/${id}/underwater/${caveId}`)
      setData(response.data.Underwaters[0])
    
    }
    getData()
  }, [])





  return(
    <div>
<h1>Individual Cave</h1>
<h2>{data.name}</h2>
<h3>Location: {data.location}</h3>
<h3>{data.details}</h3>
<div className='cave-images'>
<img src={data.imageOne} width="300"/>
<img src={data.imageTwo} width="300"/>
<img src={data.imageThree} width="300"/>
</div>
    </div>

  )
  
}

export default Underwater