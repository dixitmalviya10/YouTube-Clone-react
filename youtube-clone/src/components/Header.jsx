import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img
          className="hamburgur-menu"
          src={require("../logo/hamburger-menu.svg").default}
          alt="hamburger-menu"
        />
        <img
          className="youtube-logo"
          src={require("../logo/youtube-logo.svg").default}
          alt=""
        />
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-btn">
          <img
            className="search-icon"
            src={require("../logo/search.svg").default}
            alt=""
          />
          <div className="tooltip">Search</div>
        </button>
        <button className="voice-search-btn">
          <img
            className="voice-search-icon"
            src={require("../logo/voice-search-icon.svg").default}
            alt=""
          />
          <div className="tooltip">Search with your voice</div>
        </button>
      </div>
      <div className="right-section">
        <div className="upload-icon-container">
          <img
            className="upload-icon"
            src={require("../logo/upload.svg").default}
            alt=""
          />
          <div className="tooltip">Create</div>
        </div>
        <div className="youtube-apps-icon-container">
          <img
            className="youtube-apps-icon"
            src={require("../logo/youtube-apps.svg").default}
            alt=""
          />
          <div className="tooltip">YouTube Apps</div>
        </div>
        <div className="notifications-icon-container">
          <img
            className="notifications-icon"
            src={require("../logo/notifications.svg").default}
            alt=""
          />
          <div className="notifications-count">3</div>
          <div className="tooltip">Notifications</div>
        </div>
        <img
          className="current-user-picture"
          src={require("../logo/my-channel.jpeg")}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
