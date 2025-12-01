import { Plus, Edit2, Trash2, ToggleLeft, ToggleRight } from 'lucide-react';

export function ChoresSettings() {
  const chores = [
    {
      id: 1,
      name: 'Wash Dishes',
      emoji: '🍽️',
      description: 'Clean all dishes, pots, and pans',
      frequency: 'Daily',
      rotationOrder: 1,
      active: true,
    },
    {
      id: 2,
      name: 'Take Out Trash',
      emoji: '🗑️',
      description: 'Take trash and recycling to bins',
      frequency: 'Weekly',
      rotationOrder: 2,
      active: true,
    },
    {
      id: 3,
      name: 'Vacuum Living Room',
      emoji: '🧹',
      description: 'Vacuum all carpets and rugs',
      frequency: 'Weekly',
      rotationOrder: 3,
      active: true,
    },
    {
      id: 4,
      name: 'Mop Kitchen Floor',
      emoji: '🧽',
      description: 'Mop and clean kitchen floor',
      frequency: 'Bi-weekly',
      rotationOrder: 4,
      active: false,
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
      {/* Add Button */}
      <button className="w-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-3">
        <Plus className="w-6 h-6" />
        <span>Add New Chore</span>
      </button>

      {/* Chores List */}
      <div className="space-y-4">
        {chores.map((chore) => (
          <div
            key={chore.id}
            className={`bg-white rounded-3xl p-6 shadow-lg border transition-all ${
              chore.active ? 'border-gray-100' : 'border-gray-200 opacity-60'
            }`}
          >
            <div className="flex items-start gap-4">
              {/* Emoji */}
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-2xl">{chore.emoji}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="text-gray-900 mb-1">{chore.name}</h4>
                    <p className="text-gray-600">{chore.description}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                      <Edit2 className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-xl transition-colors group">
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-wrap">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs ${getFrequencyColor(chore.frequency)}`}>
                    {chore.frequency}
                  </span>
                  <span className="text-gray-500 text-xs">
                    Order: {chore.rotationOrder}
                  </span>
                  <button className="flex items-center gap-2 text-xs">
                    {chore.active ? (
                      <>
                        <ToggleRight className="w-5 h-5 text-[#6EE7B7]" />
                        <span className="text-gray-600">Active</span>
                      </>
                    ) : (
                      <>
                        <ToggleLeft className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">Inactive</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Chore Form (Example - would be a modal) */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Quick Add Chore</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Chore Name *</label>
            <input
              type="text"
              placeholder="e.g., Water Plants"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              placeholder="Optional description..."
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
              rows={3}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Frequency *</label>
              <select className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors">
                <option>Daily</option>
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Rotation Order</label>
              <input
                type="number"
                placeholder="1"
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
              />
            </div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#6EE7B7] to-[#34D399] text-white rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all">
            Create Chore
          </button>
        </div>
      </div>
    </div>
  );
}
