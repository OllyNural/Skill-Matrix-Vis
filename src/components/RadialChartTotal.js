import React from 'react';
import {
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';

import RadialChart from './charts/RadialChart'

import config from '../../config/config'
const { fullMark } = config;

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: 1,
  },
  radialChartList: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  iconContainer: {
    width: '50%',
    display: 'flex',
    padding: '0px 20px 10px 20px',
    justifyContent: 'space-around',
    marginBottom: '36px',
  }
}));

const RadialChartTotal = (props) => {
  const classes = useStyles();
  const { allData } = props;
  let formattedData = [];
  let resultCount = allData.length;

  allData
    .forEach((node, i) => {
      node.skills.forEach((skill, j) => {
        if (i === 0) {
          // Initialize our array with new object structure
          formattedData[j] = {
            title: skill.title,
            count: resultCount,
            values: skill.values.map(({ type }) => ({ type, fullMark }))
          }
        }
        // Append our values to it
        skill.values.forEach(({ level }, valueIndex) => {
          formattedData[j].values[valueIndex][i] = level
        })
      })
    });

  return (
    <Box component='div' >
      <Grid container className={classes.root} spacing={2}>
        {
          formattedData.map((data) => {
            return (
              <Grid item xs={12} sm={6} lg={4} >
                <RadialChart key={data.title} data={data} />
              </Grid>
            )
          })
        }
      </Grid>
    </Box>
  )
};

export default RadialChartTotal;
