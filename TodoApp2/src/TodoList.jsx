// Commit Message:
// Added TodoList component with ability to add tasks using uuid keys.
//
// - Initialized todos state with a sample task that includes a unique id (uuidv4).
// - Implemented updateTodoValue() to track user input and update state.
// - Implemented addNewTask() to push a new todo object {task, id} into the todos array.
// - Used uuidv4 to generate unique keys for each <li> when rendering with map().
// - Ensures React can efficiently update the list and avoids key warnings.

import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function TodoList() {
  // todos: stores list of tasks, each task has {task, id}
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);

  // newTodo: stores the value of the current input text
  let [newTodo, setNewTodo] = useState("");

  // When Add Task button is clicked, push a new task object into todos
  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo(""); // clear input field
  };

  // Track the input field value
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  return (
    <div>
      <input
        placeholder="Add a Task "
        value={newTodo}
        onChange={updateTodoValue}
      />

      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <h3>Todo Task</h3>

      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.task}</li>; // key helps React track items
        })}
      </ul>
    </div>
  );
}
