import React, { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errors, setErrors] = useState({});

  const handleAddTask = () => {
    const newErrors = {};
    
    if (!title.trim()) {
      newErrors.title = 'Task title is required.';
    }
    if (!description.trim()) {
      newErrors.description = 'Description is required.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    onAddTask({ 
      title: title.trim(), 
      description: description.trim(), 
      priority 
    });

    setTitle('');
    setDescription('');
    setPriority('Medium');
    setErrors({});
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800">Create New Task</h2>

      <div>
        <input
          type="text"
          placeholder="Task Title (e.g., Finish React component)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full p-3 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.title ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
        />
        {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title}</p>}
      </div>

      <div>
        <textarea
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          className={`w-full p-3 border rounded-lg resize-none focus:outline-none focus:ring-2
                      ${errors.description ? 'border-red-500 ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
        />
        {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="priority-select" className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          id="priority-select"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button
        onClick={handleAddTask}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
      >
        Add Task
      </button>
    </div>
  );
}