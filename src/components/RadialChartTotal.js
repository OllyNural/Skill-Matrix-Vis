import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import RadialChart from './charts/RadialChart'

import config from '../../config/config'
const { fullMark } = config;

const RadialChartTotal = () => (
  <StaticQuery
    query={query}
    render={({ allTuringJson }) => {
      console.log(allTuringJson);
      let filteredData = [];
      let resultCount = allTuringJson.nodes.length;

      allTuringJson.nodes.forEach((node, i) => {
        console.log(node);
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

      // End result
      console.log(filteredData)

      return (
        <>
          {
            filteredData.map((data) => {
              return (
                <RadialChart key={data.title} data={data} />
              )
            })
          }
        </>

      )
    }}
  />
);

export default RadialChartTotal;

const query = graphql`
query MyQuery {
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
    }
  }
}
`