import React, { useEffect, useState } from "react";

import "../../../assets/styles/feed.css";
import FeedLeft from "./feed_left/FeedLeft";
import FeedMid from "./feed_mid/FeedMid";
import FeedRight from "./feed_right/FeedRight";

const Feed = () => {
  // const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(sessionStorage.getItem("loginStatus"))
  );

  useEffect(() => {
    // Function to handle changes in sessionStorage
    const handleStorageChange = (e) => {
      if (e.key === "loginStatus") {
        // Update the isLoggedIn state when it changes in sessionStorage
        setIsLoggedIn(JSON.parse(e.newValue));
      }
    };

    // Listen for changes to 'loginStatus' in sessionStorage
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="feed-section">
      <FeedLeft />
      <FeedMid />
      <FeedRight />
    </div>
  );
};

export default Feed;
