import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [animalOfYear, setAnimalOfYear] = useState('')
  useEffect(() => {
    const getFuana = async () => {
      const response = await axios.get(`http://localhost:3001/fuana`)

      setAnimalOfYear(response.data[0])
    }
    getFuana()
  }, [])

  const viewAnimals = () => {
    navigate(`/animals`)
  }

  return (
    <div>
      <h2>Home</h2>
      <h3>2022 Animal of the year</h3>
      <div
        onClick={() => {
          viewAnimals()
        }}
      >
        <h2>{animalOfYear.commonName}</h2>
        <h3>Scientific Name: {animalOfYear.scientificName}</h3>
      </div>
    </div>
  )
}

export default Home
