import axios from 'axios'
import { useState } from 'react'

const Form = (props)=>{
let initialState = {
  name: '',
  location: '',
  details: '',
  image: '',
  countryId: '',
  profileId:1
}


  const [form, setForm] = useState(initialState)

const handleUpdate = async (event)=>{
  event.preventDefault()
  await axios.put(`http://localhost:3001/caves/${props.caveInfo.caveId}`, form)
  props.setFormToggle(false)

}
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
      // countryId: parseInt(event.target.value)
    })
  }



  return(
    <div>
      <form onSubmit={handleUpdate}>
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
  )
}
export default Form