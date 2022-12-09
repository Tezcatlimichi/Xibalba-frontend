import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Countries = () => {
  let navigate = useNavigate()
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(`http://localhost:3001/countries`)
      setCountries(response.data)
    }
    getCountries()
  }, [])

  const viewCountry = (id) => {
    navigate(`/countries/${id}`)
  }

  return (
    <div>
      {countries.map((country) => (
        <div
          onClick={() => {
            viewCountry(country.id)
          }}
        >
          <h1>{country.name}</h1>
        </div>
      ))}
    </div>
  )
}

export default Countries
