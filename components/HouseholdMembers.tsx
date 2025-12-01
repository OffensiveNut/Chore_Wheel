import { Crown, Plus, TrendingUp, Award, Target } from 'lucide-react';

export function HouseholdMembers() {
  const members = [
    {
      id: 1,
      name: "Jordan",
      avatar: "👩",
      color: "bg-purple-500",
      role: "admin",
      stats: {
        completed: 52,
        pending: 1,
        streak: 7,
        points: 520,
      },
    },
    {
      id: 2,
      name: "Alex",
      avatar: "🧑",
      color: "bg-blue-500",
      role: "member",
      stats: {
        completed: 48,
        pending: 1,
        streak: 5,
        points: 480,
      },
    },
    {
      id: 3,
      name: "Casey",
      avatar: "👨",
      color: "bg-orange-500",
      role: "member",
      stats: {
        completed: 49,
        pending: 1,
        streak: 6,
        points: 490,
      },
    },
    {
      id: 4,
      name: "Sam",
      avatar: "🧔",
      color: "bg-green-500",
      role: "member",
      stats: {
        completed: 43,
        pending: 2,
        streak: 4,
        points: 430,
      },
    },
  ];

  // Sort by points for leaderboard
  const sortedMembers = [...members].sort((a, b) => b.stats.points - a.stats.points);

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-4">
        <h1 className="text-gray-900 mb-1">Household Members</h1>
        <p className="text-gray-600">4 members • Apartment 4B</p>
      </div>

      {/* Leaderboard */}
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Award className="w-6 h-6" />
          <h3>This Month's Champion</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className={`w-16 h-16 ${sortedMembers[0].color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
            <span className="text-2xl">{sortedMembers[0].avatar}</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span>{sortedMembers[0].name}</span>
              <Crown className="w-5 h-5" />
            </div>
            <div className="text-white/90">{sortedMembers[0].stats.points} points</div>
          </div>
        </div>
      </div>

      {/* Member Cards */}
      <div>
        <h3 className="text-gray-900 mb-3">All Members</h3>
        <div className="space-y-3">
          {sortedMembers.map((member, index) => (
            <div key={member.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-start gap-3">
                {/* Avatar with Rank */}
                <div className="relative flex-shrink-0">
                  <div className={`w-14 h-14 ${member.color} rounded-full flex items-center justify-center`}>
                    <span className="text-xl">{member.avatar}</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center border-2 border-white">
                    <span className="text-white text-xs">#{index + 1}</span>
                  </div>
                </div>

                {/* Member Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-gray-900">{member.name}</h4>
                    {member.role === 'admin' && (
                      <span className="bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                        Admin
                      </span>
                    )}
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-gray-900">{member.stats.completed}</div>
                      <div className="text-gray-500 text-xs">Done</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-gray-900">{member.stats.streak}d</div>
                      <div className="text-gray-500 text-xs">Streak</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-2">
                      <div className="text-gray-900">{member.stats.points}</div>
                      <div className="text-gray-500 text-xs">Points</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fairness Indicator */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-gray-900 mb-1">Great Balance!</h4>
            <p className="text-gray-600">
              Task distribution is fair this month. Everyone is contributing equally to household chores.
            </p>
          </div>
        </div>
      </div>

      {/* Invite Button */}
      <button className="w-full bg-white border-2 border-dashed border-gray-300 text-gray-600 rounded-xl py-4 flex items-center justify-center gap-2 hover:border-blue-500 hover:text-blue-500 transition-colors">
        <Plus className="w-5 h-5" />
        <span>Invite New Member</span>
      </button>
    </div>
  );
}
