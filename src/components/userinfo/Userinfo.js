import React from "react";
import '../userinfo/userinfo.scss'

const UserInfo = ({ user }) => {
  return (
    <div className='user-info'>
      <div className='user-info_img'>
        <img src={user.img} alt='user' />
      </div>
      <div className="user-info_name">
        <span>{user.name}</span>
      </div>
    </div>
  );
};

export default UserInfo;
