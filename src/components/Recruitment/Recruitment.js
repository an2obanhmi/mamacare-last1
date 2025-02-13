// Recruitment.js
import React from 'react';
import './Recruitment.css';

const Recruitment = () => {
  const jobListings = [
    {
      title: "Điều Dưỡng Full-Time",
      location: "Quy Nhơn",
      type: "Full-Time",
      salary: "18,000,000 VND - 24,000,000 VND",
      description: "Đang tìm điều dưỡng có kinh nghiệm để tham gia nhóm chăm sóc sức khỏe của chúng tôi nhằm cung cấp dịch vụ chăm sóc toàn diện cho bệnh nhân.",
    },
    {
      title: "Điều viên tư vấn",
      location: "Quy Nhơn",
      type: "Full-Time",
      salary: "8,000,000 VND - 12,000,000 VND ",
      description: "Cần tìm chuyên gia nhi khoa giàu kinh nghiệm để tư vấn từ xa nhằm cung cấp dịch vụ chăm sóc và hỗ trợ chuyên môn, kiến thức, kinh nghiệm cho mẹ và bé sau sinh.",
    },
    {
      title: "Điều Dưỡng Part-Time",
      location: "Quy Nhơn",
      type: "Part-Time",
      salary: "Linh hoạt dựa trên số giờ ",
      description: "Đang tìm điều dưỡng linh hoạt về thời gian tham gia nhóm chăm sóc sức khỏe cho mẹ và bé sau sinh",
    },
   
    // Add more job listings as needed
  ];

  return (
    <div className="recruitment-container">
      <h1 className="recruitment-title">Cơ Hội Nghề Nghiệp Y Tế</h1>
      <div className="job-listings">
        {jobListings.map((job, index) => (
          <div key={index} className="job-card">
            <h2 className="job-title">{job.title}</h2>
            <p className="job-location"><strong>Địa điểm:</strong> {job.location}</p>
            <p className="job-type"><strong>Loại công việc:</strong> {job.type}</p>
            <p className="job-salary"><strong>Mức lương:</strong> {job.salary}</p>
            <p className="job-description">{job.description}</p>
            <button className="apply-button">Ứng tuyển ngay</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
