import "./rightbar.scss";
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

function Rightbar() {
  return (
    <aside className="rightbar">
      <div className="rightbar_section">
        <span>Suggestions For You</span>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <p>Lerio Mao</p>
          </div>
          <div className="sugestion_actions">
            <button className="boton_main">Follow</button>
            <button className="boton_secondary">Dismiss</button>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <p>Lerio Mao</p>
          </div>
          <div className="sugestion_actions">
            <button className="boton_main">Follow</button>
            <button className="boton_secondary">Dismiss</button>
          </div>
        </div>
      </div>

      <div className="rightbar_section">
        <span>Latest Activities</span>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div>
              <p>Lerio Mao</p>
              <span>Liked a post</span>
            </div>
          </div>
          <div className="sugestion_actions">
            <span>1 min ago</span>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div>
              <p>Lerio Mao</p>
              <span>Change their cover picture</span>
            </div>
          </div>
          <div className="sugestion_actions">
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      <div className="rightbar_section">
        <span>Online Friends</span>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img  src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>
        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img  src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>
        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img  src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>
        <div className="sugestion_section">
          <div className="sugestion_person">
            <img src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>

        <div className="sugestion_section">
          <div className="sugestion_person">
            <img  src={Avatar} alt="Avatar" />
            <div className="online"></div>
            <div>
              <p>Lerio Mao</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Rightbar;
