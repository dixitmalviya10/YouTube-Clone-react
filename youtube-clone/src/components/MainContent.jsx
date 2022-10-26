import React from "react";
import Header from "./Header";
import "./MainContent.css";
import Sidebar from "./Sidebar";

const MainContent = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="video-grid">
        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-1.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-1.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-author">Marques Brownlee</p>
              <p className="video-stats">3.4M views · 6 months ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-2.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-2.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">Try Not To Laugh Challenge #9</p>
              <p className="video-author">Markiplier</p>
              <p className="video-stats">19M views · 4 years ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-3.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-3.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-4.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-4.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-author">Marques Brownlee</p>
              <p className="video-stats">3.4M views · 6 months ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-5.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-5.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">Try Not To Laugh Challenge #9</p>
              <p className="video-author">Markiplier</p>
              <p className="video-stats">19M views · 4 years ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img
              className="thumbnail"
              src={require("../thumbnails/thumbnail-6.webp")}
              alt="thumbnail-1"
            />
            <div className="video-time">14:20</div>
          </div>
          <div className="video-info-grid">
            <div className="channel-picture">
              <img
                className="profile-picture"
                src={require("../channel-profiles/channel-6.jpeg")}
                alt=""
              />
            </div>
            <div className="video-info">
              <p className="video-title">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-author">SSSniperWolf</p>
              <p className="video-stats">12M views · 1 year ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
