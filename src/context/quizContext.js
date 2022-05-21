import axios from 'axios'
import {createContext ,useContext, useEffect, useState} from 'react'

const QuizContext = createContext()

const useQuiz = () => useContext(QuizContext)

const QuizProvider = ({children}) =>{
    const [cat ,setCat] =useState("")
    const [score ,setScore] =useState(0)
    const [quiz ,setQuiz] = useState()
    useEffect(()=>{
        const fetchData = async() =>{
            const {data} = await axios.get("/api/quizzes")
            setQuiz(data.quizes)  
        }
        fetchData()},[])

    return(
        <QuizContext.Provider value={{quiz ,cat,setCat ,score,setScore}}>
            {children}
        </QuizContext.Provider>
    )
}

export {useQuiz ,QuizProvider}