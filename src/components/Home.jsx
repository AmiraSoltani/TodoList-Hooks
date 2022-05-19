import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <ul>
       <Link to='/'> <li>Home</li></Link>
       <Link to='/about'> <li>About</li></Link>
       <Link to='/add'> <li>Add a new task</li></Link>

        </ul>
  )
}

export default Home