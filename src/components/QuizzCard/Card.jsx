import React from 'react'
import "./Card.css"

const Card = ({quiz}) => {
  return (
    <div className="horizontal-card">
    <img className="card-img" src= {quiz.img} alt="#"/>
    <div className="card-content">
        <h2>{quiz.categoryName}</h2>
        <p>{quiz.description}</p>
        <button className="card-btn">Let's Play</button>
    </div>
</div>
  )
}

export {Card}
