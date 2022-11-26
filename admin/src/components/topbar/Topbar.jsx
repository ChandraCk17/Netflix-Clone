import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">chandramoonadmin</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
                <NotificationsNone />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                <Language />
                <span className='topIconBadge'>2</span>
              </div>
              <div className="topbarIconContainer">
                <Settings />
              </div>
              <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEdAMzSoTSRIg/profile-displayphoto-shrink_800_800/0/1649517237797?e=2147483647&v=beta&t=3QqPoE291MW4Fc52AlA62lpbipiF0bhLYXiWDH3wtQQ" alt="" className='topAvatar' />
            </div>  
        </div>
    </div>
  );
}
