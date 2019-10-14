import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Calendly from "../components/calendly"
import Vimeo from "@u-wave/react-vimeo"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"
const IndexPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Home"
        description="Victory360 creates personalized political marketing campaigns for democratic candidates in Maryland"
        keywords={[`victory360`, `Maryland`, `Democrats`, `digital marketing`]}
      />

      <header className="page-head">
        <h2 className="page-head-title">
          We're a full service marketing agency that uses data to personalize
          political campaigns
        </h2>
      </header>

      <div className="post-content-body">
        <h3>The Goal</h3>
        <p>
          As a campaign manager it is your job to ensure your candidate gets
          elected. While there are many components that go into a successful
          campaign, you know that executing a well thought out marketing plan is
          a top priority.
        </p>

        <h3>The Problem</h3>
        <p>
          Your campaign is limited in both time and funds. You need the highest
          return on your investment but your not exactly sure what topics are
          important to each voter. So, you create a campaign that touches on all
          of your candidate's talking points, hoping that at least one resonates
          with your voter.
        </p>

        <p>
          The problem with the above scenario is that you are guessing what is
          important to each voter. By sending a barrage of talking points, you
          create too much noise while wasting valuable campaign dollars. In an
          ideal world, you would tailor your messaging to only the topics that
          are important to each voter like crime, education, traffic, tax reform
          etc...
        </p>

        <h3>The Solution</h3>
        <p>
          Use the latest technology in big data analysis to create unqiue voter
          profiles from hundreds of data points. By knowing what is important to
          each voter, you can create highly personalized marketing campaigns
          that reach the voter on the channels they are most likely to frequent.
        </p>

        <h4>Our Approach</h4>
        <p>The video below outlines are approach in more detail.</p>

        <Vimeo video="365230864" responsive />

        <h3>What’s the value of a single vote?</h3>

        <p>
          Consider the recent Democratic primary for Baltimore County Executive.
          Johnny Olszewski won the bid by 17 votes, a margin of less than 0.1
          percent. As races become closer, it will be candidates that are able
          to connect with their voters that win, not those with the largest
          budgets.
        </p>

        <h3>Let's Connect</h3>

        <p>
          If you’re ready to connect with your constituents in ways that matter
          to them, then let’s talk. Use the following tool below to book time
          directly on my calendar.
        </p>

        <Calendly />
      </div>
    </Layout>
  )
}

const IndexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={IndexQuery}
    render={data => (
      <IndexPage location={props.location} props data={data} {...props} />
    )}
  />
)
