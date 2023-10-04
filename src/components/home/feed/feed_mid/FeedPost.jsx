import { Avatar, Divider } from '@mui/material';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SendIcon from "@mui/icons-material/Send";

import React,{useState, useEffect} from 'react'
import LoginDialog from '../../../userAuth/LoginDialog';

const FeedPost = ({feedPost}) => {
    console.log(feedPost);
    const [showLoginDialog, setShowLoginDialog] = useState(false)
    const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
    const handleUpVote = ()=>{
        if (isLoggedIn) {
            
        }else{
            setShowLoginDialog(true)
        }
    }
    const handleComment = ()=>{
        if (isLoggedIn) {
            
        }else{
            setShowLoginDialog(true)
        }
    }

    
  return (
    <div className='feedpost-grid-container'>
        <section className="post-header">
            <div className="header-left">

            <div className="profile-picture">
                <Avatar src={feedPost.author.profileImage}/>
            </div>
            <div className="about-user">
                <h4>{feedPost.author.name}</h4>
                <p>{feedPost.channel.name}</p>
            </div>
            </div>
            <div className="header-right">
                <MoreHorizIcon/>
            </div>
        </section>
        <section className="post-content">{feedPost.content}</section>
        <section className="post-image">
            <img src={feedPost.channel.image} alt="" />
            
        </section>
        
        <section className="post-feature">
            <button onClick={handleUpVote} className="post-like"><ThumbUpOffAltIcon /> <span>Like</span></button>
            <button onClick={handleComment} className="post-comment"><ChatBubbleOutlineIcon /><span>Comment</span></button>
            <button className="post-share"><SendIcon /><span>Share</span></button>
        </section>
        <LoginDialog open={showLoginDialog} setOpen={setShowLoginDialog}/>

    </div>
  )
}

export default FeedPost