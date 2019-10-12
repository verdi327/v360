import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
        description="We're a full service print and digital marketing agency that uses data to create targeted political campaigns"
      />

      <header className="page-head">
        <h2 className="page-head-title">
          We're a full service marketing agency that uses data to personalize
          political campaigns
        </h2>
      </header>

      <div class="post-content-body">
        <h4>The Goal</h4>
        <p>
          As a campaign manager it is your job to ensure your candidate gets
          elected. While there are many components that go into a successful
          campaign, you know that executing a well thought out marketing plan is
          a top priority.
        </p>

        <h4>The Problem</h4>
        <p>
          Your campaign is limited in both time and funds. You need the highest
          return on your investment but your not exactly sure what topics are
          important to each voter. So, you create a campaign that touches on all
          of your candidate's talking points, hoping that at least one resonates
          with your voter.
        </p>

        <p>
          The problem with the above scenario is that you are guessing what is
          important to each voter. By sending a baragge of talking points, you
          create too much noise while wasting valuable campaign dollars. In an
          ideal world, you would tailor your messaging to only the topics that
          are important to each voter like crime, education, traffic, tax reform
          etc...
        </p>

        <h4>The Solution</h4>
        <p>
          Use the latest technology in big data analysis to create unqiue voter
          profiles from hundreds of data points. By knowing what is important to
          each voter, you can create highly personalized marketing campaigns
          that reach the voter on the channels they are most likely to frequent
        </p>

        <p>
          The margin of victory in today's races is too small to rely on
          one-size-fits-all marketing campaigns. Upgrade your marketing hammer
          to a scapel and start winning more elections today.
        </p>
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
