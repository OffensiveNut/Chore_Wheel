import { useState } from 'react';
import { Check, Clock, Filter, Plus } from 'lucide-react';

type TaskStatus = 'all' | 'pending' | 'completed';

export function TaskList() {
  const [filter, setFilter] = useState<TaskStatus>('all');

  const tasks = [
    { id: 1, title: "Wash Dishes", assignee: "Alex", avatar: "🧑", color: "bg-blue-500", status: "completed", time: "Completed 2h ago" },
    { id: 2, title: "Take Out Trash", assignee: "Sam", avatar: "🧔", color: "bg-green-500", status: "pending", time: "Due today at 8:00 PM" },
    { id: 3, title: "Vacuum Living Room", assignee: "Casey", avatar: "👨", color: "bg-orange-500", status: "pending", time: "Due tomorrow at 10:00 AM" },
    { id: 4, title: "Clean Bathroom", assignee: "Casey", avatar: "👨", color: "bg-orange-500", status: "completed", time: "Completed 5h ago" },
    { id: 5, title: "Do Laundry", assignee: "Alex", avatar: "🧑", color: "bg-blue-500", status: "pending", time: "Due tomorrow at 2:00 PM" },
    { id: 6, title: "Kitchen Deep Clean", assignee: "Jordan", avatar: "👩", color: "bg-purple-500", status: "completed", time: "Completed 1d ago" },
    { id: 7, title: "Water Plants", assignee: "Casey", avatar: "👨", color: "bg-orange-500", status: "pending", time: "Due in 2 days" },
    { id: 8, title: "Dust Furniture", assignee: "Sam", avatar: "🧔", color: "bg-green-500", status: "pending", time: "Due in 3 days" },
  ];

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  const pendingCount = tasks.filter(t => t.status === 'pending').length;
  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-gray-900 mb-1">All Tasks</h1>
        <p className="text-gray-600">{pendingCount} pending • {completedCount} completed</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 bg-white rounded-xl p-1 shadow-sm border border-gray-100">
        <button
          onClick={() => setFilter('all')}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'text-gray-600'
          }`}
        >
          All Tasks
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            filter === 'pending' ? 'bg-orange-500 text-white' : 'text-gray-600'
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            filter === 'completed' ? 'bg-green-500 text-white' : 'text-gray-600'
          }`}
        >
          Done
        </button>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`bg-white rounded-xl p-4 shadow-sm border transition-all ${
              task.status === 'completed'
                ? 'border-green-200 bg-green-50/50'
                : 'border-gray-100'
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Checkbox */}
              <button
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                  task.status === 'completed'
                    ? 'bg-green-500 border-green-500'
                    : 'border-gray-300 hover:border-green-500'
                }`}
              >
                {task.status === 'completed' && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>

              {/* Task Info */}
              <div className="flex-1 min-w-0">
                <h4
                  className={`text-gray-900 mb-1 ${
                    task.status === 'completed' ? 'line-through text-gray-500' : ''
                  }`}
                >
                  {task.title}
                </h4>
                <div className="flex items-center gap-2 mb-2">
                  <div className={`w-6 h-6 ${task.color} rounded-full flex items-center justify-center`}>
                    <span className="text-xs">{task.avatar}</span>
                  </div>
                  <span className="text-gray-600">{task.assignee}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4" />
                  <span>{task.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Task Button */}
      <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-4 shadow-lg flex items-center justify-center gap-2 hover:shadow-xl transition-shadow">
        <Plus className="w-5 h-5" />
        <span>Add New Task</span>
      </button>
    </div>
  );
}
