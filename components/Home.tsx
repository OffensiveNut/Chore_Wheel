import { CheckCircle2, Clock, AlertCircle, TrendingUp } from 'lucide-react';

export function Home() {
  const household = {
    name: "Apartment 4B",
    members: [
      { id: 1, name: "Alex", avatar: "🧑", color: "bg-blue-500", tasksThisWeek: 5, completed: 4 },
      { id: 2, name: "Jordan", avatar: "👩", color: "bg-purple-500", tasksThisWeek: 5, completed: 5 },
      { id: 3, name: "Sam", avatar: "🧔", color: "bg-green-500", tasksThisWeek: 4, completed: 3 },
      { id: 4, name: "Casey", avatar: "👨", color: "bg-orange-500", tasksThisWeek: 5, completed: 4 },
    ],
  };

  const upcomingTasks = [
    { id: 1, title: "Kitchen Cleanup", assignee: "Alex", time: "Today, 6:00 PM", status: "pending", color: "bg-blue-500" },
    { id: 2, title: "Take Out Trash", assignee: "Sam", time: "Today, 8:00 PM", status: "pending", color: "bg-green-500" },
    { id: 3, title: "Vacuum Living Room", assignee: "Casey", time: "Tomorrow, 10:00 AM", status: "upcoming", color: "bg-orange-500" },
  ];

  const totalTasks = household.members.reduce((sum, m) => sum + m.tasksThisWeek, 0);
  const completedTasks = household.members.reduce((sum, m) => sum + m.completed, 0);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-gray-600 mb-1">Welcome back to</h1>
        <h2 className="text-gray-900">{household.name}</h2>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </div>
          </div>
          <div className="text-gray-900">{completedTasks}/{totalTasks}</div>
          <div className="text-gray-500">Completed</div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
          </div>
          <div className="text-gray-900">{totalTasks - completedTasks}</div>
          <div className="text-gray-500">Pending</div>
        </div>
      </div>

      {/* Upcoming Tasks */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900">Coming Up</h3>
          <button className="text-blue-600">View All</button>
        </div>
        <div className="space-y-3">
          {upcomingTasks.map((task) => (
            <div key={task.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 ${task.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  {task.status === 'pending' ? (
                    <AlertCircle className="w-6 h-6 text-white" />
                  ) : (
                    <Clock className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-gray-900 mb-1">{task.title}</h4>
                  <p className="text-gray-600">{task.assignee}</p>
                  <p className="text-gray-500 mt-1">{task.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Member Quick View */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-gray-900">This Week's Progress</h3>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 space-y-4">
          {household.members.map((member) => {
            const completionRate = Math.round((member.completed / member.tasksThisWeek) * 100);
            return (
              <div key={member.id} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${member.color} rounded-full flex items-center justify-center text-white`}>
                  <span>{member.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-gray-900">{member.name}</span>
                    <span className="text-gray-600">{member.completed}/{member.tasksThisWeek}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`${member.color} h-2 rounded-full transition-all`}
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
