import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import TaskForm from './TaskForm';
import useTasks from './useTasks';

export default function App() {
  const { tasks, addTask, deleteTask, clearAllTasks } = useTasks();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'bg-white text-black min-h-screen' : 'bg-gray-900 text-white min-h-screen'}>
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
        <button
          onClick={toggleTheme}
          className="mb-4 px-4 py-2 rounded bg-blue-600 text-white"
        >
          Toggle Theme
        </button>
        <TaskForm onAddTask={addTask} />
        {tasks.length > 0 && (
          <ul className="mt-6 space-y-3">
            {tasks.map(task => (
              <li key={task.id} className="p-4 border rounded-lg flex justify-between items-center">
                <div>
                  <h3 className="font-bold">{task.title}</h3>
                  <p>{task.description}</p>
                  <p className="text-sm text-gray-500">Priority: {task.priority}</p>
                </div>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        {tasks.length > 0 && (
          <button
            onClick={clearAllTasks}
            className="mt-4 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
          >
            Clear All Tasks
          </button>
        )}
      </div>
    </div>
  );
}
