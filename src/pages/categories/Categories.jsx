import React from 'react'
import './Categories.css'
import { Card } from '../../components/QuizzCard/Card'
import {useCategories} from "../../context/CategoriesContext"
import { useQuiz } from '../../context/quizContext'

const Categories = () => {
  const {category} = useCategories()
  return (
    <div className ="card-container" >
      {category && 
      category.map((quiz)=><Card quiz= {quiz} key={quiz.id}/>)}
    </div>
  )
}

export default Categories
