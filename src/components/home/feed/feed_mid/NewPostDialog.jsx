import { Avatar, Button, Dialog, DialogContent, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import "../../../../assets/styles/newPostDialog.css";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";

const NewPostDialog = ({ open, setOpen, setFeedPosts, feedPosts }) => {
  const userName = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [userInputs, setuserInputs] = useState({
    imageSrc: "",
    content: "",
  });

  const [newPostData, setNewpostData] = useState({
    author: {
      name: userName,
    },
    content: userInputs.content,
    channel: { image: userInputs.imageSrc },
  });
  const handleSubmit = () => {
    const currentFeedPosts = [...feedPosts];

    currentFeedPosts.unshift(newPostData);

    setFeedPosts(currentFeedPosts);

    setuserInputs({
      imageSrc: "",
      content: "",
    });

    setOpen(false);
  };
  const triggerImageUpload = () => {
    fileInputRef.current.click(); // Trigger the file input dialog
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      // setImageSrc(imageUrl);
      setuserInputs((prevData) => ({
        ...prevData,
        imageSrc: imageUrl,
      }));
    }
  };

  const saveUserContent = (e) => {
    const { value } = e.target;
    setuserInputs((prevData) => ({
      ...prevData,
      content: value,
    }));
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        sx={{ backgroundColor: "none" }}
        open={open}
        onClose={handleClose}
        BackdropProps={{ onClick: handleClose }}
      >
        <div className="post-compose-dialog">
          <section className="post-header">
            <div className="header-left">
              <div className="profile-picture">
                <Avatar />
              </div>
              <div className="about-user">
                <h4>{userName}</h4>
                <p>Software Devloper</p>
              </div>
            </div>
            <div className="header-right">
              <CloseIcon onClick={handleClose} />
            </div>
          </section>
          <section className="post-compose-form">
            <div className="post-compose-input">
              <textarea
                id="input-textarea"
                rows={"6"}
                placeholder="What do you want to talk about?"
                onChange={saveUserContent}
              ></textarea>
            </div>
            <div>
              <Avatar className="img-upload" onClick={triggerImageUpload}>
                <InsertPhotoIcon />
              </Avatar>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
              />
            </div>
          </section>
          <Divider />
          <Button variant="contained" size="small" onClick={handleSubmit}>
            Post
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default NewPostDialog;