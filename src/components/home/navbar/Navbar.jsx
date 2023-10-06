import React, {useState} from "react";
import "../../../assets/styles/navbar.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SearchIcon from "@mui/icons-material/Search";
import HouseIcon from "@mui/icons-material/House";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WorkIcon from "@mui/icons-material/Work";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import NavFeature from "./NavFeature";
import ProfileMenu from "./ProfileMenu";
import { Link, NavLink } from "react-router-dom";
import LoginDialog from "../../userAuth/LoginDialog";

const Navbar = () => {

  const isLoggedIn = JSON.parse(sessionStorage.getItem("loginStatus"));
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  const handleNavClick = (e)=>{
    if (!isLoggedIn) {
      e.preventDefault();
      setShowLoginDialog(true);

    }
  }

  return (
    <div className="nav-container">
      <div className="nav-left">
        <Link to={'/'}><LinkedInIcon style={{ color: "blue", fontSize: "45px" }} /></Link>
        
        <section id="searchBox">
          <SearchIcon />
          <input type="text" />
        </section>
      </div>
      <div className="nav-right">
        <NavFeature Icon={HouseIcon} title={"Home"} toPath={"/"} />
        <NavFeature
          Icon={PeopleAltIcon}
          title={"My Network"}
          toPath={"/mynetwork"}
          onClickFunc={handleNavClick}
        />
        <NavFeature Icon={WorkIcon} title={"Jobs"} toPath={"/jobs"} />
        <NavFeature
          Icon={SmsRoundedIcon}
          title={"Messaging"}
          toPath={"/messages"}
          onClickFunc={handleNavClick}
        />
        <NavFeature
          Icon={NotificationsRoundedIcon}
          title={"Notification"}
          toPath={"/notifications"}
          onClickFunc={handleNavClick}
        />

        <ProfileMenu/>
        
        <NavFeature
          reqClass={'for-business'}
          Icon={AppsRoundedIcon}
          title={"For Business"}
          toPath={"/business"}
        />
        <section className="nav-premium">
          <NavLink className="nav-premium" to={'/premium'}>

          <span>Get Hired Faster.</span>
          <span>Try Premium Free.</span>
          </NavLink>
        </section>
      </div>
      <LoginDialog open={showLoginDialog} setOpen={setShowLoginDialog}/>
    </div>
  );
};

export default Navbar;
