import React from 'react'
import DashboardWrapper, { DashboardWrapperMain, DashboardWrapperRight } from '../components/dashboardwrapper/DashboardWrapper'
import { data } from '../constants'
import SummaryBox from '../components/summarybox/SummaryBox'
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
     <div className="row">
      <div className="col-8 col-md-12">
        <div className="row">
          {data.summary.map((item, index)=>(
            <div className="col-6 col-md-6 col-sm-12 mb">
              <SummaryBox item={item} />

            </div>
          ))}

        </div>

      </div>

     </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
      DashboardWrapperRight

      </DashboardWrapperRight>
    </DashboardWrapper>
  )
}

export default Dashboard