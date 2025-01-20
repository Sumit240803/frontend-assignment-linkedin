import React from 'react'
import "../assets/components/Reviews.css"
const Reviews = () => {
  return (
    <div className='reviews'>
        <div className='reviews-heading'>
            <h1>What peoples says about us </h1>
            <div className='arrows'>
                <div className='prev'> {'<'}</div>
                <div className='next'>{'>'} </div>
            </div>
        </div>
        <div className='people-reviews'>

        <div className='people-card'>
            <div className='review-one'>

            <div className='top'>
                <img src="/quotes.png" alt="" />
                <img src="/Star.png" alt="" />
            </div>
            <div className='review-text'><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p></div>
            <div className='people'>
                <div><img src="/chris.png" alt="" /></div>
                <div>
                    <h4>Chris</h4>
                    <p>President and CEO</p>
                </div>
            </div>
            </div>
        </div>
        <div className='people-card'>
            <div className='review-one'>

            <div className='top'>
                <img src="/quotes.png" alt="" />
                <img src="/Star.png" alt="" />
            </div>
            <div className='review-text'><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident </p></div>
            <div className='people'>
                <div><img src="/chris.png" alt="" /></div>
                <div>
                    <h4>Chris</h4>
                    <p>President and CEO</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Reviews