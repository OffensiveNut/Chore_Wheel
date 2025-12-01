import { Bell, Mail, Smartphone } from 'lucide-react';

export function NotificationsSettings() {
  return (
    <div className="space-y-6">
      {/* Notification Channels */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Notification Channels</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
            <Bell className="w-5 h-5 text-[#8B5CF6]" />
            <div className="flex-1">
              <div className="text-gray-900">Push Notifications</div>
              <div className="text-gray-500 text-xs">Receive alerts in your browser or mobile app</div>
            </div>
          </label>
          <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
            <Mail className="w-5 h-5 text-[#8B5CF6]" />
            <div className="flex-1">
              <div className="text-gray-900">Email Notifications</div>
              <div className="text-gray-500 text-xs">Get updates sent to your email address</div>
            </div>
          </label>
        </div>
      </div>

      {/* Chore Notifications */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Chore Notifications</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">Chore assigned to me</div>
              <div className="text-gray-500 text-xs">When a new chore is assigned to you</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">1 day before due date</div>
              <div className="text-gray-500 text-xs">Reminder 24 hours before your chore is due</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">Chore is overdue</div>
              <div className="text-gray-500 text-xs">When you have an incomplete overdue chore</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">Chore completed by others</div>
              <div className="text-gray-500 text-xs">When other household members complete their chores</div>
            </div>
            <input type="checkbox" className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
        </div>
      </div>

      {/* Household Notifications */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Household Activity</h3>
        <div className="space-y-3">
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">New member joins</div>
              <div className="text-gray-500 text-xs">When someone joins your household</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">Weekly summary</div>
              <div className="text-gray-500 text-xs">Get a summary of household activity every Monday</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
          <label className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors">
            <div>
              <div className="text-gray-900">Rotation reminder</div>
              <div className="text-gray-500 text-xs">When chores are about to rotate</div>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 text-[#8B5CF6] rounded" />
          </label>
        </div>
      </div>

      {/* Quiet Hours */}
      <div className="bg-white rounded-3xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-gray-900 mb-4">Quiet Hours</h3>
        <p className="text-gray-600 mb-4">
          Pause notifications during specific hours. You'll still receive important alerts.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">From</label>
            <input
              type="time"
              defaultValue="22:00"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">To</label>
            <input
              type="time"
              defaultValue="08:00"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      <button className="w-full bg-gradient-to-r from-[#6EE7B7] to-[#34D399] text-white rounded-2xl py-4 shadow-lg hover:shadow-xl transition-all">
        Save Notification Preferences
      </button>
    </div>
  );
}
