import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'


export default function Nav() {
  return (
    <div className='navbar'>
     <ul className='list'>
         <Link to={'/'} className='list_item'>Home</Link>
         <Link to={'/discover'} className='list_item'>Discover</Link>
         <Link to={'/marketplace'} className='list_item'>Marketplace</Link>
     </ul>
    </div>
  )
}
