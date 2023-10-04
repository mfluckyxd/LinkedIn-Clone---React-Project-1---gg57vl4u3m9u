import React, {useState, useEffect} from "react";
import "../../../../assets/styles/feedMid.css";
import { Avatar } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import ArticleIcon from "@mui/icons-material/Article";
import EventIcon from '@mui/icons-material/Event';
import { getPosts } from "../../../../utils/apis/getPostAPI";
import FeedPost from "./FeedPost";


const FeedMid = () => {

  const [feedPosts, setFeedPosts] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const fetchPosts = async()=>{
    try {
      const res = await getPosts(pageNo)
      if (res.success) {
        setFeedPosts(res.data)
      }
    } catch (error) {
      console.log(error);
    }
    
  }
 
  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  useEffect(()=>{
    fetchPosts();
  },[])
  return (
    <div className="feed-mid-container">
      <div className="feed-mid">
        {isLoggedIn&&(<section className="new-post">
          <div className="new-post-form">
            <Avatar sx={{ height: 60, width: 60 }} />
            <input
              type="text"
              name="text"
              id="newPost"
              placeholder="Start a post"
            />
          </div>
          <div className="new-post-icons">
            <button className="post-option">
              <InsertPhotoIcon style={{ color: "#70b5f9", height: "25px", width: "25px" }} />
              <span>Media</span>
            </button>
            <button className="post-option">
              <EventIcon style={{ color: "#a872e8", height: "25px", width: "25px" }}/>
              <span>Event</span>
            </button>
            <button className="post-option">
              <ArticleIcon style={{ color: "#e16745", height: "25px", width: "25px" }}/>
              <span>Article</span>
            </button>
          </div>
        </section>)}

        <section className="feed-posts">
            {feedPosts.reverse().map((feedPost)=>(
              <FeedPost key={feedPost._id} feedPost={feedPost}/>
            ))}
        </section>
      </div>
    </div>
  );
};

export default FeedMid;
