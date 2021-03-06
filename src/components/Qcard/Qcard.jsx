import React,{useState} from 'react'
import { useQuiz } from '../../context/quizContext'
import {Link} from 'react-router-dom'
import "./Qcard.css"
const Qcard = ({q}) => {
  const [selectedAnswer ,setSelectedAnswer] =useState([])
  const [answer , setAnswer] =useState()
  const {score ,setScore} = useQuiz()
  const [bool, setBool] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const ques= q
  var num = 0
  if(selectedAnswer === answer){
    num = num + 10
    setScore(score+num)
    setSelectedAnswer("")
  }
  return (
    <div>
        <h1>{ques.categoryName}</h1>
        {!bool?<>
        {ques.mcqs.map((question)=>(
            <div className='wrapper'>
            <h2>{question.question}?</h2>
            <div className='opt'>
              {question.options.map(
                (option) => (
                  <button disabled={disabled}
                    key={option.id} className='opt-btn'
                    onClick={() => {
                      setSelectedAnswer(option)
                      setAnswer(question.answer)
                      setDisabled(true)
                    }}>
              {option}
              </button>))}</div>
            </div>
        ))}
        <button className='btn'
          onClick={
            () => setBool(true)}>
          Submit
        </button></> :
          <>
          <h1>Result</h1>
            <h3>Total Score:{score}</h3>
            {ques.mcqs.map((question)=>(
            <div className='wrapper'>
            <h2>{question.question}?</h2>
            <p>Answer:{question.answer}</p>
            </div>
        ))}
          </>
        }</div>
  )
}

export default Qcard
