import React, { useState, useEffect } from "react";
import "../../../../assets/styles/feedMid.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import { getPosts } from "../../../../utils/apis/getPostAPI";
import FeedPost from "./FeedPost";
import LoginDialog from "../../../userAuth/LoginDialog";
import { upVotePostApi } from "../../../../utils/apis/userActionAPIs";
import NewPostDialog from "./NewPostDialog";
import { useNavigate } from "react-router";

const FeedMid = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));

  const [showNewPostDialog, setShowNewPostDialog] = useState(false);

  const navigate = useNavigate();

  const handleNewPostDialog = () => {
    setShowNewPostDialog(true);
  };

  const fetchPosts = async () => {
    try {
      const res = await getPosts(pageNo);
      if (res.success) {
        setFeedPosts(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpVote = async (postID) => {
    if (isLoggedIn) {
      try {
        const res = await upVotePostApi(postID);
        console.log(res);
        if (res.status) {
          setFeedPosts((prevFeedPosts) =>
            prevFeedPosts.map((post) =>
              post._id === postID
                ? { ...post, likeCount: post.likeCount + 1 }
                : post

                
            )
          );
        }
      } catch (error) {}
    } else {
      setShowLoginDialog(true);
    }
  };
  const handleComment = (postID) => {
    if (isLoggedIn) {
    } else {
      setShowLoginDialog(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <div className="feed-mid-container">
      <div className="feed-mid">
        {isLoggedIn && (
          <section className="new-post">
            <div className="new-post-form">
              <Avatar
                sx={{ height: 60, width: 60, cursor: "pointer" }}
                onClick={() => navigate("/profile")}
              />
              <input
                onClick={handleNewPostDialog}
                type="text"
                name="text"
                id="newPost"
                placeholder="Start a post"
              />
            </div>
            <div className="new-post-icons">
              <button className="post-option" onClick={handleNewPostDialog}>
                <InsertPhotoIcon
                  style={{ color: "#70b5f9", height: "25px", width: "25px" }}
                />
                <span>Media</span>
              </button>
              <button className="post-option" onClick={handleNewPostDialog}>
                <EventIcon
                  style={{ color: "#a872e8", height: "25px", width: "25px" }}
                />
                <span>Event</span>
              </button>
              <button className="post-option" onClick={handleNewPostDialog}>
                <ArticleIcon
                  style={{ color: "#e16745", height: "25px", width: "25px" }}
                />
                <span>Article</span>
              </button>
            </div>
            <NewPostDialog
              open={showNewPostDialog}
              setOpen={setShowNewPostDialog}
              setFeedPosts={setFeedPosts}
            />
          </section>
        )}

        <section className="feed-posts">
          {feedPosts.map((feedPost) => (
            <FeedPost
              key={feedPost._id}
              feedPost={feedPost}
              handleUpVote={handleUpVote}
              handleComment={handleComment}
            />
          ))}
        </section>
      </div>
      <LoginDialog open={showLoginDialog} setOpen={setShowLoginDialog} />
    </div>
  );
};

export default FeedMid;
