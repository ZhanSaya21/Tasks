// import { memo, useState } from "react";
// import PropTypes from "prop-types";

// export function Counter() {
//   const [count, setCount] = useState(0);

//   function addCount() {
//     setCount(count + 1);
//   }

//   function resetCount() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <p>
//         Счетчик <span>{count}</span>
//       </p>

//       <button onClick={addCount}>увеличить</button>
//       <button onClick={resetCount}>сбросить</button>
//     </div>
//   );
// }

// export const CounterNew = memo(function () {
//   const [count, setCount] = useState(0);

//   function addCount() {
//     setCount(count + 1);
//   }

//   function resetCount() {
//     setCount(0);
//   }

//   return (
//     <div>
//       <p>
//         Счетчик <span>{count}</span>
//       </p>

//       <button onClick={addCount}>увеличить1</button>
//       <button onClick={resetCount}>сбросить2</button>
//     </div>
//   );
// });

// export default CounterNew;

// export const Message = ({ username, message, onClick }) => {
//   return (
//     <div onClick={onClick}>
//       <h3>{username}</h3>
//       <p>{message}</p>
//     </div>
//   );
// };

// Message.propTypes = {
//   username: PropTypes.string.isRequired,
//   message: PropTypes.string.isRequired,
// };

// import React, { useState } from "react";

// export function Counter() {
//   const [count, setCount] = useState(0);

//   const imCrementCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>значение: {count}</p>
//       <button onClick={imCrementCount}>увеличить</button>
//     </div>
//   );
// }

// export function MyComponent() {
//   const [inputValue, setInputValue] = useState("");

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Введите текст"
//       />
//       <p>Вы ввели: {inputValue}</p>
//     </div>
//   );
// }

import React, { useState } from "react";

export function TaskLIst() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i == index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(index)}
              />
              <span
                style={{ textDecoration: task.completed ? "line-through" : "" }}
              >
                {task}
              </span>
            </div>
            <button onClick={() => deleteTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2> New Task</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          addTask();
        }}
      >
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="button">Add task</button>
      </form>
    </div>
  );
}
