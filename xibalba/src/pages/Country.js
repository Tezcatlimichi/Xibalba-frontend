import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Country = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getCountry = async () => {
      const response = await axios.get(`http://localhost:3001/countries/${id}`)
      setCountry(response.data)
    }
    getCountry()
  }, [])

  const viewCave = (caveId) => {
    navigate(`/countries/${id}/cave/${caveId}`)
  }
  const viewUnderwater = (underwaterId) => {
    navigate(`/countries/${id}/underwater/${underwaterId}`)
  }
  return (
    <div>
      <h1>{country.name}</h1>
      <div>
        <h1>Caves</h1>
        {country
          ? country.Caves.map((cave) => (
              <h2
                onClick={() => {
                  viewCave(cave.id)
                }}
              >
                {cave.name}
              </h2>
            ))
          : null}
      </div>
      <div>
        <h1> Underwater Caves</h1>
        {country
          ? country.Underwaters.map((cave) => (
              <h2
                onClick={() => {
                  viewUnderwater(cave.id)
                }}
              >
                {cave.name}
              </h2>
            ))
          : null}
      </div>
    </div>
  )
}

export default Country
