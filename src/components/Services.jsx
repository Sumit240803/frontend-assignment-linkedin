// Import React
import React from 'react';
import "../assets/components/Services.css" // Import CSS file for styling

const Services = () => {
  const services = [
    {
      title: 'Company Formation',
      description: 'Build web-based solutions that enhance customer experience.',
      icon: '/vector.svg fill.png', // Replace with proper icons/images
    },
    {
      title: 'Company Secretarial Services',
      description: 'Make data-driven decisions and utilize technology to reach business goals.',
      icon: '/logo3.png',
    },
    {
      title: 'Virtual Office Address',
      description: 'Foster customer relationships by effectively serving your market.',
      icon: '/logo5.png',
    },
    {
      title: 'Annual Compliance Services',
      description: 'Turn your ideas into modern products with our design experts.',
      icon: '/logo4.png',
    },
    {
      title: 'Payroll Services',
      description: 'Expand your business across the globe with minimal effort.',
      icon: '/logo6.png',
    },
    {
      title: 'Bookkeeping Services',
      description: 'Steering user behaviours with creative design, data insights & technology.',
      icon: '/logo7.png',
    },
  ];

  return (
    <div className="services-container">
      <h1 className="heading">Explore Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img className="icon" src={service.icon}></img>
            <h2 className='service-title'>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#" className="learn-more">Learn more &rarr;</a>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All Services</button>
    </div>
  );
};

export default Services;
