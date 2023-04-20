import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

const defaultTodo = [{value:"Learn new things for web or mobile", isCompleted:false}]

const GlobalProvider = ({children}) => {
    const  [todo,setTodo] = useState(defaultTodo);

    const values = {
        todo,
        setTodo
       
    };

    return(
        <GlobalContext.Provider value={values} >{children}</GlobalContext.Provider>
    )
}

export const useTodoContext = () => useContext(GlobalContext);

export default GlobalProvider;