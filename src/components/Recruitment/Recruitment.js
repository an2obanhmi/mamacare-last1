import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Recruitment.css";

const doctors = [
  {
    id: "le-thanh-hung",
    name: "ThS. BS. CKII. Lê Thanh Hùng",
    position: "Bệnh viện Quốc tế Mỹ (Phó khoa Phụ Sản)",
    hospitals: ["Bệnh viện Từ Dũ", "Bệnh viện FV", "Bệnh viện Tâm Anh"],
    lecturer: "Giảng viên Đại học Y Khoa Phạm Ngọc Thạch",
    experience: [
      "20 năm kinh nghiệm trong ngành Sản - Phụ khoa",
      "Giảng viên chuyên ngành tại Đại học Y Dược TP. Hồ Chí Minh",
      "Từng là chuyên gia đào tạo cho các bệnh viện lớn",
    ],
    certificates: [
      { year: "1998", description: "Tốt nghiệp Đại học Y Dược TP. Hồ Chí Minh" },
      { year: "2001", description: "Đào tạo chuyên sâu về Sản phụ khoa tại Pháp" },
      { year: "2004", description: "Tốt nghiệp Thạc sĩ ngành Sản phụ khoa" },
      { year: "2011", description: "Chứng chỉ chuyên sâu về Siêu âm, nội soi Phụ khoa" },
    ],
    image: "/assets/docter1.jpg",
  },
  {
    id: "tran-thi-sang",
    name: "ThS. Trần Thị Sáng",
    position: "Bệnh viện Từ Dũ",
    hospitals: ["Bệnh viện FV", "CMI Việt Nam"],
    experience: [
      "15 năm kinh nghiệm trong lĩnh vực điều dưỡng",
      "Chuyên gia đào tạo tại Bệnh viện Từ Dũ",
    ],
    certificates: [
      { year: "2005", description: "Chứng chỉ điều dưỡng chuyên nghiệp" },
      { year: "2010", description: "Chuyên gia tư vấn y tế tại các bệnh viện lớn" },
    ],
    image: "/assets/docter2.jpg",
  },
  {
    id: "huynh-khac-luan",
    name: "BS. CKI. Huỳnh Khắc Luân",
    position: "Bệnh viện Nhi Đồng 2",
    hospitals: [],
    experience: [
      "Hơn 10 năm kinh nghiệm trong lĩnh vực Nhi khoa",
      "Từng làm việc tại các bệnh viện hàng đầu về Nhi khoa",
    ],
    certificates: [
      { year: "2007", description: "Bằng chuyên khoa I về Nhi khoa" },
      { year: "2015", description: "Đào tạo nâng cao về Chăm sóc trẻ sơ sinh" },
    ],
    image: "/assets/docter3.jpg",
  },
];

const Recruitment = () => {
  return (
    <div className="recruitment-container text-center my-5">
      <h2 className="mb-4">Đội ngũ bác sĩ chuyên môn</h2>
      <p className="text-muted">
        Bác sĩ Momcare24h chịu trách nhiệm hỗ trợ trong các liệu trình chăm sóc và đào tạo.
      </p>
      <div className="row">
        {doctors.map((doctor) => (
          <div className="col-md-4 mb-4" key={doctor.id}>
            <div className="card shadow-sm">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text">{doctor.position}</p>
                {doctor.hospitals.length > 0 && (
                  <ul className="list-unstyled">
                    {doctor.hospitals.map((hospital, idx) => (
                      <li key={idx}>{hospital}</li>
                    ))}
                  </ul>
                )}
                <div className="d-flex justify-content-around">
                  <Link to={`/doctor/${doctor.id}`} className="btn btn-success">CHI TIẾT</Link>
                  <button className="btn btn-primary">VIDEO</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recruitment;
