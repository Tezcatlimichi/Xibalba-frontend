import { Link} from 'react-router-dom'



const Nav = ()=>{
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/caves/profile/1">Profile</Link>
    </div>
  )
}

export default Nav