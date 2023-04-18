import React from 'react';
import './revenuelist.scss';
import { data } from '../../constants';
import ProgressBar from '../progressbar/ProgressBar';

const RevenueList = () => {
  return (
    <ul className='revenue-list'>
      {data.revenueByChannel.map((item, index) => (
        <li className='revenue-list_item' key={`revenue-${index}`}>
          <div className='revenue-list_item_title'>
            {item.title}

            <span
              className={`${item.value > 50 ? 'text-success' : 'text-danger'}`}
            >
              {item.value}%
            </span>
          </div>
          <div>
            <ProgressBar value={item.value} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RevenueList;
