import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
  Box,
  makeStyles,
  Typography,
  Tabs,
  Tab,
} from '@material-ui/core';
import ChipIcon from '../components/chipIcon'

import Layout from "../components/layout"
import SEO from "../components/seo"
import RadialChartTotal from "../components/RadialChartTotal"
import OverallBarChartTotal from "../components/OverallBarChartTotal"

const useStyles = makeStyles(theme => ({
  iconContainer: {
    width: '50%',
    display: 'flex',
    padding: '0px 20px 10px 20px',
    justifyContent: 'space-around',
    marginBottom: '36px',
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

const MatrixPage = () => {
  const classes = useStyles();
  // Page Tab stuff
  const [value, setValue] = React.useState(0);
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  // GraphQL stuff
  const {
    allTuringJson,
    allKilburnJson,
  } = useStaticQuery(query)

  const allData = [...allTuringJson.nodes, ...allKilburnJson.nodes]

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

  const handleFilter = (club) => {
    setFilters(filters.map((filter, i) => {
      if (filter.club === club) {
        return { ...filter, isSelected: !filter.isSelected }
      } else {
        return filter
      }
    }));
  }

  const filteredData = allData.filter(node => filters.some((filter) => (filter.isSelected && node.club === filter.club)));
  return (
    <Layout>
      <SEO title="Home" />
      <Box component='div' className={classes.iconContainer}>
        <Typography variant='h6'>Club Filters:</Typography>
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
      <Box component='div'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Summary" />
          <Tab label="Per Skill" />
          <Tab label="Per person (coming soon)" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <OverallBarChartTotal allData={filteredData} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RadialChartTotal allData={filteredData} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <p><i>Made with <a href="https://github.com/uber/react-vis">React-Vis</a></i></p>
      </Box>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default MatrixPage

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
  }
}
`