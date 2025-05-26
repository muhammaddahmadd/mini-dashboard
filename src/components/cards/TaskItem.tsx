import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../../store/slices/tasksSlice';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  index: number;
  isLast: boolean;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, index, isLast }) => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  return (
    <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
        className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
      />
      
      <span className={`flex-1 text-sm ${task.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
        {task.title}
      </span>
      
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        
      </div>
    </div>
  );
};

export default TaskItem;