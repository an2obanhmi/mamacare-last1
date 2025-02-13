import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceList.css';  // Ensure you create this CSS file for styling

const ServiceList = ({ services }) => {
  return (
    <div className="services-section">
      <h2 className="section-title">Dịch vụ của MamaCare</h2>
      <div className="services-items">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <Link to={`/service/${service.type}`}>
              <img src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
