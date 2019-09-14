import React from 'react';
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

import config from '../../../config/config'
const { fullMark } = config;

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const RadialChartTotal = ({ data: { title, values, count } }) => {
    return (
        <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={values}>
            <PolarGrid />
            <PolarAngleAxis dataKey="type" />
            <PolarRadiusAxis angle={30} domain={[0, fullMark]} />
            {
                Array(count).fill().map((_, i) => {
                    const colour = randomColor()
                    return (
                        <Radar key={i} dataKey={i} stroke={colour} fill={colour} fillOpacity={0.3} />
                    )
                })
            }
        </RadarChart>
    )
};

export default RadialChartTotal;
