import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"
import {useQuiz} from '../../context/quizContext'
const Card = ({quiz}) => {
  const {cat ,setCat} =useQuiz()
  return (
    <div className="horizontal-card">
      <div className="card-img">
        <img className="card-img" src= {quiz.img} alt="#"/>
      </div>
    <div className="card-content">
        <h2>{quiz.categoryName}</h2>
        <p>{quiz.description}</p>
        <Link to="/rules">
        <button className="card-btn" onClick={()=>setCat(quiz.categoryName)}>Let's Play</button></Link>
    </div>
</div>
  )
}

export {Card}
