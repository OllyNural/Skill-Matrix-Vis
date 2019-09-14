import React from 'react';
import { StaticQuery, graphql, useStaticQuery } from 'gatsby';
import {
  Box,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { ResponsiveContainer } from 'recharts'

import RadialChart from './charts/RadialChart'
import ChipIcon from '../components/chipIcon'

import config from '../../config/config'
import { useState } from 'react';
const { fullMark } = config;

const useStyles = makeStyles(theme => ({
  gridRoot: {
    flexGrow: 1,
  },
  radialChartList: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  }
}));

const RadialChartTotal = () => {
  const classes = useStyles();

  const {
    allTuringJson,
    allKilburnJson,
    site: { siteMetadata: { clubs } }
  } = useStaticQuery(query)

  const allGraphData = [...allTuringJson.nodes, ...allKilburnJson.nodes]
  const [allData, setAllData] = useState(allGraphData);
  const [allFilterButton, setAllFilterButton] = useState(true)
  const [filters, setFilters] = useState([
    {
      club: 'Turing',
      isSelected: true,
    },
    {
      club: 'Kilburn',
      isSelected: true,
    }
  ]);

  let filteredData = [];
  let resultCount = allTuringJson.nodes.length;

  const handleFilter = (club) => {
    setFilters(filters.map((filter, i) => {
      if (filter.club === club) {
        return { ...filter, isSelected: !filter.isSelected }
      } else {
        return filter
      }
    }));
  }

  allData
    .filter(node => filters.some((filter) => (filter.isSelected && node.club === filter.club)))
    .forEach((node, i) => {
      node.skills.forEach((skill, j) => {
        if (i === 0) {
          // Initialize our array with new object structure
          filteredData[j] = {
            title: skill.title,
            count: resultCount,
            values: skill.values.map(({ type }) => ({ type, fullMark }))
          }
        }
        // Append our values to it
        skill.values.forEach(({ level }, valueIndex) => {
          filteredData[j].values[valueIndex][i] = level
        })
      })
    });

  console.log(filteredData);

  return (
    <Box component='div' >
      <Box component='div' className={classes.iconContainer}>
        {
          filters.map(filter => {
            return (
              <ChipIcon
                label={filter.club}
                onClick={() => handleFilter(filter.club)}
                isSelected={filter.isSelected}
              />
            )
          })
        }
      </Box>

      <Grid container className={classes.root} spacing={2}>
        {
          filteredData.map((data) => {
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

const query = graphql`
query RadialChartTotal {
  allTuringJson {
    nodes {
      skills {
        title
        values {
          level
          type
        }
      }
      name
      club
    }
  },
  allKilburnJson {
    nodes {
      skills {
        title
        values {
          level
          type
        }
      }
      name
      club
    }
  },
  site {
    siteMetadata {
      clubs
    }
  }
}
`