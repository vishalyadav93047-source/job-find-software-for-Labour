import React from 'react'
import "./Mainnav.css"
import { FaPhone } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import logoo from "../../assets/logoo.png"
import { Link, Links } from 'react-router-dom';

function Mainnav() {

// document.addEventListener("DOMContentLoaded", () => {

//   // Language toggle using hidden Google Translate
//   let currentLang = "en";

//   if (langToggle) {
//     langToggle.addEventListener("click", () => {

//       const select = document.querySelector(
//         "#google_translate_element select.goog-te-combo"
//       );

//       if (!select) {
//         alert("Translator is loading... Please click again in a moment.");
//         return;
//       }

//       const target = currentLang === "en" ? "hi" : "en";
//       currentLang = target;

//       langToggle.textContent =
//         currentLang === "en" ? "🌐 हिंदी" : "🌐 English";

//       select.value = target;
//       select.dispatchEvent(new Event("change"));
//     });
//   }
// });

// // Google Translate callback (must be global)
// function googleTranslateElementInit() {
//   new google.translate.TranslateElement(
//     {
//       pageLanguage: "en",
//       includedLanguages: "en,hi",
//       autoDisplay: false
//     },
//     "google_translate_element"
//   );
// }

  return (
    <>
      <nav>
        <img src={logoo} alt="logo" height='180px' />


        <ul className='ul'>
          <Link to={'/'} style={{ color: "black", textDecoration: "none" }}><li>Home</li></Link>
          <Link to={'/About'} style={{ color: "black", textDecoration: "none" }}><li>About</li></Link>
          <Link to={'/Jobs'} style={{ color: "black", textDecoration: "none" }}><li>Jobs</li></Link>
          <Link to={'/Contact'} style={{ color: "black", textDecoration: "none" }}><li>Contact</li></Link>
        </ul>

         {/* <button className="langToggle" className="btn-ghost-small">🌐 हिंदी</button>

         <div className="google_translate_element"></div> */}
        
        <Link to={'/Login'} style={{ color: "black", textDecoration: "none" }} ><label className='login'><FaUser />  LogIn</label></Link>

          {/* <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script> */}
      </nav>
    </>
  )
}

export default Mainnav
