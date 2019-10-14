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
              name="Michael DeMos"
              title="Chief Executive Officer"
              desc="Michael is a proven business leader with a 25+ year track record of building successful marketing companies with a focus on project management and execution."
              img={data.michaelDemos.childImageSharp.fixed}
            />
          </div>
          <div className="col-6">
            <TeamCard
              name="Brian White"
              title="Political Director"
              desc="Brian is also the President of Creative Print Group and is the trusted marketing partner of many Maryland Democratic political campaigns."
              img={data.brianWhite.childImageSharp.fixed}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            <TeamCard
              name="Joe Petrucci"
              title="Strategist Lead"
              desc="Joe is also a Founder of Waybetter marketing and brings deep expertise in using data to built multi-channel marketing strategies."
              img={data.joePetrucci.childImageSharp.fixed}
            />
          </div>
          <div className="col-6">
            <TeamCard
              name="Joe Casalino"
              title="Research and Polling Lead"
              desc="Joe is an experienced non-profit fundraising manager where he utilizes data to tailor the right message to the right person."
              img={data.joeCasalino.childImageSharp.fixed}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <TeamCard
              name="Leigh Ziegler"
              title="Accounts Lead"
              desc="Leigh thrives in fast paced environments and is our main point of contact for customers ensuring open communication throughout."
              img={data.leighZiegler.childImageSharp.fixed}
            />
          </div>
          <div className="col-6">
            <TeamCard
              name="Michael Verdi"
              title="Voter Engagement Manager"
              desc="Michael is an experienced software engineer with expertise in big data analytics and web development."
              img={data.michaelVerdi.childImageSharp.fixed}
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
    michaelDemos: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/michael-demos/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    brianWhite: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/brian-white/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    joeCasalino: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/joe-casalino/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    joePetrucci: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/joe-petrucci/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    leighZiegler: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/leigh-ziegler/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    michaelVerdi: file(
      relativeDirectory: { eq: "profile-photos" }
      name: { regex: "/michael-verdi/" }
    ) {
      childImageSharp {
        fixed(width: 200, height: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
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
