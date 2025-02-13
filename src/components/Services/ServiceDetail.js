// ServiceDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceInfor from './ServiceInfor';
import ServiceForm from './ServiceForm';
import './ServiceDetail.css';


const ServiceDetail = () => {
  const { typeService } = useParams();

  return (
    
    
    <div className="service-detail-container">
      
      <ServiceInfor typeService={typeService} />
      
      <ServiceForm />
    </div>
  );
};

export default ServiceDetail;
