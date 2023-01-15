import { createContext, useReducer } from 'react';

export const StudentContext = createContext();

const studentReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STUDENT':
            return {
                student: action.payload
            }
        default:
            return {
                state
            }

    }

}

export const StudentContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(studentReducer, { student: null })

    return (
        <StudentContext.Provider value={{ ...state, dispatch }}>{children}
        </StudentContext.Provider>
    )
}