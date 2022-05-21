import React from 'react'
import Qcard from '../../components/Qcard/Qcard'
import { useQuiz } from '../../context/quizContext'

const Quiz = () => {
 const {quiz ,cat} =useQuiz()

 if(quiz && cat!==""){
  var ques = quiz.filter((q)=>q.categoryName===cat)
 }
  return (
    <div>
      {ques && ques.map((q)=><Qcard q={q}/>)}
    </div>
  )
}

export default Quiz
