import React from "react";
import "../../../../assets/styles/feedRight.css";
import { IconButton, Tooltip } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";

const FeedRight = () => {
  return (
    <div className="feed-right-container">
      <div className="feed-right">
        <section className="news-sidebar-right">
          <div className="news-heading">
            <h4>LinkedIn News</h4>
            <Tooltip title="These are the day’s top professional news stories and conversations.">
              <IconButton >
                <ErrorIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="news-list">
            <Link>
              <li>
                <p>India's Top Startups of 2023</p>
                <span>3h ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>Quantum dots discovery wins Nobel</p>
                <span>7h ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>Cyber security spending to soar</p>
                <span>1d ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>India Inc's legal expenses jump</p>
                <span>1d ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>Hospitality eyes freshers</p>
                <span>2d ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>New players enter app cab space</p>
                <span>3d ago</span>
              </li>
            </Link>
            <Link>
              <li>
                <p>CEO salaries in sharp focus</p>
                <span>5d ago</span>
              </li>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeedRight;
