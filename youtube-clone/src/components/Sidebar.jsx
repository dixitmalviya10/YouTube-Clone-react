import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-link">
        <img src={require("../sidebar-icons/home.svg").default} alt="" />
        <div>Home</div>
      </div>
      <div className="sidebar-link">
        <img src={require("../sidebar-icons/explore.svg").default} alt="" />
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
        <img
          src={require("../sidebar-icons/subscriptions.svg").default}
          alt=""
        />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link">
        <img src={require("../sidebar-icons/originals.svg").default} alt="" />
        <div>Originals</div>
      </div>
      <div className="sidebar-link">
        <img
          src={require("../sidebar-icons/youtube-music.svg").default}
          alt=""
        />
        <div>YouTube Music</div>
      </div>
      <div className="sidebar-link">
        <img src={require("../sidebar-icons/library.svg").default} alt="" />
        <div>Library</div>
      </div>
    </div>
  );
};

export default Sidebar;
