import { useContext } from "react"
import { StudentContext } from "../Context/StudentContext"

export const useStudentContext = ()=>{
    const context = useContext(StudentContext);

    if(!context){
        throw Error('useStudentContext must be used inside an StudentContextProvider')
    }

    return context;
}