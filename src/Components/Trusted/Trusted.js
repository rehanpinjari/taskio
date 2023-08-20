// import React from "react";
// import "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Components/Trusted/Trusted.css";
// import Eclipse from "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Assests/Teams/Eclipse.png";
// import Quantum from "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Assests/Teams/Quantum.png";
// import Velocity from "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Assests/Teams/Velocity.svg";
// import VI from "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Assests/Teams/VI.png";
// import Zenith from "/media/hp/107 GB Volume/WebDev/Projects/taskio/src/Assests/Teams/Zenith.png";

// const Trusted = () => {
//   return (
//     <section className="trusted-section">
//       <div className="section-header">
//         <h2 className="section-title">
//           Unlock Your Potential With Taskio - Trusted By Millions Worldwide!
//         </h2>
//       </div>
//       <div className="trusted">
//         <div className="trusted-row trusted-row1">
//           <img className="trusted-logo" src={Eclipse} alt="" />
//           <img className="trusted-logo" src={Quantum} alt="" />
//           <img className="trusted-logo" src={Velocity} alt="" />
//           <img className="trusted-logo" src={VI} alt="" />
//           <img className="trusted-logo" src={Zenith} alt="" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Trusted;


import React from "react";
import "./Trusted.css";
import Eclipse from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/Teams/Eclipse.png";
import Quantum from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/Teams/Quantum.png";
import Velocity from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/Teams/Velocity.svg";
import VI from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/Teams/VI.png";
import Zenith from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/Teams/Zenith.png";

const Trusted = () => (
  <section className="trusted-section">
    <div className="section-header">
      <h2 className="section-title">
        Unlock Your Potential With Taskio - Trusted By Millions Worldwide!
      </h2>
    </div>
    <div className="trusted">
      <div className="trusted-row trusted-row1">
        <img className="trusted-logo" src={Eclipse} alt="" />
        <img className="trusted-logo" src={Quantum} alt="" />
        <img className="trusted-logo" src={Velocity} alt="" />
        <img className="trusted-logo" src={VI} alt="" />
        <img className="trusted-logo" src={Zenith} alt="" />
      </div>
    </div>
  </section>
);

export default Trusted;
