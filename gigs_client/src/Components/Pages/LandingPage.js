import React from 'react';
import '../CSS/LandingPage.css'
import {Link} from 'react-router-dom'

function LandingPage() {
  return (
  <div className='landingPageContainer'>
    <div className='LandingPage'>
        <h1> Gigs </h1>
        <h3> Small Dreams, <h3 style={{color:'#9A8C98'}}>Big</h3> Steps</h3>

        <h4>
          <Link className='join-us' style={{textDecoration:'None'}} to="/welcome-page">
          Join us now
          </Link>
          </h4>

    </div>
  </div>)
}

export default LandingPage;
