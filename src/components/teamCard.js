import React from "react"

const TeamCard = props => (
  <div className="card">
    <div className="card-header">
      <img src="https://picsum.photos/200" />
      <h4>{props.name}</h4>
      <h4>{props.title}</h4>
    </div>
    <div className="card-body">
      <p>{props.desc}</p>
    </div>
  </div>
)

export default TeamCard
