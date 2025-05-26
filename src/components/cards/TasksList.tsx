import { useState, KeyboardEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../../store/slices/tasksSlice';
import TaskItem from './TaskItem';
import type { RootState, AppDispatch } from '../../store/store';

const TasksList = () => {
  const { items } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask(newTask.trim()));
      setNewTask('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Tasks</h3>
      
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add new task..."
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleAddTask}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
        >
          Add
        </button>
      </div>
      
      <div className="space-y-2">
        {items.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            index={index}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
      
      {items.length === 0 && (
        <p className="text-gray-500 text-lg text-center py-4">
          No tasks yet.
        </p>
      )}
    </div>
  );
};

export default TasksList;