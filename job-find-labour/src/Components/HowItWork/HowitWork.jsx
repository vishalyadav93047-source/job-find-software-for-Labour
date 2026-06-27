import "./HowitWork.css";
import { BsChatLeftTextFill } from "react-icons/bs";
import { FaUser, FaRegFileAlt } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="how">

      <h2>How It Works</h2>

      <div className="how-container">

        
        <div className="step">
          <div className="circle">
            📁
          </div>

          <div className="line"></div>

          <span className="number">1</span>

          <h3>Register</h3>

          <p>Create your account</p>
        </div>

        
        <div className="step">
          <div className="circle">
            👤
          </div>

          <div className="line"></div>

          <span className="number">2</span>

          <h3>Create Profile</h3>

          <p>Add your skills & experience</p>
        </div>

       
        <div className="step">
          <div className="circle">
            📄
          </div>

          <div className="line"></div>

          <span className="number">3</span>

          <h3>Apply Job</h3>

          <p>Search and apply suitable jobs</p>
        </div>

       
        <div className="step">
          <div className="circle">
            👤
          </div>

          <span className="number">4</span>

          <h3>Get Hired</h3>

          <p>Connect with employers</p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;