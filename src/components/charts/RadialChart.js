import React from 'react';
import {
    Radar, RadarChart, PolarGrid, Legend,
    PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
    {
        subject: 'Math', 1: 120, B: 110, fullMark: 150,
    },
    {
        subject: 'Chinese', 1: 98, B: 130, fullMark: 150,
    },
    {
        subject: 'English', 1: 86, B: 130, fullMark: 150,
    },
    {
        subject: 'Geography', 1: 99, B: 100, fullMark: 150,
    },
    {
        subject: 'Physics', 1: 85, B: 90, fullMark: 150,
    },
    {
        subject: 'History', 1: 65, B: 85, fullMark: 150,
    },
];



// End result
const end = [
    {
        type: 'GIT', 1: 4, 2: 3, 3: 5, fullMark: 5
    }
]

const RadialChartTotal = ({ data }) => (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Mike" dataKey="1" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        <Legend />
    </RadarChart>
);

export default RadialChartTotal;
