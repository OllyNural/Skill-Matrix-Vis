import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RadialChartTotal from "../components/RadialChartTotal"

const getIntro = () => (
  <div>
    <h2> Radar Charts of Individual Areas </h2>
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
