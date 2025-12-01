import { Clock, RotateCw, Plus, Calendar } from 'lucide-react';

interface ChoresProps {
  onCompleteChore: (choreId: number) => void;
  onAddChore: () => void;
}

export function Chores({ onCompleteChore, onAddChore }: ChoresProps) {
  const chores = [
    {
      id: 1,
      name: 'Wash Dishes',
      emoji: '🍽️',
      frequency: 'Daily',
      assignedTo: 'Jordan',
      avatar: '👩',
      nextDue: 'Today, 6:00 PM',
      status: 'active',
      rotationOrder: 1,
    },
    {
      id: 2,
      name: 'Take Out Trash',
      emoji: '🗑️',
      frequency: 'Weekly',
      assignedTo: 'Alex',
      avatar: '🧑',
      nextDue: 'Dec 3, 8:00 PM',
      status: 'active',
      rotationOrder: 2,
    },
    {
      id: 3,
      name: 'Vacuum Living Room',
      emoji: '🧹',
      frequency: 'Weekly',
      assignedTo: 'Sam',
      avatar: '🧔',
      nextDue: 'Dec 4, 10:00 AM',
      status: 'active',
      rotationOrder: 3,
    },
    {
      id: 4,
      name: 'Clean Bathroom',
      emoji: '🚽',
      frequency: 'Weekly',
      assignedTo: 'Casey',
      avatar: '👨',
      nextDue: 'Dec 5, 2:00 PM',
      status: 'active',
      rotationOrder: 4,
    },
    {
      id: 5,
      name: 'Do Laundry',
      emoji: '👕',
      frequency: 'Bi-weekly',
      assignedTo: 'Jordan',
      avatar: '👩',
      nextDue: 'Dec 6, 3:00 PM',
      status: 'active',
      rotationOrder: 5,
    },
    {
      id: 6,
      name: 'Water Plants',
      emoji: '🌱',
      frequency: 'Weekly',
      assignedTo: 'Alex',
      avatar: '🧑',
      nextDue: 'Dec 7, 9:00 AM',
      status: 'active',
      rotationOrder: 6,
    },
    {
      id: 7,
      name: 'Mop Floors',
      emoji: '🧽',
      frequency: 'Bi-weekly',
      assignedTo: 'Sam',
      avatar: '🧔',
      nextDue: 'Dec 8, 11:00 AM',
      status: 'active',
      rotationOrder: 7,
    },
    {
      id: 8,
      name: 'Dust Furniture',
      emoji: '🧺',
      frequency: 'Weekly',
      assignedTo: 'Casey',
      avatar: '👨',
      nextDue: 'Dec 9, 1:00 PM',
      status: 'active',
      rotationOrder: 8,
    },
  ];

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case 'Daily':
        return 'bg-[#FFB347] text-orange-900';
      case 'Weekly':
        return 'bg-[#74C0FC] text-blue-900';
      case 'Bi-weekly':
        return 'bg-[#8B5CF6] text-purple-100';
      case 'Monthly':
        return 'bg-[#6EE7B7] text-green-900';
      default:
        return 'bg-gray-100 text-gray-900';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">All Chores</h2>
          <p className="text-gray-600">{chores.length} active chores</p>
        </div>
        <button
          onClick={onAddChore}
          className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add Chore</span>
        </button>
      </div>

      {/* Rotation Info */}
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <RotateCw className="w-5 h-5" />
              <h3 className="text-white">Next Rotation</h3>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Monday, December 2, 2025</span>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-3 transition-colors">
            Rotate Now
          </button>
        </div>
      </div>

      {/* Chores Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {chores.map((chore) => (
          <div
            key={chore.id}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:scale-105"
          >
            {/* Chore Icon & Name */}
            <div className="flex items-start gap-3 mb-4">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-3xl">{chore.emoji}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-gray-900 mb-1">{chore.name}</h4>
                <span className={`inline-block px-3 py-1 rounded-full text-xs ${getFrequencyColor(chore.frequency)}`}>
                  {chore.frequency}
                </span>
              </div>
            </div>

            {/* Assigned To */}
            <div className="bg-gray-50 rounded-2xl p-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-sm">{chore.avatar}</span>
                </div>
                <div>
                  <p className="text-gray-500 text-xs">Assigned to</p>
                  <p className="text-gray-900">{chore.assignedTo}</p>
                </div>
              </div>
            </div>

            {/* Next Due */}
            <div className="flex items-center gap-2 mb-4 text-gray-600">
              <Clock className="w-4 h-4" />
              <span>{chore.nextDue}</span>
            </div>

            {/* Action Button */}
            <button
              onClick={() => onCompleteChore(chore.id)}
              className="w-full bg-gradient-to-r from-[#6EE7B7] to-[#34D399] hover:from-[#5FD9A8] hover:to-[#2BC78F] text-white rounded-2xl py-3 shadow-md transition-all"
            >
              Mark Complete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}