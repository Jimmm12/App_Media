import "./profile.css";
import Feed from "../../components/feed/Feed";
import TopBar from "../../components/topbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
export default function Profile() {
  const PF = `http://localhost:3000/App_Media/assets/`
  return (
    <>
      <TopBar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCovcerImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}/person/7.jpeg `}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Trần Tiến Huy</h4>
              <span className="profileInfoDesc">Huy trần </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
