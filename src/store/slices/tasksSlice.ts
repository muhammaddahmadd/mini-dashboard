import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [
      { id: 1, title: 'Finish report', completed: true },
      { id: 2, title: 'Email client', completed: false },
      { id: 3, title: 'Update website', completed: false },
      { id: 4, title: 'Draft presentation', completed: false }
    ]
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false
      });
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.items.find(item => item.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    reorderTasks: (state, action) => {
      const { dragIndex, hoverIndex } = action.payload;
      const draggedTask = state.items[dragIndex];
      state.items.splice(dragIndex, 1);
      state.items.splice(hoverIndex, 0, draggedTask);
    }
  }
});

export const { addTask, removeTask, toggleTask, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;