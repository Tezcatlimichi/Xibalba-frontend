import { Link} from 'react-router-dom'



const Nav = ()=>{
  return(
    <div>

<div className='pyramid' >
      <div className='pyramid_section'>
      <Link className="link"to="/">Home</Link>
      </div>
      <div className='pyramid_section'>
    
      <Link className="link" to="/caves/profile/1">Profile</Link>
      </div> 
      <div className='pyramid_section'>

      <Link  className="link" to="/countries">Explore</Link>
      </div>
      </div>
      
      
    </div>

  )
}

export default Nav