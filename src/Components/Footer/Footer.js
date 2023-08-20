// import React from "react";
// import "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Components/Footer/Footer.css";
// import {
//   BsTwitter,
//   BsInstagram,
//   BsFacebook,
//   BsLinkedin,
//   BsGithub,
// } from "react-icons/bs";

// const Footer = () => {
//   return (
//     <footer className="footer py-5">
//       <div className="row">
//         <div className="col-6 col-md-2 mb-3">
//           <h5 className="footer-section">Taskio</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Apps
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Integrations
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Pricing
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 FAQs
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 API
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Business
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-6 col-md-2 mb-3">
//           <h5 className="footer-section">About</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Company
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Jobs
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Partners
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Affiliate Program
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Press
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-6 col-md-2 mb-3">
//           <h5 className="footer-section">Support</h5>
//           <ul className="nav flex-column">
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Help Center
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Tutorial Videos
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 Security
//               </a>
//             </li>
//             <li className="nav-item mb-2">
//               <a href="#" className="nav-link p-0 text-body-secondary">
//                 FAQs
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div className="col-md-5 offset-md-1 mb-3">
//           <form>
//             <h5 className="newsletter-title">Don't let tasks overwhelm you</h5>
//             <p className="newsletter-desc">Try Taskio and stay organized!</p>
//             <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//               <label htmlFor="newsletter1" className="visually-hidden">
//                 Email address
//               </label>
//               <input
//                 id="newsletter1"
//                 type="text"
//                 className="form-control"
//                 placeholder="Email address"
//               />
//               <button className="btn btn-primary" type="button">
//                 Organize
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//       <div className="company-info d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//         <p>© 2023 Taskio, Inc. All rights reserved.</p>
//         <ul className="list-unstyled d-flex">
//           <li className="ms-3">
//             <a className="link-body-emphasis" href="#">
//               <BsTwitter size={24} />
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-body-emphasis" href="#">
//               <BsInstagram size={24} />
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-body-emphasis" href="#">
//               <BsFacebook size={24} />
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-body-emphasis" href="#">
//               <BsLinkedin size={24} />
//             </a>
//           </li>
//           <li className="ms-3">
//             <a className="link-body-emphasis" href="#">
//               <BsGithub size={24} />
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import { BsTwitter, BsInstagram, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => (
  <footer className="footer py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5 className="footer-section">Taskio</h5>
        <ul className="nav flex-column">
          {footerLink("Apps")}
          {footerLink("Integrations")}
          {footerLink("Pricing")}
          {footerLink("FAQs")}
          {footerLink("API")}
          {footerLink("Business")}
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className="footer-section">About</h5>
        <ul className="nav flex-column">
          {footerLink("Company")}
          {footerLink("Jobs")}
          {footerLink("Partners")}
          {footerLink("Affiliate Program")}
          {footerLink("Press")}
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5 className="footer-section">Support</h5>
        <ul className="nav flex-column">
          {footerLink("Help Center")}
          {footerLink("Tutorial Videos")}
          {footerLink("Security")}
          {footerLink("FAQs")}
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5 className="newsletter-title">Don't let tasks overwhelm you</h5>
          <p className="newsletter-desc">Try Taskio and stay organized!</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">
              Email address
            </label>
            <input
              id="newsletter1"
              type="text"
              className="form-control"
              placeholder="Email address"
            />
            <button className="btn btn-primary" type="button">
              Organize
            </button>
          </div>
        </form>
      </div>
    </div>
    <div className="company-info d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Taskio, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        {socialLink(BsTwitter)}
        {socialLink(BsInstagram)}
        {socialLink(BsFacebook)}
        {socialLink(BsLinkedin)}
        {socialLink(BsGithub)}
      </ul>
    </div>
  </footer>
);

const footerLink = (text) => (
  <li className="nav-item mb-2">
    <a href="#" className="nav-link p-0 text-body-secondary">
      {text}
    </a>
  </li>
);

const socialLink = (Icon) => (
  <li className="ms-3">
    <a className="link-body-emphasis" href="#">
      <Icon size={24} />
    </a>
  </li>
);

export default Footer;
