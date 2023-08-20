
import React from "react";
import "./Hero.css";
import TaskioHero from "/media/hp/107 GB Volume1/WebDev/Projects/taskio/src/Assests/TaskioHero.png";
import { Link } from "react-router-dom";

const Hero = () => (
  <div className="hero-section px-4 py-5 my-5 text-center">
    <h1 className="hero-heading display-5 fw-bold text-body-emphasis">
      Simplify Your Life, Boost Your Achievements <br /> Because Every Task
      Matters.
    </h1>
    <div className="col-lg-6 mx-auto">
      <p className="hero-subheading lead mb-4">
        Effortlessly excel, celebrate victories; let Taskio change your life, <br />
        one task at a time.
      </p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <Link to="/main">
        <button
          type="button"
          className="learn-more btn btn-primary btn-lg px-4 gap-3"
        >
          Get Started Now
        </button>
        </Link>
      </div>
    </div>
    <img className="hero-image" src={TaskioHero} alt="" />
  </div>
);

export default Hero;
