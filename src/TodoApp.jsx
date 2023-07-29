import { useState } from "react";
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis";

export const TodoApp = () => {
  //   const { data: todos = [], isLoading } = useGetTodosQuery();

  const [todoId, setTodoId] = useState(1);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId((state) => state + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId((state) => state - 1);
  };
  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>{isLoading ? "True" : "False"}...</h4>

      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={prevTodo}>prev todo</button>

      <button onClick={nextTodo}>next todo</button>

      {/* <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <strong>({todo.completed ? "Done ✅" : "Pending 🕒"})</strong>
          </li>
        ))}
      </ul> */}
    </>
  );
};
