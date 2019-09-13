import React from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';
import { StaticQuery, graphql } from 'gatsby';

import RadialChart from './charts/RadialChart'

const data = [
  {
    subject: 'Subject1', 1: 120, B: 110, fullMark: 150,
  },
  {
    subject: 'Subject2', 1: 98, B: 130, fullMark: 150,
  },
  {
    subject: 'Subject3', 1: 86, B: 130, fullMark: 150,
  },
  {
    subject: 'Subject4', 1: 99, B: 100, fullMark: 150,
  },
  {
    subject: 'Subject5', 1: 85, B: 90, fullMark: 150,
  },
  {
    subject: 'Subject6', 1: 65, B: 85, fullMark: 150,
  },
];

const RadialChartTotal = () => (
  <StaticQuery
    query={query}
    render={({ allTuringJson }) => {
      console.log(allTuringJson);

      let filteredData;

      allTuringJson.edges.map((edge, i) => {
        console.log(i)
        console.log(edge.node);
        return edge.node.ContinuousIntegration
      });

      // End result
      const endData = [
        {
          "ContinuousIntegration": [
            {
              type: 'Automation', level: 4
            },
            {
              type: 'Gradle', level: 3
            },
            {
              type: 'Jenkins', level: 1
            },
            {
              type: 'Maven', level: 5
            }
          ]
        },
        {
          "SourceControl": [
            {
              type: 'SourceControl', level: 4
            },
            {
              type: 'SourceControl', level: 3
            },
            {
              type: 'SourceControl', level: 1
            },
            {
              type: 'SourceControl', level: 5
            }
          ]
        }
      ]

      return (
        <RadialChart data={data} />
      )
    }}
  />
);

export default RadialChartTotal;

const query = graphql`
query MyQuery {
  allTuringJson {
    edges {
      node {
        SourceControl {
          level
          type
        }
        Security {
          level
          type
        }
        Processes {
          level
          type
        }
        Other {
          level
          type
        }
        Orchestration {
          level
          type
        }
        MonitoringAlerting {
          level
          type
        }
        Language {
          level
          type
        }
        Hosting {
          level
          type
        }
        Environment {
          level
          type
        }
        Deploy {
          level
          type
        }
        ContinuousIntegration {
          level
          type
        }
      }
    }
  }
}
`