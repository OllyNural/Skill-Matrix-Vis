import React from 'react';
import {
  Radar, RadarChart, PolarGrid,
  PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

import {
  Paper, makeStyles, Typography,
} from '@material-ui/core';

import config from '../../../config/config'
const { fullMark } = config;

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`

const useStyles = makeStyles(theme => ({
  paperHeader: {
    padding: '10px',
    textAlign: 'center',
  }
}))

const RadialChartTotal = ({ data: { title, values, count } }) => {
  const classes = useStyles();
  return (
    <Paper>
      <Typography variant={'h6'} className={classes.paperHeader} >{title}</Typography>
      <ResponsiveContainer width='100%' aspect={4.0 / 4.0}>
        <RadarChart outerRadius={90} data={values}>
          <PolarGrid gridType='circle' />
          <PolarAngleAxis dataKey="type" tick={{ fontSize: '0.7rem' }} />
          <PolarRadiusAxis angle={30} domain={[0, fullMark]} />
          {
            Array(count).fill().map((_, i) => {
              const colour = randomColor()
              return (
                <Radar isAnimationActive={false} key={i} dataKey={i} stroke={colour} fill={colour} fillOpacity={0.3} />
              )
            })
          }
        </RadarChart>
      </ResponsiveContainer>
    </Paper>
  )
};

export default RadialChartTotal;
