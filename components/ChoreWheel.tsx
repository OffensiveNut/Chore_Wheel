import { useState } from 'react';
import { RotateCw, Calendar } from 'lucide-react';

export function ChoreWheel() {
  const [rotation, setRotation] = useState(0);

  const members = [
    { name: "Alex", avatar: "🧑", color: "bg-blue-500" },
    { name: "Jordan", avatar: "👩", color: "bg-purple-500" },
    { name: "Sam", avatar: "🧔", color: "bg-green-500" },
    { name: "Casey", avatar: "👨", color: "bg-orange-500" },
  ];

  const chores = [
    { id: 1, name: "Dishes", icon: "🍽️", member: "Alex" },
    { id: 2, name: "Trash", icon: "🗑️", member: "Jordan" },
    { id: 3, name: "Vacuum", icon: "🧹", member: "Sam" },
    { id: 4, name: "Bathroom", icon: "🚽", member: "Casey" },
    { id: 5, name: "Laundry", icon: "👕", member: "Alex" },
    { id: 6, name: "Kitchen", icon: "🍳", member: "Jordan" },
    { id: 7, name: "Dusting", icon: "🧺", member: "Sam" },
    { id: 8, name: "Plants", icon: "🌱", member: "Casey" },
  ];

  const handleRotate = () => {
    setRotation((prev) => prev + 360);
  };

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-gray-900 mb-1">Chore Wheel</h1>
        <p className="text-gray-600">Weekly rotation • Rotates every Monday</p>
      </div>

      {/* Rotation Info */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-white/80 mb-1">Next Rotation</div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>Monday, Dec 2</span>
            </div>
          </div>
          <button
            onClick={handleRotate}
            className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-colors backdrop-blur-sm"
          >
            <RotateCw className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* The Wheel */}
      <div className="relative aspect-square max-w-sm mx-auto">
        <div className="absolute inset-0 bg-white rounded-full shadow-2xl border-8 border-gray-100"></div>
        
        {/* Center Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full shadow-lg flex items-center justify-center z-10">
            <RotateCw className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Chore Segments */}
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {chores.map((chore, index) => {
            const angle = (index * 360) / chores.length;
            const radius = 40; // percentage from center
            const x = 50 + radius * Math.cos((angle - 90) * (Math.PI / 180));
            const y = 50 + radius * Math.sin((angle - 90) * (Math.PI / 180));

            return (
              <div
                key={chore.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: `translate(-50%, -50%) rotate(-${rotation}deg)`,
                  transition: 'transform 1000ms ease-in-out',
                }}
              >
                <div className="bg-white rounded-full w-16 h-16 shadow-lg border-2 border-gray-200 flex items-center justify-center">
                  <span className="text-2xl">{chore.icon}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Current Assignments */}
      <div>
        <h3 className="text-gray-900 mb-3">Current Assignments</h3>
        <div className="grid grid-cols-2 gap-3">
          {members.map((member, index) => {
            const memberChores = chores.filter(c => c.member === member.name);
            return (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-8 h-8 ${member.color} rounded-full flex items-center justify-center text-white`}>
                    <span className="text-sm">{member.avatar}</span>
                  </div>
                  <span className="text-gray-900">{member.name}</span>
                </div>
                <div className="space-y-1">
                  {memberChores.map((chore) => (
                    <div key={chore.id} className="flex items-center gap-2 text-gray-600">
                      <span>{chore.icon}</span>
                      <span>{chore.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
