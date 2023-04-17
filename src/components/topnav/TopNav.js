import React from "react";
import UserInfo from "../userinfo/Userinfo";
import './topnav.scss'
import {data} from '../../constants'

const Topnav = () => {
  return (
    <div className='topnav'>
      <UserInfo user={data.user}/>
      <div className='sidebar-toggle'>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default Topnav;
