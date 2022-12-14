import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Country = () => {
  let { id } = useParams()
  let navigate = useNavigate()
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getCountry = async () => {
      const response = await axios.get(
        `https://xibalba-backend.herokuapp.com/countries/${id}`
      )
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
      <h1>Caves</h1>
      <div className="countries">
        {country
          ? country.Caves.map((cave) => (
              <h2
                onClick={() => {
                  viewCave(cave.id)
                }}
              >
                <h3> {cave.name}</h3>
                <h4> Located : {cave.location}</h4>
                <img src={cave.imageTwo} width="200" />
              </h2>
            ))
          : null}
      </div>
      <h1> Underwater Caves</h1>
      <div className="countries">
        {country
          ? country.Underwaters.map((cave) => (
              <h2
                onClick={() => {
                  viewUnderwater(cave.id)
                }}
              >
                <h3>{cave.name}</h3>
                <h4> Located : {cave.location}</h4>
                <img src={cave.imageTwo} width="200" />
              </h2>
            ))
          : null}
      </div>
    </div>
  )
}

export default Country
