import './topbar.css'
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from "react-router-dom";
export default function TopBar() {
    const PF = `http://localhost:3000/App_Media/assets/`
  return (
    <div className='topbarContaniner'>
        <div className='topbarLeft'>
            <Link to = "/App_Media" style={{textDecoration: "none"}}>
                <span className='logo'>FaceBook</span>
            </Link>
        </div>
        <div className='topbarCenter'>
            <div className='searchbar'>
                <SearchIcon className='SearchIcon'/>
                <input placeholder='Seaech for friend' className='searchInput'/>
            </div>
        </div>
        <div className='topbarRight'>
            <div className='tobarLinks'>
                <span className='topbarLink'>HomePage</span>
                <span className='topbarLink'>TimeLine</span>
            </div>
            <div className='topbarIcons'>
                <div className='topbarIconItem'>
                    <PersonIcon/>
                    <span className='topbarIconBadge'>
                        1
                    </span>
                </div>
                <div className='topbarIconItem'>
                    <ChatIcon/>
                    <span className='topbarIconBadge'>
                        1
                    </span>
                </div>
                <div className='topbarIconItem'>
                    <NotificationsIcon/>
                    <span className='topbarIconBadge'>
                        1
                    </span>
                </div>
            </div>
            <Link to = "/Login" style={{textDecoration: "none"}}>
                <img src={`${PF}person/1.jpeg`} alt='' className='topbarImg'/>
            </Link>
        </div>
    </div>
  )
}
