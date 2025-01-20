import React from 'react'
import "../assets/components/Intro.css"
const IntroVide = () => {
  return (
    <div className='vid-component'>
        <div className='heading'>
            <div className='main-heading-section'>

            <h1>Our Video Introductions</h1>
            <p>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.</p>
            </div>
            <div>
                <div className='vid-main-section-1'>

                <div>
                    <img className='icon-img' src="/icon1.png" alt="" />
                </div>
                <div className='main-section-info'>
                    <h3>Explore ideas together</h3>
                    <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
                </div>
                <div className='vid-main-section-1'>

                <div>
                    <img className='icon-img' src="/icon1.png" alt="" />
                </div>
                <div className='main-section-info'>
                    <h3>Explore ideas together</h3>
                    <p>Engage audience segments and finally create actionable insights. Amplify vertical integration.</p>
                </div>
                </div>
            </div>
        </div>
        <div className='vid-section'>
            <img className='vid-img' src="/vid-image.png" alt="" />
        </div>
    </div>
  )
}

export default IntroVide