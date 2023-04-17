import React from 'react'
import './dashboardwrapper.scss'

const DashboardWrapper = props => {
  return (
    <div className='dashboard-wrapper'>
    {props.children}
    </div>
  )
}

export default DashboardWrapper;

export const DashboardWrapperMain = props => {
    
    return(
        <div className='dashboard-wrapper_main'>
            {props.children}
        </div>
    )
}

export const DashboardWrapperRight = props => {
    
    return(
        <div className='dashboard-wrapper_right'>
            {props.children}
        </div>
    )
}
