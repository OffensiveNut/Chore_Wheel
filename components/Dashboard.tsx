import { Calendar, Clock, TrendingUp, Plus, Users as UsersIcon, Activity } from 'lucide-react';

interface DashboardProps {
  onCompleteChore: (choreId: number) => void;
  onAddChore: () => void;
  onViewMembers: () => void;
}

export function Dashboard({ onCompleteChore, onAddChore, onViewMembers }: DashboardProps) {
  const myTasks = [
    {
      id: 1,
      name: 'Wash Dishes',
      emoji: '🍽️',
      dueDate: 'Today, 6:00 PM',
      status: 'due-today',
    },
    {
      id: 2,
      name: 'Vacuum Living Room',
      emoji: '🧹',
      dueDate: 'Yesterday',
      status: 'overdue',
    },
    {
      id: 3,
      name: 'Water Plants',
      emoji: '🌱',
      dueDate: 'Tomorrow, 10:00 AM',
      status: 'upcoming',
    },
    {
      id: 4,
      name: 'Take Out Recycling',
      emoji: '♻️',
      dueDate: 'Dec 3, 8:00 PM',
      status: 'upcoming',
    },
  ];

  const recentActivity = [
    { id: 1, member: 'Jordan', avatar: '👩', action: 'completed', chore: 'Kitchen Deep Clean', time: '2 hours ago' },
    { id: 2, member: 'Casey', avatar: '👨', action: 'completed', chore: 'Bathroom Cleaning', time: '5 hours ago' },
    { id: 3, member: 'Sam', avatar: '🧔', action: 'completed', chore: 'Take Out Trash', time: '1 day ago' },
  ];

  const upcomingTasks = [
    { member: 'Jordan', avatar: '👩', chore: 'Laundry', time: 'Today, 8:00 PM' },
    { member: 'Sam', avatar: '🧔', chore: 'Dusting', time: 'Tomorrow, 9:00 AM' },
    { member: 'Casey', avatar: '👨', chore: 'Mop Floors', time: 'Tomorrow, 2:00 PM' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'due-today':
        return 'bg-gradient-to-br from-[#FFC078] to-[#FFB347] border-orange-200';
      case 'overdue':
        return 'bg-gradient-to-br from-[#FF6B6B] to-[#FF8787] border-red-200';
      case 'upcoming':
        return 'bg-gradient-to-br from-[#74C0FC] to-[#4DABF7] border-blue-200';
      default:
        return 'bg-white';
    }
  };

  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'due-today':
      case 'overdue':
      case 'upcoming':
        return 'text-white';
      default:
        return 'text-gray-900';
    }
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h2 className="text-gray-900 mb-1">Welcome back, Jordan! 👋</h2>
        <p className="text-gray-600">You have {myTasks.length} tasks to complete</p>
      </div>

      {/* My Tasks Section */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-gray-900">My Tasks</h3>
          <button className="text-[#8B5CF6] hover:text-[#7C3AED] transition-colors">
            View All
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {myTasks.map((task) => (
            <div
              key={task.id}
              className={`${getStatusColor(task.status)} rounded-3xl p-6 border-2 shadow-lg transition-transform hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md">
                    <span className="text-3xl">{task.emoji}</span>
                  </div>
                  <div>
                    <h4 className={getStatusTextColor(task.status)}>{task.name}</h4>
                    <div className={`flex items-center gap-1 mt-1 ${getStatusTextColor(task.status)} opacity-90`}>
                      <Clock className="w-4 h-4" />
                      <span>{task.dueDate}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => onCompleteChore(task.id)}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 rounded-2xl py-3 shadow-md transition-all hover:shadow-lg"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Household Overview */}
      <section>
        <h3 className="text-gray-900 mb-4">Household Overview</h3>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Recent Activity */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-[#8B5CF6]" />
              <h4 className="text-gray-900">Recent Activity</h4>
            </div>
            <div className="space-y-3">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 bg-[#F0FDF4] rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#6EE7B7] to-[#34D399] rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                    <span>{activity.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900">
                      <span>{activity.member}</span> completed{' '}
                      <span>{activity.chore}</span>
                    </p>
                    <p className="text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-[#8B5CF6]" />
              <h4 className="text-gray-900">Upcoming Tasks</h4>
            </div>
            <div className="space-y-3">
              {upcomingTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-[#F5F3FF] rounded-2xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
                    <span>{task.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-900">{task.chore}</p>
                    <p className="text-gray-600">{task.member}</p>
                  </div>
                  <span className="text-gray-500">{task.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fair Distribution Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 mt-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />
            <h4 className="text-gray-900">Task Distribution</h4>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Jordan', avatar: '👩', tasks: 12, total: 15, color: 'bg-[#8B5CF6]' },
              { name: 'Alex', avatar: '🧑', tasks: 11, total: 15, color: 'bg-[#74C0FC]' },
              { name: 'Casey', avatar: '👨', tasks: 13, total: 15, color: 'bg-[#FFB347]' },
              { name: 'Sam', avatar: '🧔', tasks: 10, total: 15, color: 'bg-[#6EE7B7]' },
            ].map((member) => (
              <div key={member.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span>{member.avatar}</span>
                    <span className="text-gray-900">{member.name}</span>
                  </div>
                  <span className="text-gray-600">{member.tasks}/{member.total}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-3">
                  <div
                    className={`${member.color} h-3 rounded-full transition-all shadow-md`}
                    style={{ width: `${(member.tasks / member.total) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h3 className="text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <button 
            onClick={onAddChore}
            className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Plus className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="text-white">Add Chore</h4>
              <p className="text-white/80">Create a new task</p>
            </div>
          </button>

          <button 
            onClick={onViewMembers}
            className="bg-white border-2 border-gray-200 text-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-[#8B5CF6]" />
            </div>
            <div className="text-left">
              <h4 className="text-gray-900">View All Members</h4>
              <p className="text-gray-600">See household roster</p>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}