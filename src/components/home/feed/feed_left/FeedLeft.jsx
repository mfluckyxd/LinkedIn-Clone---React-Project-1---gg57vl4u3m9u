import { Avatar, Divider } from "@mui/material";
import "../../../../assets/styles/feedLeft.css";

import React from "react";
import { Link } from "react-router-dom";

const FeedLeft = () => {
  const userName = sessionStorage.getItem("userName");
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  return (
    <div className="feed-left-container">
      <div className="feed-left">
        {isLoggedIn && <div className="feed-left-profile">
          <section className="profile-about">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAkq1F1Jv91R3CKq4KVcKHMaTIBKGbsWWGpDWPbol2TeCemoCd6utLcZIvw93qW7epAB_oDursXeka8_FaLzN87TPDmJn_ZvugL4LQ8zC2fOl3vBlB5cjhvS8Tspn7JPdbZkI8_WXlp9xsGcb7I2kjiEbu6UQmUGBQOacgpPFHEK3HIbQOpJ8d9ZXp3A/s16000/Linkedin%20Cover%20Photo%201.jpg"
              alt="profile cover"
            />

            <Avatar sx={{ width: 60, height: 60, marginTop: "-30px" }} />
            <h3>Welcome, {userName}</h3>
            <section className="skills">
              <span>React</span>
              <span>JAVASCRIPT</span>
              <span>JAVA</span>
              <span>DSA</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>MATERIAL UI</span>
            </section>
          </section>

          <Divider />
          <section className="profile-stats">
            <Link>
              <div className="profile-stats-view">
                <span>Who viewed your profile</span>
                <span className="profile-view-state">39</span>
              </div>
            </Link>

            <Link>
              <div className="profile-stats-network">
                <span>
                  Connections <br />
                  <span style={{fontWeight:"bold"}}>Grow your Network</span>{" "}
                </span>
                <span className="profile-network-state">79</span>
              </div>
            </Link>
          </section>
        </div>}

        <div className="feed-left-recent">
          <h4>Recent</h4>
          <Link>#Javascript</Link>
          <Link>#React</Link>
          <Link>#Node.Js</Link>
          <Link>#DSA</Link>
          <Link>#Softwar_Engineer</Link>
        </div>
      </div>
    </div>
  );
};

export default FeedLeft;
