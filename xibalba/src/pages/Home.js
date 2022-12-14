import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let navigate = useNavigate()
  const [animalOfYear, setAnimalOfYear] = useState('')
  useEffect(() => {
    const getFuana = async () => {
      const response = await axios.get(
        `https://xibalba-backend.herokuapp.com/fuana`
      )

      setAnimalOfYear(response.data[0])
      console.log()
    }
    getFuana()
  }, [])

  const viewAnimals = () => {
    navigate(`/animals`)
  }

  return (
    <div>
      <p className="intro">
        Xibalba is the name of the underworld in Maya mythology. The entrance to
        Xibalba was traditionally held to be a cave in the vicinity of Cobán,
        Guatemala. Here you can discover the many entrances to the underworld
        and document your own explorations!
      </p>
      <div
        className="animal-of-the-year"
        onClick={() => {
          viewAnimals()
        }}
      >
        <h3>2022 Animal of the year</h3>

        <img
          className="circular-image"
          src={animalOfYear.image}
          alt={animalOfYear.name}
        />
      </div>
    </div>
  )
}

export default Home
