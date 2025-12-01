import { Home, Calendar, AlertTriangle } from 'lucide-react';

export function HouseholdSettings() {
  return (
    <div className="space-y-6">
      {/* Household Info */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Household Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Household Name</label>
            <input
              type="text"
              defaultValue="Apartment 4B"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Created Date</label>
            <input
              type="text"
              value="January 15, 2024"
              readOnly
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 bg-gray-50 text-gray-600"
            />
          </div>
          <button className="w-full bg-gradient-to-r from-[#6EE7B7] to-[#34D399] text-white rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all">
            Save Changes
          </button>
        </div>
      </div>

      {/* Rotation Settings */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Rotation Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2">Rotation Frequency</label>
            <select className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors">
              <option>Weekly (Every Monday)</option>
              <option>Bi-weekly</option>
              <option>Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Next Rotation</label>
            <div className="flex items-center gap-2 p-4 bg-purple-50 rounded-2xl">
              <Calendar className="w-5 h-5 text-[#8B5CF6]" />
              <span className="text-gray-900">Monday, December 2, 2025</span>
            </div>
          </div>
          <button className="w-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white rounded-2xl py-3 shadow-lg hover:shadow-xl transition-all">
            Rotate Chores Now
          </button>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Preferences</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
            <div>
              <div className="text-gray-900">Require photo verification</div>
              <div className="text-gray-500 text-xs">Admin must approve chore completions with photos</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
            <div>
              <div className="text-gray-900">Auto-rotate on schedule</div>
              <div className="text-gray-500 text-xs">Automatically reassign chores based on rotation frequency</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" className="w-5 h-5 text-[#8B5CF6] rounded" />
            <div>
              <div className="text-gray-900">Allow task swapping</div>
              <div className="text-gray-500 text-xs">Members can trade chores with each other</div>
            </div>
          </label>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-red-200">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-5 h-5 text-red-500" />
          <h3 className="text-gray-900">Danger Zone</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Deleting your household will permanently remove all data including chores, members, and history. This action cannot be undone.
        </p>
        <button className="w-full bg-red-500 hover:bg-red-600 text-white rounded-2xl py-3 shadow-lg transition-all">
          Delete Household
        </button>
      </div>
    </div>
  );
}
