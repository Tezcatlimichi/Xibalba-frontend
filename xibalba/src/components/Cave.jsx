import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'

const Cave =()=>{
  let { id } = useParams()
  let {caveId} = useParams()

  const [data, setData] = useState('')


useEffect(() => {
    const getData = async () => {
      const response = await axios.get(` https://xibalba-backend.herokuapp.com/countries/${id}/cave/${caveId}`)
      setData(response.data.Caves[0])
    }
    getData()
  }, [])





  return(
    <div>

<h1>{data.name}</h1>
<h3>Location: {data.location}</h3>
<h3>{data.details}</h3>
<div className='cave-images'>
<img src={data.imageOne} width="200"/>
<img src={data.imageTwo} width="200"/>
<img src={data.imageThree} width="200"/>
</div>
    </div>

  )
  
}

export default Cave