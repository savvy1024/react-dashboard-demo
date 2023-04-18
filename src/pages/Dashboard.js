import React from "react";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboardwrapper/DashboardWrapper";
import { colors, data } from "../constants";
import SummaryBox, {
  SummaryBoxSpecial,
} from "../components/summarybox/SummaryBox";
import Box from "../components/box/Box";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import OverrallList from "../components/overralllist/OverrallList";
import RevenueList from '../components/revenuelist/RevenueList';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const Dashboard = () => {
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className='row'>
          <div className='col-8 col-md-12'>
            <div className='row'>
              {data.summary.map((item, index) => (
                <div className='col-6 col-md-6 col-sm-12 mb'>
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className='col-4 hide-md'>
            <SummaryBoxSpecial item={data.revenueSummary} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Box>
              <RevenueByMonthsChart />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb">OverRallk</div>
        <div className="mb">
          <OverrallList />
        </div>
        <div className="title mb">Revenue by channel</div>
        <div className="mb">
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

export default Dashboard;

const RevenueByMonthsChart = () => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: {
        grid: {
          display: false,
          drawBorder: false,
        }
      },
      yAxes: {
        grid: {
          display: false,
          drawBorder: false,
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      }
    },
    elements: {
      bar: {
        backgroundColor: colors.orange,
        borderRadius: 20,
        borderSkipped: "bottom",
      }
    }
  };

  const chartData = {
    labels: data.revenueByMonths.labels,
    datasets: [{
      label: "Revenue",
      data: data.revenueByMonths.data,
    }]
  };

  return (
    <>
      <div className='title'>Revenu by months</div>
      <div>
        <Bar options={chartOptions} data={chartData} height={`300px`}></Bar>
      </div>
    </>
  );
};
