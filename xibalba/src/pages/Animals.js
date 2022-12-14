import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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

  function update(e) {
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY

    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
  }

  document.addEventListener('mousemove', update)
  document.addEventListener('touchmove', update)

  return (
    <div>
      {fuana
        ? fuana.map((creature) => (
            <div
              className="animals-container"
              onClick={() => {
                viewAnimal(creature.id)
              }}
            >
              <div>
                <h2>{creature.year} Animal of the Year!</h2>
                <img src={creature.drawing} width="200" />
                <h3>{creature.commonName}</h3>
              </div>
            </div>
          ))
        : null}
    </div>
  )
}

export default Animals
