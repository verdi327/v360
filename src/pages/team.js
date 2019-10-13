import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import TeamCard from "../components/teamCard"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const TeamPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="Meet the Team"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <header className="page-head">
        <h2 className="page-head-title">
          We've assembled a team of doers with expertise in market research,
          data analysis, technology and business execution.
        </h2>
      </header>

      <div className="post-content-body">
        <div className="row">
          <div className="col-4"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-6">
            <TeamCard
              name="Michael Verdi"
              title="Technologist"
              desc="here is a really long description that I have just created now and I am excited about it too!"
            />
          </div>
          <div className="col-6">
            <TeamCard
              name="Michael DeMos"
              title="Founder and CEO"
              desc="here is a really long description that I have just created now and I am excited about it too!"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TeamCard
              name="Joe Demarco"
              title="Market Researcher"
              desc="here is a really long description that I have just created now and I am excited about it too!"
            />
          </div>
          <div className="col-6">
            <TeamCard
              name="Bryanna McKnight"
              title="Creative Director"
              desc="here is a really long description that I have just created now and I am excited about it too!"
            />
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
    smallPic: file(
      relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    largePic: file(
      relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <TeamPage location={props.location} data={data} {...props} />
    )}
  />
)
