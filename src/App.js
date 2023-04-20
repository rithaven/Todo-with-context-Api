import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";
import GlobalContext from "./Context/GlobalContext";




function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-contain bg-tealBlue max-w-screen">
      <div className="relative flex-col w-screen text-center">
      <GlobalContext>
        <TodoList/>
        <Todo/>
      </GlobalContext>
      </div>
    </div>
  );
}

export default App;
