
import axios from 'axios'

const ProfileCave = (props)=>{

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/caves/${props.caveId}`)
  }
  return(
    <div>
      <h3>Cave name: {props.caveName}</h3>
      <button id='delete-button' onClick={handleDelete} className="delete-button">Delete Cave</button>
    </div>
  )
}


export default ProfileCave