import React from "react";
import "./Footer.css";
import image from "../../assets/image.png"
import { TfiInstagram } from "react-icons/tfi";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { Link } from "react-router-dom"


function Footer() {
   return (
      <>
         <div className="Footer">
            <div className="box1">
               <h3>Quick Link</h3><br />
               <Link to={'/'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Home</li></Link><br />
               <Link to={'/JobFinder'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Find Jobs</li></Link><br />
               <Link to={'/Jobs'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Find Workers</li></Link><br />
               <Link to={'/About'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>About Us</li></Link><br />
               <Link to={'/Contact'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Contact </li></Link><br />

            </div>
            <div className="box2">
               <h3>Job Categories</h3><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Construction</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Electricion</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Plumber</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Painter</li></Link><br />
            </div>
            <div className="box3">
               <h3>Help center</h3><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>FAQs</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Privacy Policy</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Support</li></Link><br />
               <Link to={'/Working'} style={{ color: "#6d28d9", textDecoration: "none", }}><li>Terms & Conditions</li></Link><br />
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
               <img src={image} alt="Footer" height="220px" width="220px" />
            </div>
         </div>
         <div className="Footer2">
            <p className="Copyright">Copyright © 2026 LabourLink. All Right Reserved | </p>
            <p className="Footer-text">Job Find Labour</p>

            <div className="social-icons">
               <div className="icon0"><RiFacebookFill /></div>
               <div className="icon2"><TfiInstagram /></div>
               <div className="icon3"><CiTwitter /></div>
               <div className="icon4"><FaGithub /></div>
            </div>
         </div>
      </>
   );
}

export default Footer;