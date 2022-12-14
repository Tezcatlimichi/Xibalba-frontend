import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Countries = () => {
  let navigate = useNavigate()
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const getCountries = async () => {
      const response = await axios.get(
        `https://xibalba-backend.herokuapp.com/countries`
      )
      setCountries(response.data)
    }
    getCountries()
  }, [])

  const viewCountry = (id) => {
    navigate(`/countries/${id}`)
  }

  return (
    <div className="countries">
      {countries.map((country) => (
        <div
          onClick={() => {
            viewCountry(country.id)
          }}
        >
          <div className={country.id}>
            <h1>{country.name}</h1>
            <img src={country.image} width="200" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Countries
