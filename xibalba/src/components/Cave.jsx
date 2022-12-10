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
      const response = await axios.get(`http://localhost:3001/countries/${id}/cave/${caveId}`)
      setData(response.data.Caves[0])
    }
    getData()
  }, [])





  return(
    <div>
<h1>Individual Cave</h1>
<h2>{data.name}</h2>
<h3>Location: {data.location}</h3>
    </div>

  )
  
}

export default Cave