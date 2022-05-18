import React from 'react'
import { Link } from 'react-router-dom'
import {Bot} from '../../components/bot/Bot'
import './Home.css'
const Home = () => {
  return (
    <div style={{margin:"2rem"}}>
      <h1>Hello there I'm Quizzy</h1>
      <p className='p'>If you like to play quiz then you are at the right place</p>
      <Bot/>
      <Link to="/categories">
      <button className="exp-btn">Let's Go!</button>
      </Link>
    </div>
  )
}

export default Home
