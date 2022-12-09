import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Country = () => {
  let { id } = useParams()
  const [country, setCountry] = useState('')

  useEffect(() => {
    const getCountry = async () => {
      const response = await axios.get(`http://localhost:3001/countries/${id}`)
      setCountry(response.data)
      console.log(' response data caves', response.data.Caves)
      console.log('state caves', country.Caves)
      console.log('underwater caves', country.Underwaters)
    }
    getCountry()
  }, [])
  return (
    <div>
      <h1>{country.name}</h1>
      <h1>Underwater Caves</h1>
      {country ? country.Caves.map((cave) => <h2>{cave.name}</h2>) : null}
      <h1>Caves</h1>
    </div>
  )
}

export default Country
