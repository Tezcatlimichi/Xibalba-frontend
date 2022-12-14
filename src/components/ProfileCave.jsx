import { useState } from 'react'
import axios from 'axios'
import Form from './Form'

const ProfileCave = (props)=>{
  const [formToggle, setFormToggle] = useState()

  const handleDelete = async () => {
    await axios.delete(`https://xibalba-backend.herokuapp.com/caves/${props.caveId}`)
  }
  return(
    <div id='ticket-content'>
      <h3>Cave name: {props.caveName}</h3>
      <div className='ticket-buttons'>
      <button id='delete-button' onClick={handleDelete} className="delete-button">Delete Cave</button>
      <button id='update-button' type="button" onClick={() => setFormToggle(true)}>
        Update Cave
      </button>
      </div>
      {formToggle && (
        <Form caveInfo={props}
        setFormToggle={setFormToggle}/>
      )
      }
    </div  >
  )
}


export default ProfileCave