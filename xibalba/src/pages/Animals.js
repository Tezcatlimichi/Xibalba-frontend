import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Animals = () => {
  let navigate = useNavigate()
  const [fuana, setFuana] = useState([])

  useEffect(() => {
    const getFuana = async () => {
      const response = await axios.get(`http://localhost:3001/fuana`)
      setFuana(response.data)
    }
    getFuana()
  }, [])

  const viewAnimal = (id) => {
    navigate(`/animals/${id}`)
  }

  return (
    <div>
      <h1>Animals</h1>
      {fuana
        ? fuana.map((creature) => (
            <div
              onClick={() => {
                viewAnimal(creature.id)
              }}
            >
              <h2>{creature.commonName}</h2>
            </div>
          ))
        : null}
    </div>
  )
}

export default Animals
