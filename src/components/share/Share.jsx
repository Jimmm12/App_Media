import "./share.css";
import RoomIcon from "@mui/icons-material/Room";
import LabelIcon from "@mui/icons-material/Label";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Link } from "react-router-dom";
export default function Share() {
  const PF = `http://localhost:3000/App_Media/assets/`
  return (
    <div className="share">
      <div className="shareWrapper">
        <Link to="/profile/:username" style={{textDecoration: "none"}}>
          <div className="shareTop">
            <img
              className="shareProfileImg"
              src={` ${PF}person/1.jpeg `}
              alt=""
            />
            <input
              placeholder="Liên tên bạn muốn nhập "
              className="shareInput"
            />
          </div>
        </Link>

        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video </span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotionsIcon htmlColor="golden" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
