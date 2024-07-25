import {useContext, createContext} from "react"

export const ToDocontext=createContext({todos:[

                          {
                             id : 1,
                             todo: "ToDo msg",
                              completed: false,
                         } 
               
                          ], addTodo : (todo) => {},
                             updatedTodo: (id,todo) => {},
                             deleteTodo: (id) => {},
                            toggleComplete : (id)  => {} })
export const useTodo = () => {
    return useContext(ToDocontext)
}

export const Todoprovider=ToDocontext.Provider 