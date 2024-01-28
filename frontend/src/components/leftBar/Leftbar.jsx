import "./leftbar.scss";
import Avatar from "../../public/img/avatar.png";

import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import Diversity2OutlinedIcon from "@mui/icons-material/Diversity2Outlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import SwitchVideoOutlinedIcon from "@mui/icons-material/SwitchVideoOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import AlbumOutlinedIcon from "@mui/icons-material/AlbumOutlined";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Leftbar() {

      const { currentUser } = useContext(AuthContext);


  return (
    <aside className="leftbar">
      <div className="profile">
        <img src={currentUser.profilePic} alt="Avatar" />
        <p>{currentUser.name}</p>
      </div>
      <hr />

      <div className="section_leftbar">
        <div className="element_leftbar">
          <Diversity1OutlinedIcon />
          <p>Friends</p>
        </div>
        <div className="element_leftbar">
          <Diversity2OutlinedIcon />
          <p>Groups</p>
        </div>
        <div className="element_leftbar">
          <StorefrontOutlinedIcon />
          <p>Marketplace</p>
        </div>
        <div className="element_leftbar">
          <OndemandVideoOutlinedIcon />
          <p>Watch</p>
        </div>
        <div className="element_leftbar">
          <WatchLaterOutlinedIcon />
          <p>Memories</p>
        </div>
      </div>

      <hr />

      <div className="section_leftbar">
        <span>Your Shortcuts</span>
        <div className="element_leftbar">
          <EmojiEventsOutlinedIcon />
          <p>Events</p>
        </div>
        <div className="element_leftbar">
          <SportsEsportsOutlinedIcon />
          <p>Gaming</p>
        </div>
        <div className="element_leftbar">
          <CollectionsOutlinedIcon />
          <p>Gallery</p>
        </div>
        <div className="element_leftbar">
          <SwitchVideoOutlinedIcon />
          <p>Videos</p>
        </div>
        <div className="element_leftbar">
          <ChatOutlinedIcon />
          <p>Messages</p>
        </div>
      </div>

      <hr />

      <div className="section_leftbar">
        <span>Others</span>
        <div className="element_leftbar">
          <InboxOutlinedIcon />
          <p>Tutorials</p>
        </div>
        <div className="element_leftbar">
          <AlbumOutlinedIcon />
          <p>Courses</p>
        </div>
      </div>
    </aside>
  );
}

export default Leftbar;
