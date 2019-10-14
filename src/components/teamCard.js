import React from "react"
import Img from "gatsby-image"

const TeamCard = props => (
  <div className="card">
    <div className="card-header">
      <Img fixed={props.img} />
      <h4>{props.name}</h4>
      <h4>{props.title}</h4>
    </div>
    <div className="card-body">
      <p>{props.desc}</p>
    </div>
  </div>
)

export default TeamCard

// const bioQuery = graphql`
//   query BioQuery {
//     avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
//       childImageSharp {
//         fixed(width: 50, height: 50) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }
//     site {
//       siteMetadata {
//         author
//         social {
//           twitter
//         }
//       }
//     }
//   }
// `
