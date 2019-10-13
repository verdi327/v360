import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ServicesPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Services"
        description="We're with you for the entirety of your marketing campaign. From strategy to design to execution."
      />

      <header className="page-head">
        <h2 className="page-head-title">
          From strategy to design to execution we're with you for the entirety
          of your marketing campaign
        </h2>
      </header>

      <div className="post-content-body">
        <div className="row">
          <div className="col-4">
            <h4>Strategy</h4>
            <ul>
              <li>
                Create unique voter profiles based off hundreds of data points
              </li>
              <li>Match the right message to the right voter</li>
              <li>
                Determine what distribution channels will be most effective
              </li>
            </ul>
          </div>

          <div className="col-4">
            <h4>Design</h4>
            <ul>
              <li>Impactful marketing copy</li>
              <li>Hi-res print and digital graphics</li>
              <li>Video and audio editing</li>
            </ul>
          </div>

          <div className="col-4">
            <h4>Execution</h4>
            <ul>
              <li>TV, radio and print media buying and PR</li>
              <li>Custom print and direct mail</li>
              <li>Social media buying and placement</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ServicesPage location={props.location} data={data} {...props} />
    )}
  />
)
