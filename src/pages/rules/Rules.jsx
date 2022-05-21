import React from 'react'
import { Link } from 'react-router-dom'
import "./Rules.css"
const Rules = () => {
  return (
    <div>
      <h2 style={{margin:"2rem"}}>Rules</h2>
      <ul className='rules'>
          <li>Each question is provided with four options in which one of them is correct answer</li>
          <li>Time alloted for each question is 15 sec</li>
          <li>You cannot change the answer once the answer is submitted</li>
          <li>For every correct answer you are awarded 10 points</li>
          <li>There is no negative marking</li>
          <li>Be calm  and do your best</li>
      </ul>
      <Link to="/quiz">
      <button className='btn'>Proceed to quiz</button>
      </Link>
    </div>
  )
}

export default Rules
