import React from 'react'
import Logo from '../Images/Logos/Logos.png'
import {Link} from 'react-router-dom'



const NavBar = () => {
  return (
    <>
       <div className="section">
        <div className="container">
            <div className="navbar">
                <Link to='/'>
                    <img src={Logo} alt="" />
                
                </Link>
            </div>
        </div>
       </div>

    </>
  );
}

export default NavBar
