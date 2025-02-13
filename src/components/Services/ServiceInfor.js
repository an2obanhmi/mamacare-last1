// ServiceInfor.js
import React from 'react';
import './ServiceInfor.css';

const servicesData = {
  'baby-care': {
    name: 'Chăm Sóc Bé Tại Nhà',
    description: 'Hãy để bé khỏe mạnh – Thông minh – Phát triển toàn diện ngay từ những năm tháng đầu đời.',
    challenges: [
      'Cơ thể mẹ còn rất yếu, đi lại khó khăn.',
      'Mẹ chưa có nhiều kinh nghiệm trong việc chăm sóc trẻ sơ sinh.',
      'Con yêu còn quá nhỏ, rốn chưa rụng.',
    ],
    benefits: [
      'Thư giãn và thoải mái',
      'Giảm căng thẳng',
      'Phát triển toàn diện',
      'Tăng cường sức đề kháng',
      'Tăng sự gắn kết mẹ và bé',
    ],
    mediaRecognition: 'Home Care đã nhận được sự quan tâm của nhiều báo chí nổi tiếng như Báo Sức Khỏe Đời Sống, Báo Dân Trí, và nhiều hơn nữa.'
  },
  'postpartum-care': {
    name: 'Chăm sóc sau sinh',
    description: 'Sau sinh, sức khỏe của mẹ thay đổi nhanh chóng. Mẹ phải đối mặt với nhiều thay đổi về sức khỏe và ngoại hình.',
    challenges: [
      'Thay đổi nội tiết tố khiến mẹ dễ gặp tình trạng stress.',
      'Thời gian hồi phục sau sinh có thể kéo dài.',
      'Mẹ cần hỗ trợ trong việc chăm sóc bản thân và bé yêu.',
    ],
    benefits: [
      'Hỗ trợ quá trình hồi phục sức khỏe cho mẹ.',
      'Giúp mẹ thư giãn, giảm đau sau sinh.',
      'Tăng cường sức khỏe tinh thần và thể chất.',
    ],
    mediaRecognition: 'Dịch vụ chăm sóc sau sinh của Home Care được nhiều bà mẹ tin tưởng và lựa chọn.'
  },
  'pregnancy-care': {
    name: 'Chăm sóc mẹ bầu',
    description: 'Mang thai là giai đoạn nhạy cảm, tinh thần mẹ bầu ảnh hưởng lớn đến sự phát triển của thai nhi.',
    challenges: [
      'Mẹ bầu thường gặp khó khăn trong việc giữ tinh thần lạc quan.',
      'Cơ thể mẹ bầu thay đổi, dễ gặp tình trạng mệt mỏi.',
    ],
    benefits: [
      'Giảm stress và lo lắng trong thai kỳ.',
      'Giúp mẹ bầu giữ tinh thần thoải mái.',
      'Hỗ trợ sức khỏe cho cả mẹ và bé.',
    ],
    mediaRecognition: 'Dịch vụ chăm sóc mẹ bầu của Home Care giúp mẹ và bé an toàn, khỏe mạnh trong suốt thai kỳ.'
  },
  'milk-duct-treatment': {
    name: 'Chữa tia tắc sữa',
    description: 'Sữa mẹ là nguồn dinh dưỡng tốt nhất cho trẻ sơ sinh và trẻ nhỏ. Nuôi con bằng sữa mẹ là một lựa chọn tuyệt vời.',
    challenges: [
      'Mẹ gặp khó khăn với tình trạng tắc tia sữa gây đau và khó chịu.',
      'Không đủ nguồn sữa cho bé do tắc tia sữa.',
    ],
    benefits: [
      'Giải quyết tình trạng tắc tia sữa nhanh chóng.',
      'Giảm đau và khó chịu cho mẹ.',
      'Giúp bé nhận đủ dinh dưỡng từ sữa mẹ.',
    ],
    mediaRecognition: 'Dịch vụ chữa tia tắc sữa của Home Care được báo chí đánh giá cao vì tính hiệu quả và sự an toàn cho mẹ và bé.'
  }
  // Other services...
};

const pricingData = [
  {
    title: "Gói Lẻ",
    description: "Gói dịch vụ cơ bản tập trung vào chăm sóc sức khỏe hàng ngày cho mẹ sau sinh với các dịch vụ thiết yếu.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé."
    ],
    duration: "2 giờ",
    sessions: "1 buổi",
    price: "300,000 VND"
  },
  {
    title: "Gói Cơ Bản: “Mẹ Tròn Con Vuông”",
    description: "Gói dịch vụ cơ bản tập trung vào chăm sóc sức khỏe hàng ngày cho mẹ sau sinh với các dịch vụ thiết yếu.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé."
    ],
    duration: "2 giờ/buổi",
    sessions: "12 buổi",
    price: "2,000,000 VND"
  },
  {
    title: "Gói Nâng Cao: “Hồi Phục Toàn Diện”",
    description: "Gói nâng cao với các liệu pháp chăm sóc sức khỏe toàn diện, tập trung vào việc phục hồi thể chất và tinh thần cho mẹ sau sinh.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé.",
      "Ủ muối bụng",
      "Mát xa vùng thông tia sữa."
    ],
    duration: "2 giờ/buổi",
    sessions: "20 buổi",
    price: "4,000,000 VND"
  },
  {
    title: "Gói Cao Cấp: “Chăm Sóc Vàng”",
    description: "Dịch vụ chăm sóc chuyên sâu, bao gồm các liệu pháp thảo dược và trị liệu vật lý, giúp mẹ phục hồi nhanh chóng và khỏe mạnh.",
    services: [
      "Massage nhẹ nhàng hỗ trợ lưu thông máu.",
      "Vệ sinh cá nhân và chăm sóc vết mổ.",
      "Chăm sóc vệ sinh rốn, tai, mũi, miệng cho bé.",
      "Ủ muối bụng",
      "Mát xa vùng thông tia sữa",
      "Xông hơi vùng kín, xông hơi toàn thân bằng thảo dược."
    ],
    duration: "3 giờ/buổi",
    sessions: "25 buổi",
    price: "6,000,000 VND"
  }
  // Additional packages...
];

const ServiceInfor = ({ typeService }) => {
  const service = servicesData[typeService];

  if (!service) {
    return <div className="service-not-found">Service not found</div>;
  }

  return (
    <div className="service-info">
      <h1 className="service-title">{service.name}</h1>
      <p className="service-description">{service.description}</p>

      <div className="service-section">
        <h2 className="section-title">Những trở ngại mẹ có thể gặp</h2>
        <ul className="service-list">
          {service.challenges.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2 className="section-title">Lợi ích</h2>
        <ul className="service-list">
          {service.benefits.map((item, index) => (
            <li key={index} className="list-item">{item}</li>
          ))}
        </ul>
      </div>

      <div className="service-section">
        <h2 className="section-title">Báo chí nói về chúng tôi</h2>
        <p className="media-recognition">{service.mediaRecognition}</p>
      </div>

      {/* Pricing Table */}
      <div className="service-section pricing-table-section">
        <h2 className="section-title">Bảng giá dịch vụ</h2>
        <table className="pricing-table">
          <thead>
            <tr>
              <th>Gói</th>
              <th>Mô tả</th>
              <th>Dịch vụ</th>
              <th>Thời gian</th>
              <th>Số buổi</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {pricingData.map((row, index) => (
              <tr key={index}>
                <td>{row.package}</td>
                <td>{row.description}</td>
                <td>
                  <ul>
                    {row.services.map((service, idx) => (
                      <li key={idx}>{service}</li>
                    ))}
                  </ul>
                </td>
                <td>{row.duration}</td>
                <td>{row.sessions}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceInfor;
