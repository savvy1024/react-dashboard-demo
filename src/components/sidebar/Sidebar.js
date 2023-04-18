import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { images } from "../../constants";
import sidebarNav from "../../configs/sidebarNav";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  console.log("location:", window.location);

  useEffect(() => {
    const curPath = window.location.pathname;
    console.log(curPath);
    const index = sidebarNav.findIndex(
      (item) => item.link === location.pathname
    );
    setActiveIndex(index);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main_content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main_content").style = "";
    }, 600);
  };

  return (
    <div className='sidebar'>
      <div className='sidebar_logo'>
        <img src={images.logo} alt='logo' />
        <div className='sidebar-close'>
          <i className='bx bx-x' onClick={closeSidebar}></i>
        </div>
      </div>
      <div className='sidebar_menu'>
        {sidebarNav.map((item, index) => (
          <Link
            to={item.link}
            key={`nav-${index}`}
            className={`sidebar_menu_item ${activeIndex === index && "active"}
                    }`}
            onClick={closeSidebar}
          >
            <div className='sidebar_menu_item_icon'>{item.icon}</div>
            <div className='sidebar_menu_item_text'>{item.text}</div>
          </Link>
        ))}
      </div>
      <div className='sidebar_menu_item'>
        <div className='sidebar_menu_item_icon'>
          <i className='bx bx-log-out'></i>
        </div>
        <div className='sidebar_menu_item_text'>Logout</div>
      </div>
    </div>
  );
};

export default Sidebar;
