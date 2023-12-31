import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
   const PF = `http://localhost:3000/App_Media/assets/`
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="bithdayImg" src={` ${PF}gift.png`} alt="" />
          <span className="bithdayText">
            {" "}
            Hôm nay sinh nhật của <b>huy dep trai</b> và <b>3 người khác</b>{" "}
          </span>
        </div>
        <img className="rightbarAd" src={` ${PF}ad.png`} alt="" />
        <h4 className="rightbarTitle"> Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              City:
            </span>
            <span className="rightbarInfoValue">
              New York
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              Form:
            </span>
            <span className="rightbarInfoValue">
              Madrid
            </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">
              Relationship:
            </span>
            <span className="rightbarInfoValue">
              Single
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={` ${PF}person/1.jpeg`}  alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/2.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/3.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/4.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/5.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/6.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
          <div className="rightbarFollowing">
            <img className="rightbarFollowingImg" src={`${PF}person/1.jpeg`} alt=""/>
            <span className="rightbarFollowingName">Huy Huy</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
