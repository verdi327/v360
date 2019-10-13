import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Calendly from "../components/calendly"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ContactPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Contact Us"
        description="Book a call to learn more about our approach to personalized campaigning and how we can help your candidate earn more votes"
      />

      <header className="page-head">
        <h2 className="page-head-title">
          We're a remote first team with our headquarters located in Baltimore,
          MD
        </h2>
      </header>

      <div className="post-content-body contact-page">
        <div className="row">
          <div className="col-4">
            <h4>Office</h4>
            <p>6115 Falls Rd, Baltimore, MD 21209</p>
            <h4>Phone</h4>
            <p>(410) 561-8886</p>
            <h4>Email</h4>
            <p>hello@victory-360.com</p>
          </div>
          <div className="col-8">
            <h4>Ready to learn more?</h4>
            <p>
              The best way to learn more is to schedule a call directly with CEO
              Michael DeMos
            </p>

            <Calendly />
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
      <ContactPage location={props.location} data={data} {...props} />
    )}
  />
)
