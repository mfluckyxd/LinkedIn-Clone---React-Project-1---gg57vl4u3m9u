import React, { useState, useEffect } from "react";
import "../../../../assets/styles/feedMid.css";
import { Avatar, CircularProgress, Divider, Snackbar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from "@mui/icons-material/Event";
import { getPosts } from "../../../../utils/apis/getPostAPI";
import FeedPost from "./FeedPost";
import LoginDialog from "../../../userAuth/LoginDialog";
import { upVotePostApi } from "../../../../utils/apis/userActionAPIs";
import NewPostDialog from "./NewPostDialog";
import { useNavigate } from "react-router";
import { Margin } from "@mui/icons-material";

const FeedMid = () => {
  const [feedPosts, setFeedPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));

  




  const [isFeedLoading, setIsFeedLoading] = useState(false)

  const [showNewPostDialog, setShowNewPostDialog] = useState(false);

  const navigate = useNavigate();

  const handleNewPostDialog = () => {
    setShowNewPostDialog(true);
  };

  const fetchPosts = async () => {
    try {
      if (pageNo===1) {
        setIsFeedLoading(true)
        
      }
      const res = await getPosts(pageNo);
      if (res.success) {
        setFeedPosts(prevFeedPosts => [...prevFeedPosts, ...res.data]);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsFeedLoading(false)
    }
  };

  const handleScroll = ()=>{
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPageNo((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [pageNo]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

        {isFeedLoading ? <Divider><CircularProgress sx={{margin:'0 auto'}}/></Divider>:<section className="feed-posts"> 

          {feedPosts.map((feedPost) => (
            <>
            <FeedPost
              key={feedPost._id}
              feedPost={feedPost}
              setFeedPosts={setFeedPosts}
              setShowLoginDialog={setShowLoginDialog}
            />
              
            </>
          ))}
        </section>}
      </div>
      <LoginDialog open={showLoginDialog} setOpen={setShowLoginDialog} />
      
    </div>
  );
};

export default FeedMid;
