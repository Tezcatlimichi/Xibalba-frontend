import { useState, useEffect } from 'react'
import axios from 'axios'
import ProfileCave from '../components/ProfileCave'

const Profile = () => {
  const initialState = {
    name: '',
    location: '',
    details: '',
    image: '',
    countryId: '',
    profileId: 1
  }

  const [form, setForm] = useState(initialState)
  // const [update, setUpdate] = useState
  const [caves, setCaves] = useState([])

  useEffect(() => {
    const getCaves = async () => {
      const response = await axios.get(`http://localhost:3001/caves/profile/1`)
      setCaves(response.data)
      console.log(response.data)
    }
    getCaves()
  }, [])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
      countryId: parseInt(event.target.value)
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addCave = await axios.post(`http://localhost:3001/caves`, form)
    setForm(initialState)
  }

  const updateCave = async (event) => {
    event.preventDefault()
    let updatedCave = await axios.put(`http://localhost:3001/caves/`)
  }

  return (
    <div>
      <h2>Add your explorations here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cave_name">Name</label>
          <input
            type="text"
            id="name"
            defaultValue={form.name}
            onChange={handleChange}
          />
          <label htmlFor="cave_location">Location</label>
          <input
            type="text"
            id="location"
            defaultValue={form.location}
            onChange={handleChange}
          />
          <label htmlFor="cave_details">Details</label>
          <input
            type="text"
            id="details"
            defaultValue={form.details}
            onChange={handleChange}
          />
          <label htmlFor="cave_image">Image</label>
          <input
            type="text"
            id="image"
            defaultValue={form.image}
            onChange={handleChange}
          />
          <label htmlFor="country" type="number">
            Country
          </label>
          <select
            id="countryId"
            defaultValue={form.countryId}
            onChange={handleChange}
          >
            <option value="1">United States</option>
            <option value="2">Mexico</option>
            <option value="3">Guatemala</option>
            <option value="4">New Zealand</option>
            <option value="5">Scotland</option>
            <option value="6">Malaysia</option>
            <option value="7">Philippines</option>
          </select>
          <button type="submit">Send</button>
        </div>
      </form>
      <div>
        <h2>Update </h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="cave_name">Name</label>
            <input
              type="text"
              id="name"
              defaultValue={form.name}
              onChange={handleChange}
            />
            <label htmlFor="cave_location">Location</label>
            <input
              type="text"
              id="location"
              defaultValue={form.location}
              onChange={handleChange}
            />
            <label htmlFor="cave_details">Details</label>
            <input
              type="text"
              id="details"
              defaultValue={form.details}
              onChange={handleChange}
            />
            <label htmlFor="cave_image">Image</label>
            <input
              type="text"
              id="image"
              defaultValue={form.image}
              onChange={handleChange}
            />
            <label htmlFor="country" type="number">
              Country
            </label>
            <select
              id="countryId"
              defaultValue={form.countryId}
              onChange={handleChange}
            >
              <option value="1">United States</option>
              <option value="2">Mexico</option>
              <option value="3">Guatemala</option>
              <option value="4">New Zealand</option>
              <option value="5">Scotland</option>
              <option value="6">Malaysia</option>
              <option value="7">Philippines</option>
            </select>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>

      <div>
        <h1>Your caves</h1>
      </div>
      <div>
        <section>
          {caves
            ? caves.map((cave) => (
                <ProfileCave
                  caveId={cave.id}
                  caveName={cave.name}
                  caveLocation={cave.location}
                  caveDetails={cave.details}
                  caveImage={cave.image}
                  countryId={cave.countryId}
                />
              ))
            : null}
        </section>

        <h1>Your Underwater caves</h1>
      </div>
    </div>
  )
}

export default Profile
