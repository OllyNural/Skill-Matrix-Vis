import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RadialChartTotal from "../components/RadialChartTotal"

const getIntro = () => (
  <div>
    <h2> DevOps Skills Gap Analysis </h2>
    <p> Figured it would be fun to play around with some the data collected from all the submitted things. </p>
    <p> This should let us create our own analysis of the data, and display any graphs we want etc </p>
  </div>
)

const MatrixPage = () => (
  <Layout>
    <SEO title="Home" />
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() =>
        <div>
          {getIntro()}
          <RadialChartTotal />
          <p><i>Made with <a href="https://github.com/uber/react-vis">React-Vis</a></i></p>
        </div>
      }
    />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default MatrixPage
