import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Countries = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(`http://localhost:3001/countries`)
      setCountries(response.data)
    }
    getCountries()
  }, [])
  return (
    <div>
      {countries.map((country) => (
        <h1>{country.name}</h1>
      ))}
    </div>
  )
}

export default Countries
