import React, { useState } from "react";
import { useTodoContext } from "../Context/GlobalContext";
import { BsFillPlusCircleFill } from "react-icons/bs";

function TodoList() {
  const [items, setItems] = useState("");
  const { todo, setTodo } = useTodoContext();
  const addTodo = (newItems) => {
    setTodo([...todo,newItems])
}
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!items) {
      return;
    }

    addTodo({value:items, isCompleted:false});
    setItems("");
  };

  return (
    <div className="flex flex-col items-center justify-center" >
      <h2 className="mb-8 text-center text-gray-200 bg-transparent text-8xl">
        todos
      </h2>
     
      <form onClick={handleSubmit} className="flex whitespace-nowrap items-center justify-between lg:w-[800px] gap-6 p-2 bg-white rounded-full shadow-2xl mb-10">
        <input
          placeholder="Add ToDo ..."
          type="text"
          maxLength="40"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          className="px-6 py-3 placeholder-black rounded-md outline-none w-72"
        />
        <button className="h-full px-5 py-2 font-medium rounded-md">
        <BsFillPlusCircleFill color="#00928b" size={30} />
        </button>
      </form>
      </div>
  
  );
}

export default TodoList;
