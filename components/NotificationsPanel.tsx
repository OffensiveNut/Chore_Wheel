import { X, CheckCircle2, Clock, UserPlus, RotateCw, AlertCircle, Trash2 } from 'lucide-react';

interface NotificationsPanelProps {
  onClose: () => void;
}

export function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: 'overdue',
      title: 'Chore Overdue',
      message: 'Vacuum Living Room is overdue',
      time: '2 hours ago',
      read: false,
      icon: AlertCircle,
      color: 'bg-red-50 border-red-200',
      iconColor: 'text-red-500',
    },
    {
      id: 2,
      type: 'completed',
      title: 'Chore Completed',
      message: 'Jordan completed Kitchen Deep Clean',
      time: '3 hours ago',
      read: false,
      icon: CheckCircle2,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-500',
    },
    {
      id: 3,
      type: 'reminder',
      title: 'Upcoming Chore',
      message: 'Wash Dishes is due today at 6:00 PM',
      time: '5 hours ago',
      read: false,
      icon: Clock,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-500',
    },
    {
      id: 4,
      type: 'member',
      title: 'New Member',
      message: 'Sam joined your household',
      time: '1 day ago',
      read: true,
      icon: UserPlus,
      color: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-500',
    },
    {
      id: 5,
      type: 'rotation',
      title: 'Chores Rotated',
      message: 'Weekly chores have been reassigned',
      time: '2 days ago',
      read: true,
      icon: RotateCw,
      color: 'bg-blue-50 border-blue-200',
      iconColor: 'text-blue-500',
    },
    {
      id: 6,
      type: 'completed',
      title: 'Chore Completed',
      message: 'Casey completed Bathroom Cleaning',
      time: '2 days ago',
      read: true,
      icon: CheckCircle2,
      color: 'bg-green-50 border-green-200',
      iconColor: 'text-green-500',
    },
    {
      id: 7,
      type: 'reminder',
      title: 'Reminder',
      message: 'Take Out Trash is due tomorrow',
      time: '3 days ago',
      read: true,
      icon: Clock,
      color: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-500',
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    // Logic to mark all as read
    console.log('Mark all as read');
  };

  const handleClearAll = () => {
    // Logic to clear all notifications
    console.log('Clear all notifications');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-end">
      <div 
        className="h-full w-full md:w-auto"
        onClick={onClose}
      >
        <div 
          className="bg-white h-full w-full md:w-[450px] shadow-2xl animate-slide-in-right overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 p-6 z-10">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-gray-900">Notifications</h2>
                <p className="text-gray-600">{unreadCount} unread</p>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleMarkAllRead}
                className="flex-1 bg-purple-50 text-[#8B5CF6] rounded-2xl px-4 py-2 hover:bg-purple-100 transition-colors"
              >
                Mark all read
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 bg-gray-100 text-gray-700 rounded-2xl px-4 py-2 hover:bg-gray-200 transition-colors"
              >
                Clear all
              </button>
            </div>
          </div>

          {/* Notifications List */}
          <div className="p-4 space-y-3">
            {notifications.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-gray-900 mb-1">No notifications</h3>
                <p className="text-gray-500">You're all caught up!</p>
              </div>
            ) : (
              notifications.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div
                    key={notification.id}
                    className={`rounded-2xl p-4 border-2 transition-all hover:shadow-md ${
                      notification.read ? 'bg-white border-gray-100' : notification.color
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Icon */}
                      <div className={`w-10 h-10 ${notification.read ? 'bg-gray-100' : 'bg-white'} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                        <Icon className={`w-5 h-5 ${notification.read ? 'text-gray-400' : notification.iconColor}`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <h4 className={`${notification.read ? 'text-gray-600' : 'text-gray-900'}`}>
                            {notification.title}
                          </h4>
                          {!notification.read && (
                            <span className="w-2 h-2 bg-[#8B5CF6] rounded-full flex-shrink-0 ml-2 mt-1"></span>
                          )}
                        </div>
                        <p className={`mb-2 ${notification.read ? 'text-gray-500' : 'text-gray-700'}`}>
                          {notification.message}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-500 text-xs">{notification.time}</span>
                          <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                            <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer */}
          {notifications.length > 0 && (
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-4">
              <button className="w-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all">
                View All Notifications
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
