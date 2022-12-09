import { Link, useNavigate } from 'react-router-dom'



const Nav = ()=>{
  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/countries">Countries</Link>
      <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Nav