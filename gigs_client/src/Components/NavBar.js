import React from 'react';
import './CSS/NavBar.css'
function NavBar() {
  return( 
  <div className='NavBar'>
    <p className='NavBar-title'>Gigs</p>
    <div className='NavBar-routes'>
    <button id='find-gigs-button' className='NavBar-buttons'>Find Gigs</button>
    <button id='profile-button' className='NavBar-buttons'>Profile</button>
    </div>




  </div>);
}

export default NavBar;
