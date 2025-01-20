import React from 'react';
import "../assets/components/Explore.css"
const Explore = () => {
  const cards = [
    {
      "author": "Prabhash Mishra",
      "date": "1 Jan 2023 - Today",
      "title": "Small business & Startup",
      "description": "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      "tags": ["Tax & Audit", "Management"],
      "img": "/card1.png"
    },
    {
      "author": "Mahesh Kumar",
      "date": "1 Jan 2023",
      "title": "Scale-Up Company Offer",
      "description": "Mental models are simple expressions of complex processes or relationships.",
      "tags": ["Tax", "Research", "Compliance"],
      "img": "/card2.png"
    },
    {
      "author": "Rakhi Verma",
      "date": "1 Jan 2023",
      "title": "Growing Business Package",
      "description": "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
      "tags": ["Audit", "Money Back"],
      "img": "/card3.png"
    },
    {
      "author": "Karan Kumar",
      "date": "1 Jan 2023",
      "title": "Scale-Up Company Offer",
      "description": "Collaboration can make our teams stronger, and our individual designs better.",
      "tags": ["Money", "Management"],
      "img": "/card4.png"
    },
    {
      "author": "Richa Singh",
      "date": "1 Jan 2023",
      "title": "Scale-Up Company Offer",
      "description": "JavaScript frameworks make development easy with extensive features and functionalities.",
      "tags": ["Tax Return", "News", "Audit"],
      "img": "/card5.png"
    },
    {
      "author": "Miss Nora",
      "date": "1 Jan 2023",
      "title": "Scale-Up Company Offer",
      "description": "Starting a community doesn’t need to be complicated, but how do you get started?",
      "tags": ["Private Limited Company", "Customer Success"],
      "img": "/card6.png"
    }
  ];

  return (
    <div>
      <div className='explore-heading'>
        <p>EXPLORE OUR BLOGS</p>
        <h2>Accelerate Digital Transformation</h2>
      </div>
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.img} alt={card.title} className="card-img" />
            <p className='author'>
              {card.author} {card.date}
            </p>
            <h3 className='card-title'>{card.title}</h3>
            <p className='card-desc'>{card.description}</p>
            <div className="tags">
              {card.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      <button className='show'>Show more blogs</button>
      </div>
    </div>
  );
};

export default Explore;
