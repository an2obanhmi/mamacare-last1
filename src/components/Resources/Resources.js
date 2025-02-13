  // Resources.js
  import React from 'react';
  import './Resources.css';

  const Resources = () => {
    return (
      <div className="resources-container">
        

        <section className="slideshow-section">
          <div className="containimage">
            <div id="slideshow">
              <img className="imageflex" src="/assets/Docter.jpg" alt="Slide 1" />
              <img className="imageflex" src="/assets/Nurses.jpg" alt="Slide 2" />
              <img className="imageflex" src="/assets/dieuduong.jpg" alt="Slide 3" />
            </div>
            <div className="overlay">
              <h1 className="esb">Đội ngũ bác sĩ tận tâm đến từ MamaCare</h1>
            </div>
          </div>
        </section>

        <section className="career-content">
          <h2>Đến với chúng tôi</h2>
          <p>Bệnh viện và phòng khám cao cấp của MamaCare cung cấp các tiêu chuẩn chăm sóc bệnh nhân cao nhất cho người dân Việt Nam.</p>
        </section>

        <section className="career-content">
          <h2>Chúng tôi là ai ? </h2>
          <p>MamaCare cung cấp các giải pháp tiếp thị linh hoạt</p>
        </section>

        <section className="belief-section">
          <div className="beliefcon">
            <div className="bcards">
              <h3>Tập trung vào khách hàng</h3>
              <p>Chúng tôi quan tâm đến khách hàng của chúng tôi. Chăm sóc khách hàng ,phát triển là ưu tiên hàng đầu khi chúng tôi cung cấp các giải pháp sáng tạo, nhanh chóng cho khách hàng của mình.</p>
            </div>
            <div className="bcards">
              <h3>Cải thiện quy trình</h3>
              <p>Chúng tôi tìm kiếm những cách tốt nhất để giải quyết vấn đề. Bằng cách tập trung vào cách chúng ta có thể làm điều gì đó tốt hơn, chúng ta có thể hoàn thành các trị liệu dễ dàng và hiệu quả hơn.</p>
            </div>
            <div className="bcards">
              <h3>Chấp nhận rủi ro</h3>
              <p>Táo bạo và chấp nhận rủi ro bằng cách theo đuổi những ý tưởng mới</p>
            </div>
            <div className="bcards">
              <h3>Tận hưởng công việc</h3>
              <p>Chúng tôi yêu những gì chúng tôi làm. trở thành chuyên gia trong lĩnh vực chúng tôi làm và cảm thấy vui vẻ khi làm việc đó.</p>
            </div>
          </div>
        </section>

        <section className="career-content">
          <h2>Our Culture</h2>
          <p>It is our team who makes MamaCare...</p>
        </section>

        <section className="career-content">
          <h2>Current Opportunities</h2>
          <a href="/current-opportunities" className="view-jobs-button">View Jobs</a>
        </section>

        <footer className="footer">
          <div className="footercontainer">
            <nav>
              <a href="https://www.facebook.com/profile.php?id=61566899712534"><img src="https://sinalite.com/media/images/socialmedia-icon/linkedin.png" alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/profile.php?id=61566899712534"><img src="https://sinalite.com/media/images/socialmedia-icon/youtube.png" alt="YouTube" /></a>
              <a href="https://www.facebook.com/profile.php?id=61566899712534"><img src="https://sinalite.com/media/images/socialmedia-icon/facebook.png" alt="Facebook" /></a>
              <a href="https://www.facebook.com/profile.php?id=61566899712534"><img src="https://sinalite.com/media/images/socialmedia-icon/twitter.png" alt="Twitter" /></a>
            </nav>
            <img className="nlogo" src="/assets/icon.jpg" alt="Logo" />
            <p>© 2024 | All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };

  export default Resources;
