
import React from "react";
import "./Feature.css";
import { Link } from "react-router-dom";
import { AiOutlineFolderOpen, AiOutlineTeam } from "react-icons/ai";
import { BiWinkSmile } from "react-icons/bi";
import { MdOutlineViewKanban, MdOutlineNotificationsActive, GrIntegration } from "react-icons/md";
import { TbPlugConnected } from "react-icons/tb";

const Feature = () => (
  <div className="feature container px-4 py-5" id="hanging-icons">
    <h2 className="feature-headline pb-2 border-bottom">Boost Your Productivity & Master Your Tasks!</h2>
    <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
      {featureItem(BiWinkSmile, "Smart UI", "A user-friendly interface lets you effortlessly explore and interact with the platform, boosting productivity.")}
      {featureItem(AiOutlineFolderOpen, "Task Management", "Features such as project creation, task assignment, due dates, and prioritization help you stay organized and handle tasks efficiently.")}
      {featureItem(AiOutlineTeam, "Collaboration", "Within Taskio, the ability to build teams, invite members, and assign tasks supports smooth and effective collaboration.")}
      {featureItem(MdOutlineViewKanban, "Kanban Board", "The Kanban board view shows tasks and progress, allowing you to more effectively track and manage your workflow.")}
      {featureItem(MdOutlineNotificationsActive, "Deadline Alerts", "Taskio's reminder system and alerts keep you up to date on upcoming task deadlines and task progress.")}
      {featureItem(TbPlugConnected, "Mobility & Integration", "You can use and sync your tasks across platforms and devices thanks to Taskio's connections with major productivity apps and mobile compatibility.")}
    </div>
  </div>
);

const featureItem = (Icon, title, specs) => (
  <div className="col d-flex align-items-start">
    <div className="icon-container text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
      <Icon className="feature-icons" size={28} style={{ color: "#2b2d42" }} />
    </div>
    <div>
      <h3 className="feature-title fs-2">{title}</h3>
      <p className="feature-specs">{specs}</p>
      <Link to="/comingsoon">
      <a href="#" className="btn btn-primary">Know more</a></Link>
    </div>
  </div>
);

export default Feature;
