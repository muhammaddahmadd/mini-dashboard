import { createSlice } from '@reduxjs/toolkit';

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: {
    items: [
      { id: 1, type: 'comment', title: 'New comment', time: '2 min ago', read: false, icon: '💬' },
      { id: 2, type: 'warning', title: 'System update', time: '1 hour ago', read: false, icon: '⚠️' },
      { id: 3, type: 'success', title: 'Password changed', time: '5 hours ago', read: true, icon: '✅' }
    ]
  },
  reducers: {
    markAsRead: (state, action) => {
      const notification = state.items.find(item => item.id === action.payload);
      if (notification) {
        notification.read = true;
      }
    },
    markAsUnread: (state, action) => {
      const notification = state.items.find(item => item.id === action.payload);
      if (notification) {
        notification.read = false;
      }
    }
  }
});

export const { markAsRead, markAsUnread } = notificationsSlice.actions;
export default notificationsSlice.reducer;