import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => (
  <div className="cta">
    <div className="cta-headline">
      <h3 className="cta-title">Unleash Your Potential. Embrace Taskio.</h3>
    </div>
    <div className="cta-subheadline">
      <p className="cta-desc">
        Ignite Your Productivity with a Free Forever Start.
      </p>
    </div>
    <div className="cta-btn d-flex justify-content-center">
      <Link to="/comingsoon">
      <button
        type="button"
        className="cta-button btn btn-primary btn-lg px-4 gap-3"
      >
        Start Free Today
      </button>
      </Link>
    </div>
  </div>
);

export default CTA;
