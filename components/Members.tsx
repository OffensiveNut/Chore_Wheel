import { Crown, Plus, Mail, Shield, User, Trash2 } from 'lucide-react';

export function Members() {
  const members = [
    {
      id: 1,
      name: 'Jordan',
      avatar: '👩',
      email: 'jordan@example.com',
      role: 'admin',
      joinedDate: 'Jan 15, 2024',
      tasksCompleted: 52,
      tasksAssigned: 12,
      color: 'from-[#8B5CF6] to-[#A78BFA]',
    },
    {
      id: 2,
      name: 'Alex',
      avatar: '🧑',
      email: 'alex@example.com',
      role: 'member',
      joinedDate: 'Jan 15, 2024',
      tasksCompleted: 48,
      tasksAssigned: 11,
      color: 'from-[#74C0FC] to-[#4DABF7]',
    },
    {
      id: 3,
      name: 'Casey',
      avatar: '👨',
      email: 'casey@example.com',
      role: 'member',
      joinedDate: 'Feb 1, 2024',
      tasksCompleted: 49,
      tasksAssigned: 13,
      color: 'from-[#FFB347] to-[#FFA500]',
    },
    {
      id: 4,
      name: 'Sam',
      avatar: '🧔',
      email: 'sam@example.com',
      role: 'member',
      joinedDate: 'Feb 10, 2024',
      tasksCompleted: 43,
      tasksAssigned: 10,
      color: 'from-[#6EE7B7] to-[#34D399]',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-gray-900">Household Members</h2>
          <p className="text-gray-600">{members.length} members in Apartment 4B</p>
        </div>
        <button className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">Invite Member</span>
        </button>
      </div>

      {/* Top Contributor */}
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-6 shadow-lg text-white">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-6 h-6" />
          <h3 className="text-white">Top Contributor This Month</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md border-2 border-white">
            <span className="text-3xl">{members[0].avatar}</span>
          </div>
          <div>
            <h4 className="text-white mb-1">{members[0].name}</h4>
            <p className="text-white/90">{members[0].tasksCompleted} tasks completed</p>
          </div>
        </div>
      </div>

      {/* Members Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-14 h-14 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center shadow-md`}>
                  <span className="text-2xl">{member.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-gray-900">{member.name}</h4>
                    {member.role === 'admin' && (
                      <span className="bg-purple-100 text-[#8B5CF6] px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Admin
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 mt-1">
                    <Mail className="w-3 h-3" />
                    <span className="text-xs">{member.email}</span>
                  </div>
                </div>
              </div>
              {member.role !== 'admin' && (
                <button className="p-2 hover:bg-red-50 rounded-xl transition-colors group">
                  <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                </button>
              )}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="bg-gray-50 rounded-2xl p-3 text-center">
                <div className="text-gray-900">{member.tasksCompleted}</div>
                <div className="text-gray-500 text-xs">Completed</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 text-center">
                <div className="text-gray-900">{member.tasksAssigned}</div>
                <div className="text-gray-500 text-xs">Assigned</div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-3 text-center">
                <div className="text-gray-900">
                  {Math.round((member.tasksCompleted / (member.tasksCompleted + member.tasksAssigned)) * 100)}%
                </div>
                <div className="text-gray-500 text-xs">Rate</div>
              </div>
            </div>

            {/* Joined Date */}
            <div className="text-gray-500 text-xs">
              Member since {member.joinedDate}
            </div>
          </div>
        ))}
      </div>

      {/* Invite Section */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-[#8B5CF6]" />
          </div>
          <div className="flex-1">
            <h4 className="text-gray-900 mb-2">Invite New Members</h4>
            <p className="text-gray-600 mb-4">
              Share this invite link with new household members to join your chore wheel.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value="https://chorewheel.app/invite/apartment4b"
                readOnly
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 text-gray-600"
              />
              <button className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
