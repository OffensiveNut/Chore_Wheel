import { useState } from 'react';
import { ChoresSettings } from './settings/ChoresSettings';
import { MembersSettings } from './settings/MembersSettings';
import { HouseholdSettings } from './settings/HouseholdSettings';
import { NotificationsSettings } from './settings/NotificationsSettings';

type SettingsTab = 'chores' | 'members' | 'household' | 'notifications';

export function Settings() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('chores');

  const tabs = [
    { id: 'chores' as SettingsTab, label: 'Chores', emoji: '📋' },
    { id: 'members' as SettingsTab, label: 'Members', emoji: '👥' },
    { id: 'household' as SettingsTab, label: 'Household', emoji: '🏠' },
    { id: 'notifications' as SettingsTab, label: 'Notifications', emoji: '🔔' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-gray-900">Settings</h2>
        <p className="text-gray-600">Manage your household preferences</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 rounded-2xl transition-all ${
                activeTab === tab.id
                  ? 'bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{tab.emoji}</span>
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'chores' && <ChoresSettings />}
        {activeTab === 'members' && <MembersSettings />}
        {activeTab === 'household' && <HouseholdSettings />}
        {activeTab === 'notifications' && <NotificationsSettings />}
      </div>
    </div>
  );
}
