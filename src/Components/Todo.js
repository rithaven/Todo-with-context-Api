import React from "react";
import { useTodoContext } from "../Context/GlobalContext";
import { MdDelete } from "react-icons/md";
import { useState } from "react";



function Todo() {
  const { todo, setTodo } = useTodoContext();
 
  

const deleteTodo = (Index) => {
    const deletedTodos = todo.filter((i,index) => index !== Index);
    setTodo(deletedTodos)
}
  
  const handleChange = (index) => {
    setTodo(strickTodo=>{
      strickTodo[index].isCompleted = true
      return strickTodo
    })
      
  }
  
  return (
    <div className="flex flex-col items-center w-full gap-5 text-center">
        <div className="flex flex-col w-1/2 px-3 py-5 rounded-md backdrop-blur-lg">
          {todo.map((todo, index) => (
          
            <div className="flex items-center justify-between w-full gap-2 border-b">
             
              <div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={index}
                className="flex px-4 py-3 font-medium cursor-pointer "
              >
                <input  
              type="checkbox"
              name="agreement"
              value={todo.isCompleted}
              onChange={()=>handleChange(index)}
              className="mr-2 text-left break-normal list-none "
            />
              <p className={`${todo.isCompleted && 'line-through' }  `} >{todo.value}</p>
              </div>
              
             
              <button onClick={() => deleteTodo(index)}>
                <MdDelete color="red" size={30} />
              </button>
            </div>
          ))}
        </div>
      </div>
    
  );
}

export default Todo;
