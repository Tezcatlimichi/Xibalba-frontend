import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const AnimalDetails = () => {
  let { id } = useParams()

  const [animal, setAnimal] = useState([])

  useEffect(() => {
    const getAnimal = async () => {
      const response = await axios.get(`http://localhost:3001/fuana/${id}`)
      setAnimal(response.data)
    }
    getAnimal()
  }, [])

  return (
    <div>
      <h1>Animal of the year</h1>
      <h1> {animal.commonName}</h1>
    </div>
  )
}

export default AnimalDetails
