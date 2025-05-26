import { useSelector, useDispatch } from 'react-redux';
import { markAsRead, markAsUnread } from '../../store/slices/notificationsSlice';
import type { RootState, AppDispatch } from '../../store/store';

type NotificationType = 'comment' | 'warning' | 'success' | 'default';

const NotificationsPanel = () => {
  const { items } = useSelector((state: RootState) => state.notifications);
  const dispatch = useDispatch<AppDispatch>();

  const toggleReadStatus = (id: number, currentStatus: boolean) => {
    if (currentStatus) {
      dispatch(markAsUnread(id));
    } else {
      dispatch(markAsRead(id));
    }
  };

  const getIconColor = (type: NotificationType) => {
    switch (type) {
      case 'comment': return 'text-blue-500';
      case 'warning': return 'text-orange-500';
      case 'success': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'comment': return '💬';
      case 'warning': return '⚠️';
      case 'success': return '✅';
      default: return '📝';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 w-full max-w-sm">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Notifications</h3>
      
      <div className="space-y-3">
        {items.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-start space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
              notification.read ? 'bg-gray-50' : 'bg-blue-50 border border-blue-100'
            }`}
            onClick={() => toggleReadStatus(notification.id, notification.read)}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(notification.type as NotificationType)}`}>
              <span className="text-lg">{getIcon(notification.type as NotificationType)}</span>
            </div>
            
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-medium ${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                {notification.title}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                {notification.time}
              </p>
            </div>
            
            {!notification.read && (
              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-2"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPanel;