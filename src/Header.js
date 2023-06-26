import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificaitonIcon from '@mui/icons-material/Notifications';

import HeaderOption from './HeaderOption';
function Header() {
    return (
        <div className='header'>
          
            <div className="header_left">
                <img src="https://cdn.iconscout.com/icon/free/png-512/free-linkedin-160-461814.png?f=avif&w=256" alt="" />
                <div className="header__search">
                    <SearchIcon/>
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccountIcon} title="Mynetwork"/>
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificaitonIcon} title="Notification"/>
                <HeaderOption Avatar="https://lh3.googleusercontent.com/-J90sK2kmMWQ/AAAAAAAAAAI/AAAAAAAAAAA/AGvMrBtLphl8OEebdxi9dtamBqlJjiRuhg/photo.jpg?sz=46" title="me"/>
                
            </div>
        </div>
    )
}

export default Header
