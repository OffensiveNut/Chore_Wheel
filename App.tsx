import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Chores } from './components/Chores';
import { Members } from './components/Members';
import { Settings } from './components/Settings';
import { CompletionModal } from './components/CompletionModal';
import { AddChoreModal } from './components/AddChoreModal';
import { NotificationsPanel } from './components/NotificationsPanel';
import { Home, ListChecks, Users, SettingsIcon, Menu, Bell } from 'lucide-react';

type View = 'dashboard' | 'chores' | 'members' | 'settings';

export default function App() {
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [selectedChoreId, setSelectedChoreId] = useState<number | null>(null);
  const [showAddChoreModal, setShowAddChoreModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleCompleteChore = (choreId: number) => {
    setSelectedChoreId(choreId);
  };

  const handleCloseModal = () => {
    setSelectedChoreId(null);
  };

  const handleOpenAddChore = () => {
    setShowAddChoreModal(true);
  };

  const handleCloseAddChore = () => {
    setShowAddChoreModal(false);
  };

  const handleViewMembers = () => {
    setCurrentView('members');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onCompleteChore={handleCompleteChore} onAddChore={handleOpenAddChore} onViewMembers={handleViewMembers} />;
      case 'chores':
        return <Chores onCompleteChore={handleCompleteChore} onAddChore={handleOpenAddChore} />;
      case 'members':
        return <Members />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onCompleteChore={handleCompleteChore} onAddChore={handleOpenAddChore} onViewMembers={handleViewMembers} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Household Name */}
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-gray-900">Apartment 4B</h1>
                <p className="text-gray-500">4 members</p>
              </div>
            </div>

            {/* Right: Notifications & Avatar */}
            <div className="flex items-center gap-3">
              <button className="relative p-2 hover:bg-gray-100 rounded-xl transition-colors" onClick={() => setShowNotifications(!showNotifications)}>
                <Bell className="w-6 h-6 text-gray-700" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#FF6B6B] rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-full flex items-center justify-center shadow-md">
                <span className="text-xl">👩</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-2 mt-4">
            <button
              onClick={() => setCurrentView('dashboard')}
              className={`px-6 py-2.5 rounded-full transition-all ${
                currentView === 'dashboard'
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setCurrentView('chores')}
              className={`px-6 py-2.5 rounded-full transition-all ${
                currentView === 'chores'
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Chores
            </button>
            <button
              onClick={() => setCurrentView('members')}
              className={`px-6 py-2.5 rounded-full transition-all ${
                currentView === 'members'
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Members
            </button>
            <button
              onClick={() => setCurrentView('settings')}
              className={`px-6 py-2.5 rounded-full transition-all ${
                currentView === 'settings'
                  ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-200'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Settings
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 pb-24 lg:pb-6">
        {renderView()}
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-2xl z-50">
        <div className="flex items-center justify-around px-2 py-3">
          <button
            onClick={() => setCurrentView('dashboard')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
              currentView === 'dashboard'
                ? 'text-[#8B5CF6] bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setCurrentView('chores')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
              currentView === 'chores'
                ? 'text-[#8B5CF6] bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <ListChecks className="w-6 h-6" />
            <span className="text-xs">Chores</span>
          </button>
          <button
            onClick={() => setCurrentView('members')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
              currentView === 'members'
                ? 'text-[#8B5CF6] bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <Users className="w-6 h-6" />
            <span className="text-xs">Members</span>
          </button>
          <button
            onClick={() => setCurrentView('settings')}
            className={`flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all ${
              currentView === 'settings'
                ? 'text-[#8B5CF6] bg-purple-50'
                : 'text-gray-500'
            }`}
          >
            <SettingsIcon className="w-6 h-6" />
            <span className="text-xs">Settings</span>
          </button>
        </div>
      </nav>

      {/* Completion Modal */}
      {selectedChoreId && (
        <CompletionModal choreId={selectedChoreId} onClose={handleCloseModal} />
      )}

      {/* Add Chore Modal */}
      {showAddChoreModal && (
        <AddChoreModal onClose={handleCloseAddChore} />
      )}

      {/* Notifications Panel */}
      {showNotifications && (
        <NotificationsPanel onClose={() => setShowNotifications(false)} />
      )}
    </div>
  );
}