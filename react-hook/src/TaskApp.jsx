import React from 'react';
import TaskForm from './TaskForm';
import useTasks from './useTasks';
import ThemeContext from './ThemeContext';
import ThemeProvider from './ThemeProvider';

export default function TaskApp() {
  const { tasks, addTask, deleteTask, clearAllTasks } = useTasks();

  return (
    <div className="p-4 max-w-lg mx-auto space-y-4">
      <h1 className="text-2xl font-bold text-center">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border p-2 rounded flex justify-between items-start"
          >
            <div>
              <h3 className="font-semibold">
                {task.title} ({task.priority})
              </h3>
              <p className="text-sm text-gray-700">{task.description}</p>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {tasks.length > 0 && (
        <button
          onClick={clearAllTasks}
          className="bg-gray-200 text-black px-3 py-1 rounded text-sm hover:bg-gray-300"
        >
          Clear All
        </button>
      )}
    </div>
  );
}
