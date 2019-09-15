import React from 'react';
import {
  BarChart, LineChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer,
} from 'recharts';

import config from '../../../config/config'
const { fullMark } = config;

const CustomizedAxisTick = (props) => {
  const { x, y, stroke, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
    </g>
  );
};

const BarChartTotal = ({ data, title }) => {
  return (
    <ResponsiveContainer width='100%' aspect={4.0 / 2.0}>
      {/* <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      > */}
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
        <YAxis domain={[0, fullMark]} />
        <Tooltip />
        <Legend />
        <Line dataKey="total" fill="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default BarChartTotal