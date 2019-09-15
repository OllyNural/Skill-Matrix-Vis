import React from 'react';
import {
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';

import BarChart from './charts/BarChart'

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: 1,
  },
}));

const data = [
  {
    name: 'SourceControl', total: 1000,
  },
  {
    name: 'Page B', total: 3000,
  },
  {
    name: 'Page C', total: 2000,
  },
  {
    name: 'Page D', total: 2780,
  },
  {
    name: 'Page E', total: 1890,
  },
  {
    name: 'Page F', total: 2390,
  },
  {
    name: 'Page G', total: 3490,
  },
];

const OverallBarChartTotal = (props) => {
  const classes = useStyles();
  const { allData } = props;
  let formattedData = [];
  console.log('OverallBarChartTotal');
  console.log(allData);

  allData.forEach((node, i) => {
    node.skills.forEach((skill, j) => {
      // console.log(skill.title)
      if (i === 0) {
        // Initialize our array with new object structure
        formattedData.push({
          name: skill.title,
          total: 0,
        })
      }
      const sumValues = skill.values.reduce((prev, curr) => prev + curr.level, 0)
      const foundSkill = formattedData.find(elem => {
        return (elem.name === skill.title)
      });
      foundSkill.total += sumValues
    })
  });

  formattedData = formattedData
    .map(node => {
      return { ...node, total: node.total / allData.length }
    })
    .map((node, i) => {
      console.log(allData[0].skills[i].values.length)
      return { ...node, total: (node.total / allData[0].skills[i].values.length).toFixed(2) }
    })

  console.log(formattedData)

  return (
    <Box component='div' >
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12} >
          <BarChart key={formattedData.title} data={formattedData} />
        </Grid>
      </Grid>
    </Box>
  )
};

export default OverallBarChartTotal;
