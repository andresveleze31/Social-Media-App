import "./navbar.scss";
import Logo from "../../public/img/logo.png";
import Avatar from "../../public/img/avatar.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
function Navbar() {

    const { toggle } = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);


  return (
    <div className="navbar_main">
      <div className="navbar contenedor">
        <div className="nav1">
          <img src={Logo} alt="Logo" />
          <div className="search">
            <SearchIcon />
            <input type="text" placeholder="Search..." />
          </div>
          <nav className="nav2">
            <Link className="navbar_link">
              <HomeOutlinedIcon />
            </Link>
            <Link className="navbar_link">
              <GridViewOutlinedIcon />
            </Link>
            <Link onClick={(e) => {
              e.preventDefault();
              toggle()
            }} className="navbar_link">
              <DarkModeOutlinedIcon />
            </Link>
          </nav>
        </div>

        <nav className="nav3">
          <Link className="navbar_link">
            <PersonOutlinedIcon />
          </Link>
          <Link className="navbar_link">
            <MailOutlineOutlinedIcon />
          </Link>
          <Link className="navbar_link">
            <NotificationsNoneOutlinedIcon />
          </Link>
          <img src={currentUser.profilePic} alt="Avatar" />
          <p>{currentUser.name}</p>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
