import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Home = () => {
  // const [fuana, setFuana] = useState([])
  const [animalOfYear, setAnimalOfYear] = useState('')
  useEffect(() => {
    const getFuana = async () => {
      const response = await axios.get(`http://localhost:3001/fuana`)
      // setFuana(response.data)
      setAnimalOfYear(response.data[0])
    }
    getFuana()
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <h3>2022 Animal of the year</h3>
      <div>
        <h2>{animalOfYear.commonName}</h2>
        <h3>Scientific Name: {animalOfYear.scientificName}</h3>
      </div>
    </div>
  )
}

export default Home
