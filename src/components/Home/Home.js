import React from 'react';
import Slider from 'react-slick';
import './Home.css'; // CSS for the carousel
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import ServiceList from '../Services/ServiceList'; // Import ServiceList component
import ProductList from '../Product/ProductList';
import Infor from '../Infor/Infor';
function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  // Services data
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

  // Products data
  const products = [
    { id: 1, title: 'Lành Rốn Bon Bon Home Care', price: '115,000 đ', description: "Shampoo and shower gel for babies",imgSrc: "/assets/pro1.jpg"},
    { id: 2, title: 'Lành Rốn Bon Bon Home Care', price: '115,000 đ', description: "Shampoo and shower gel for babies",imgSrc: "/assets/pro1.jpg"},
    { id: 3, title: 'Lành Rốn Bon Bon Home Care', price: '115,000 đ', description: "Shampoo and shower gel for babies",imgSrc: "/assets/pro1.jpg"},
    { id: 4, title: 'Lành Rốn Bon Bon Home Care', price: '115,000 đ', description: "Shampoo and shower gel for babies",imgSrc: "/assets/pro1.jpg"},
  ];

  return (
    <div className="home">
      {/* Carousel section */}
      <Slider {...settings}>
        <div>
          <img
            src="https://homecaresausinh.com/wp-content/uploads/2024/06/4318bcd51129238dfb20cf444855bf2a.jpg"
            alt="Slide 1"
            className="carousel-image"
          />
        </div>
        <div>
          <img
            src="https://homecaresausinh.com/wp-content/uploads/2024/06/banner_service.jpg"
            alt="Slide 2"
            className="carousel-image"
          />
        </div>
      </Slider>

        {/* Reusing ServiceList Component */}
        <ServiceList services={services} />

      {/* Featured Products */}
      <div className="home-container">
        <h2 className="home-title">Sản phẩm nổi bật của Mama Care</h2>
        <ProductList products={products} />  {/* Use the reusable ProductList component */}
      </div>

     

    </div>
   
  );
}

export default Home;
