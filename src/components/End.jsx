import React from 'react'
import "../assets/components/End.css"
const End = () => {
  return (
    <div>

    <div className='end'>
        <div>
            <p>1% OF THE INDUSTRY</p>
            <h1>Welcome to your new digital reality. Now.</h1>
        </div>
        <div className='input'>
            <input placeholder='Enter Your Email' type="text" name="" id="" />
            <button>Submit</button>
        </div>
        <div className='info'>
            <p>Instant results</p>
            <p>User-friendly interface</p>
            <p>Personalized customization</p>
        </div>
    </div>
    <div style={{"overflow-x" : "hidden"}} >

    <img src="/Content.png" alt="" />
    </div>
    </div>
  )
}

export default End