import React from "react";
import Box from "../box/Box";
import "./summarybox.scss";
import {
  buildStyles,
  CircularProgressbarWithChildren,
  CircularProgressbar,
} from "react-circular-progressbar";
import { colors } from "../../constants";

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className='summary-box'>
        <div className='summay-box_info'>
          <div className='summary-box_info_title'>
            <div>{item.title}</div>
            <span>{item.subtitle}</span>
          </div>
          <div className='summary-box_info_value'>{item.value}</div>
        </div>
        <div className='summary-box_chart'>
          <CircularProgressbarWithChildren
            value={item.percent}
            strokeWidth={10}
            styles={buildStyles({
              pathColor: item.percent < 50 ? colors.red : colors.purple,
              trailColor: "transparent",
              strokeLinecap: "round",
            })}
          >
            <div className='summary-box_chart_value'>{item.percent}%</div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;
