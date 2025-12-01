import { Plus, Shield, User, Trash2, Mail } from 'lucide-react';

export function MembersSettings() {
  const members = [
    {
      id: 1,
      name: 'Jordan',
      avatar: '👩',
      email: 'jordan@example.com',
      role: 'admin',
      joinedDate: 'Jan 15, 2024',
    },
    {
      id: 2,
      name: 'Alex',
      avatar: '🧑',
      email: 'alex@example.com',
      role: 'member',
      joinedDate: 'Jan 15, 2024',
    },
    {
      id: 3,
      name: 'Casey',
      avatar: '👨',
      email: 'casey@example.com',
      role: 'member',
      joinedDate: 'Feb 1, 2024',
    },
    {
      id: 4,
      name: 'Sam',
      avatar: '🧔',
      email: 'sam@example.com',
      role: 'member',
      joinedDate: 'Feb 10, 2024',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Invite Member */}
      <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-3xl p-6 shadow-lg text-white">
        <div className="flex items-center gap-3 mb-4">
          <Mail className="w-6 h-6" />
          <h3 className="text-white">Invite New Member</h3>
        </div>
        <p className="text-white/90 mb-4">
          Share this link with someone to invite them to your household
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            value="https://chorewheel.app/invite/apartment4b"
            readOnly
            className="flex-1 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl px-4 py-3 text-white placeholder-white/60"
          />
          <button className="bg-white text-[#8B5CF6] rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all">
            Copy
          </button>
        </div>
      </div>

      {/* Members List */}
      <div className="space-y-4">
        <h3 className="text-gray-900">Current Members</h3>
        {members.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100"
          >
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-md">
                <span className="text-2xl">{member.avatar}</span>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-gray-900">{member.name}</h4>
                  {member.role === 'admin' ? (
                    <span className="bg-purple-100 text-[#8B5CF6] px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      Admin
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full text-xs flex items-center gap-1">
                      <User className="w-3 h-3" />
                      Member
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{member.email}</p>
                <p className="text-gray-500 text-xs mt-1">
                  Joined {member.joinedDate}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                {member.role === 'member' && (
                  <>
                    <button className="px-4 py-2 bg-purple-50 text-[#8B5CF6] rounded-xl hover:bg-purple-100 transition-colors text-xs">
                      Make Admin
                    </button>
                    <button className="p-2 hover:bg-red-50 rounded-xl transition-colors group">
                      <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                    </button>
                  </>
                )}
                {member.role === 'admin' && (
                  <span className="text-gray-400 text-xs">Current user</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-3xl p-6">
        <h4 className="text-gray-900 mb-2">About Member Roles</h4>
        <ul className="space-y-2 text-gray-600">
          <li className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-[#8B5CF6] mt-0.5 flex-shrink-0" />
            <span><strong>Admins</strong> can add/remove chores, manage members, and configure settings</span>
          </li>
          <li className="flex items-start gap-2">
            <User className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
            <span><strong>Members</strong> can complete tasks and view household activity</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
