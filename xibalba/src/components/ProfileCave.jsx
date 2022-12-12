import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const ProfileCave = (props)=>{
  const [formToggle, setFormToggle] = useState()

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/caves/${props.caveId}`)
  }
  return(
    <div>
      <h3>Cave name: {props.caveName}</h3>
      <h3>{props.caveId}</h3>
      <button id='delete-button' onClick={handleDelete} className="delete-button">Delete Cave</button>
      <button id='update-button' type="button" onClick={() => setFormToggle(true)}>
        Update Cave
      </button>
      {formToggle && (
        <Form caveInfo={props}
        setFormToggle={setFormToggle}/>
      )
      }
    </div  >
  )
}


export default ProfileCave