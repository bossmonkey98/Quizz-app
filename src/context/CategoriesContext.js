import axios from "axios"
import {useEffect, useState, useContext,createContext } from "react"

const CategoriesContext = createContext()

const useCategories = () => useContext(CategoriesContext)

const CategoriesProvider = ({children})=>{
    const [category ,setCategory] = useState()
        const fetchCategories = async()=>{
            const  {data} = await axios.get("./api/categories")
            setCategory(data.categories)
        }
    useEffect(()=>{fetchCategories()},[])

    return(
        <CategoriesContext.Provider value ={{category}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export {useCategories , CategoriesProvider}