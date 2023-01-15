import { useContext } from "react"
import { StudentsContext } from "../Context/StudentsContext"

export const useStudentsContext = ()=>{
    const context = useContext(StudentsContext);

    if(!context){
        throw Error('useStudentsContext must be used inside an StudentsContextProvider')
    }

    return context;
}