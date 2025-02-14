import React from "react";
import { useParams } from "react-router-dom";
import "./DoctorDetail.css";

const doctorData = {
  "le-thanh-hung": {
    name: "ThS. BS. CKII. Lê Thanh Hùng",
    position: "Bệnh viện Quốc tế Mỹ AIH (Phó khoa Phụ Sản)",
    hospitals: ["Bệnh viện Từ Dũ", "Bệnh viện FV", "Bệnh viện Tâm Anh"],
    lecturer: "Giảng viên Đại học Y Khoa Phạm Ngọc Thạch",
    image: "/assets/docter1.jpg",
    experience: [
      "Bệnh viện Quốc tế Mỹ AIH",
      "20 năm kinh nghiệm Khoa Sản - Bệnh viện Từ Dũ.",
      "Khoa Sản - Bệnh viện FV.",
      "Viện Trưởng Đại học Pellegrin Hospital – Bordeaux.",
      "Từ năm 1998, bác sĩ là giảng viên chuyên ngành Sản khoa.",
      "Năm 2016, xuất hiện trong serie truyền hình National Geographic.",
      "Bệnh viện Tâm Anh.",
    ],
    certificates: [
      { year: "1998", description: "Tốt nghiệp đại học Y Dược Thành phố Hồ Chí Minh" },
      { year: "2000 - 2001", description: "Đào tạo nâng cao về Sản phụ khoa - Đại học Y Victor Segalen, Bordeaux, Pháp" },
      { year: "2004", description: "Tốt nghiệp Thạc sĩ ngành Sản phụ khoa" },
      { year: "2011", description: "Chứng chỉ chuyên sâu về Siêu âm, nội soi Phụ khoa" },
    ],
  },
  "tran-thi-sang": {
    name: "ThS. Trần Thị Sáng",
    position: "Bệnh viện Từ Dũ",
    hospitals: ["Bệnh viện FV", "CMI Việt Nam"],
    image: "/assets/docter2.jpg",
    experience: ["15 năm kinh nghiệm trong lĩnh vực điều dưỡng", "Chuyên gia đào tạo tại Bệnh viện Từ Dũ"],
    certificates: [
      { year: "2005", description: "Chứng chỉ điều dưỡng chuyên nghiệp" },
      { year: "2010", description: "Chuyên gia tư vấn y tế tại các bệnh viện lớn" },
    ],
  },
  "huynh-khac-luan": {
    name: "BS. CKI. Huỳnh Khắc Luân",
    position: "Bệnh viện Nhi Đồng 2",
    image: "/assets/docter3.jpg",
    experience: ["Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa", "Từng làm việc tại các bệnh viện hàng đầu về Nhi khoa"],
    certificates: [
      { year: "2007", description: "Bằng chuyên khoa I về Nhi khoa" },
      { year: "2015", description: "Đào tạo nâng cao về Chăm sóc trẻ sơ sinh" },
    ],
  },
};

const DoctorDetail = () => {
  const { doctorId } = useParams();
  const doctor = doctorData[doctorId];

  if (!doctor) {
    return <h2>Bác sĩ không tồn tại!</h2>;
  }

  return (
    <div className="doctor-detail-container">
      <div className="doctor-header">
        <img src={doctor.image} alt={doctor.name} className="doctor-image" />
        <h2>{doctor.name}</h2>
        <p>{doctor.position}</p>
        <button className="btn-book">ĐẶT LỊCH HẸN</button>
      </div>

      <div className="doctor-info">
        <div className="doctor-experience">
          <h3>KINH NGHIỆM LÀM VIỆC</h3>
          <ul>
            {doctor.experience.map((exp, index) => (
              <li key={index}>{exp}</li>
            ))}
          </ul>
        </div>

        <div className="doctor-certificates">
          <h3>BẰNG CẤP - CHỨNG CHỈ</h3>
          <ul>
            {doctor.certificates.map((cert, index) => (
              <li key={index}>
                <strong>{cert.year}:</strong> {cert.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetail;
