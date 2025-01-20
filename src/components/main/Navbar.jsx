import React from 'react'
import "../../assets/components/Navbar.css"
const Navbar = () => {
  return (
    <div>
        
        <div className='top-nav'>
            <p>www.registerkaro.in</p>
            <p>+91 8447746183</p>
            
        </div>
        <div className='main-nav'>
            <img className='logo' src="/fullLogo.jpg" alt="logo" />
            <div className='right-nav'>

            <p>Home</p>
            <p>Our Service</p>
            <p>Blog</p>
            <p>Contact Us</p>
            <img src="/search.png" alt="search" />
            <button>Talk An Expert</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar