import React from "react";

function GameCard(props) {
  return (
    <div className="box-content">
      <img src={props.img} alt={props.alt} />
      <h2>{ }</h2>
    </div>
  )
}

export default GameCard;