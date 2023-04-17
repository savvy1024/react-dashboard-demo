import React from 'react'
import './main-layout.scss'
import {Outlet, outlet} from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'
import Topnav from '../components/topnav/TopNav'


const MainLayout = () => {
  return (
    <>
    <Sidebar />
    <div className="main">
        <div className="main_content">
            <Topnav />
            <Outlet />
        </div>
    </div>
     </>
  )
}

export default MainLayout