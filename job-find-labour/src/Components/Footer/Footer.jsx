import React from "react";
import "./Footer.css";
import image from "../../assets/image.png"
import { TfiInstagram } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


function Footer() {
   return (
      <>
         <div className="Footer">
            <div className="box1">
               <h3>Quick Link</h3><br />
               <li>Home</li><br />
               <li>Find Jobs</li><br />
               <li>Find Workers</li><br />
               <li>About Us</li><br />
               <li>Contact </li><br />

            </div>
            <div className="box2">
               <h3>Job Categories</h3><br />
               <li>Construction</li><br />
               <li>Electricion</li><br />
               <li>Plumber</li><br />
               <li>Painter</li><br />
            </div>
            <div className="box3">
               <h3>Help center</h3><br />
               <li>FAQs</li><br />
               <li>Privacy Policy</li><br />
               <li>Support</li><br />
               <li>Terms & Conditions</li><br />
            </div>
            <div className="box4">
               {/* <h3>  </h3><br />
               <li>  </li><br />
               <li>  </li><br />
               <li>  </li><br />
               <li>  </li><br />
               <li>  </li><br /> */}
            </div>
            <div className="box5">
               <img src={image} alt="" srcset="" height="220px" width="220px"></img>
            </div>
         </div>
         <div className="Footer2">
            <p className="Copyright">Copyright © 2026 LabourLink. All Right Reserved | </p>
            <p className="Footer-text">Job Find Labour</p>

            <div className="social-icons">
               <div className="icon1"><RiFacebookFill /></div>
               <div className="icon2"><TfiInstagram /></div>
               <div className="icon3"><CiTwitter /></div>
               <div className="icon4"><FaGithub /></div>
            </div>
         </div>
      </>
   );
}

export default Footer;