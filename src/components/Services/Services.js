import React from 'react';
import { Link } from 'react-router-dom';  // Assuming you're using React Router for navigation
import './Services.css';

const Services = () => {
  const services = [
    {
      name: 'Chăm Sóc Bé Tại Nhà',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service1.png',
      description: 'Hãy để bé khỏe mạnh – Thông minh – Phát triển toàn diện ngay từ những năm tháng đầu đời.',
      type: 'baby-care'
    },
    {
      name: 'Chăm sóc sau sinh',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service2.png',
      description: 'Sau sinh, sức khỏe của mẹ thay đổi nhanh chóng. Mẹ phải đối mặt với nhiều thay đổi.',
      type: 'postpartum-care'
    },
    {
      name: 'Chăm sóc mẹ bầu',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service3.png',
      description: 'Mang thai là giai đoạn nhạy cảm, tinh thần mẹ bầu ảnh hưởng lớn đến sự phát triển của thai nhi.',
      type: 'pregnancy-care'
    },
    {
      name: 'Chữa tia tắc sữa',
      image: 'https://homecaresausinh.com/wp-content/uploads/2024/06/img_service4.png',
      description: 'Sữa mẹ là nguồn dinh dưỡng tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Nuôi con bằng sữa mẹ là một lựa chọn tuyệt vời.',
      type: 'milk-duct-treatment'
    },
  ];

  return (
    <div className="services-page">
      {/* Service List Section */}
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
    </div>
  );
};

export default Services;
