
import { useTodoContext } from "../Context/GlobalContext";
import { MdDelete } from "react-icons/md";

function Todo() {
  const { todo, setTodo } = useTodoContext();

  const deleteTodo = (Index) => {
    const deletedTodos = todo.filter((i, index) => index !== Index);
    setTodo(deletedTodos);
  };

  const handleChange = (index) => {
    setTodo((strickTodo) => {
      const newTodo = [...strickTodo];
      return newTodo.map((item, todoIndex) => {
        if (todoIndex === index) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      });
    });
  };

  return (
    <div className="flex flex-col items-center w-full gap-5 text-center">
      <div className="flex flex-col w-1/2 px-3 py-5 rounded-md backdrop-blur-lg">
        {todo.map((item, index) => (
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
                name="checkbox"
                checked={item.isCompleted}
                onChange={() => handleChange(index)}
                className="mr-2 text-left break-normal list-none "
              />
              <p className={`${item.isCompleted && "line-through"}  `}>
                {item.value}
              </p>
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
