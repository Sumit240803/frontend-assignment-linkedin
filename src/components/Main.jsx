import React from 'react'
import Navbar from './main/Navbar'
import Hero from './main/Hero'
import Footer from './main/Footer'
import Services from './Services'
import About from './About'
import WhyRegisterKaro from './WhyRegisterKaro'
import IntroVide from './IntroVide'
import Clients from './Clients'
import Explore from './Explore'
import Reviews from './Reviews'
import Faq from './FAQ'
import Download from './Download'
import End from './End'
import EndFooter from './Footer'

const Main = () => {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
            <Hero/>
        </div>
        <div>
            <Footer/>
        </div>
        <div>
            <Services/>
        </div>
        <div>
            <About/>
        </div>
        <div>
            <WhyRegisterKaro/>
        </div>
        <div>
            <IntroVide/>
        </div>
        <div>
            <Clients/>
        </div>
        <div>
            <Explore/>
        </div>
        <div>
            <Reviews/>
        </div>
        <div>
        <Faq/>
        </div>
        <div>
            <Download/>
        </div>
        
        <div>
            <End/>
        </div>
        <div>
            <EndFooter/>
        </div>
    </div>
  )
}

export default Main