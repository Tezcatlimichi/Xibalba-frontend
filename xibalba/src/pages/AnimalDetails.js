import { useState, useEffect } from 'react'
import axios from 'axios'
import { createRoutesFromChildren, useParams } from 'react-router-dom'

const AnimalDetails = () => {
  let { id } = useParams()

  const [animal, setAnimal] = useState([])

  useEffect(() => {
    const getAnimal = async () => {
      const response = await axios.get(
        ` https://xibalba-backend.herokuapp.com/fuana/${id}`
      )
      setAnimal(response.data)
    }
    getAnimal()
  }, [])

  return (
    <div>
      <h1>{animal.year} Animal of the Year!</h1>
      <h2> Common Name: {animal.commonName}</h2>
      <h2>Scientific Name: {animal.scientificName}</h2>
      <img src={animal.image} className="circular-image" />
      <h2>Who are they? : {animal.whoTheyAre}</h2>
      <h2>Where to find?: {animal.whereToFind}</h2>
      <h2>Protecting Them: {animal.protect}</h2>
    </div>
  )
}

export default AnimalDetails
