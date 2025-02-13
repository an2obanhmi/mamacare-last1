import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    
    <div className="container my-5">
      {/* Section 1: Introduction */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="https://homecaresausinh.com/wp-content/uploads/2024/06/img_about1.png" className="img-fluid" alt="Intro Image" />
        </div>
        <div className="col-md-6">
          <h2>Câu chuyện Mamacare</h2>
          <p>MamaCare ra đời từ những trải nghiệm thực tế và tâm tư của các bà mẹ sau sinh. 
            Mamacare hiểu rằng việc trở thành mẹ không chỉ là niềm vui, mà còn là một thử thách lớn. 
            Với mong muốn chia sẻ và đồng hành cùng những người mẹ trong hành trình đầy cảm xúc này, 
            MamaCare đã xây dựng một nền tảng chăm sóc và hỗ trợ hoàn hảo. 
            Chúng tôi tin rằng mọi bà mẹ đều xứng đáng có được sự chăm sóc tận tình
             và thông tin cần thiết để nuôi dạy con cái một cách tốt nhất.</p>
        </div>
      </div>

      {/* Section 2: Brand Story */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <img src="https://homecaresausinh.com/wp-content/uploads/2024/06/img_about2.png" className="img-fluid" alt="Brand Story Image" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Tầm nhìn</h2>
          <p>Trở thành ứng dụng hàng đầu tại Việt Nam về chăm sóc sức khỏe phụ nữ sau sinh. 
            MamaCare không chỉ là một nơi cung cấp thông tin, mà còn là một không gian kết nối và chia sẻ, 
            giúp các bà mẹ cảm thấy tự tin và an tâm hơn trong hành trình làm mẹ.
</p>
        </div>
      </div>

      {/* Section 3: Development Journey */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <img src="https://homecaresausinh.com/wp-content/uploads/2024/06/img_about3.png" className="img-fluid" alt="Development Image" />
        </div>
        <div className="col-md-6">
          <h2>Giá trị cốt lõi</h2>
          <p>
              Chăm sóc tận tâm<br/>
              Chuyên môn<br/>
              Cộng đồng<br/>
              Đổi mới<br/>
</p>
        </div>
      </div>

      {/* Section 4: Achievements */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6 order-md-2">
          <img src="https://homecaresausinh.com/wp-content/uploads/2024/06/img_about4.png" className="img-fluid" alt="Achievement Image" />
        </div>
        <div className="col-md-6 order-md-1">
          <h2>Sứ Mệnh</h2>
          <p>Cung cấp kiến thức, hỗ trợ và dịch vụ chất lượng cao cho các bà mẹ sau sinh. Chúng tôi cam kết tạo ra một cộng đồng tích cực, 
            nơi mẹ bầu có thể tìm kiếm lời khuyên từ các chuyên gia, chia sẻ kinh nghiệm và cảm xúc với những người cùng hoàn cảnh.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
