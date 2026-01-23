import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/userUtils';
import { useTheme } from '../contexts/ThemeContext';

function Chat() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const { theme, toggleTheme } = useTheme();
  const [showWebexMessage, setShowWebexMessage] = useState(false);
  const [introMessage, setIntroMessage] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/');
    } else {
      // Check if there's a Webex intro message stored
      const storedMessage = localStorage.getItem('webexIntroMessage');
      if (storedMessage) {
        setIntroMessage(storedMessage);
        setShowWebexMessage(true);
      }
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const openWebexTeams = () => {
    const spaceId = '20bfd3d0-5b4c-11f0-9c71-67d2ef7739e5';
    // Try to open Webex Teams app
    window.location.href = `webexteams://im?space=${spaceId}`;
    
    // Fallback: Open web version
    setTimeout(() => {
      window.open(`https://web.webex.com/webapp/?spaceId=${spaceId}`, '_blank');
    }, 1000);
  };

  const copyMessage = () => {
    navigator.clipboard.writeText(introMessage).then(() => {
      alert('Message copied to clipboard! You can paste it in Webex Teams.');
    });
  };

  const dismissMessage = () => {
    setShowWebexMessage(false);
    localStorage.removeItem('webexIntroMessage');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Theme Toggle Button in Navbar */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 hover:border-primary/50 shadow-sm"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined text-xl">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
          </div>
          <div className="flex items-center gap-3">
            <div className="size-8">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
                </defs>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#111318] dark:text-white">Webex Playtime</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Webex Teams Intro Message Banner */}
        {showWebexMessage && introMessage && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-400">chat</span>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">
                    Welcome Message Ready for Webex Teams
                  </h3>
                </div>
                <p className="text-sm text-blue-800 dark:text-blue-200 mb-4">
                  Your intro message has been prepared. Open Webex Teams and share it with your team!
                </p>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-4 border border-blue-200 dark:border-blue-700">
                  <pre className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-sans">
                    {introMessage}
                  </pre>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={openWebexTeams}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                  >
                    <span className="material-symbols-outlined">open_in_new</span>
                    Open Webex Teams
                  </button>
                  <button
                    onClick={copyMessage}
                    className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 border border-gray-300 dark:border-gray-600"
                  >
                    <span className="material-symbols-outlined">content_copy</span>
                    Copy Message
                  </button>
                  <button
                    onClick={dismissMessage}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 px-4 py-2 rounded-lg transition-colors"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* Welcome Section */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
            <div 
              className="w-24 h-24 rounded-full bg-cover bg-center ring-4 ring-primary/20"
              style={{ backgroundImage: `url("${user.avatar}")` }}
            ></div>
            <div>
              <h2 className="text-3xl font-bold text-[#111318] dark:text-white mb-2">
                Welcome, {user.name}! 👋
              </h2>
              <p className="text-[#616f89] dark:text-gray-400">
                Your profile has been set up successfully
              </p>
            </div>
          </div>

          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#111318] dark:text-white mb-4">Personal Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">person</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Name</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.name}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">email</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">badge</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Employee ID</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.employeeId}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#111318] dark:text-white mb-4">Work Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">groups</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Team</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.team}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">account_tree</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Team Joined</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.teamJoined}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">supervisor_account</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Manager</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.manager}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">work</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Role</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Level</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.level}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <span className="material-symbols-outlined text-primary">folder</span>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Project</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.project}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Onboarding Data Section */}
          {user.onboardingData && (
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-[#111318] dark:text-white mb-4">Onboarding Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {user.onboardingData.hometown && (
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hometown</p>
                    <p className="font-medium text-[#111318] dark:text-white">{user.onboardingData.hometown}</p>
                  </div>
                )}
                {user.onboardingData.hobbies && user.onboardingData.hobbies.length > 0 && (
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Hobbies</p>
                    <p className="font-medium text-[#111318] dark:text-white">
                      {Array.isArray(user.onboardingData.hobbies) 
                        ? user.onboardingData.hobbies.join(', ') 
                        : user.onboardingData.hobbies}
                    </p>
                  </div>
                )}
                {user.onboardingData.mernComfort && (
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">MERN Comfort Level</p>
                    <p className="font-medium text-[#111318] dark:text-white capitalize">{user.onboardingData.mernComfort}</p>
                  </div>
                )}
                {user.onboardingData.learningPreference && (
                  <div className="p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400">Learning Preference</p>
                    <p className="font-medium text-[#111318] dark:text-white capitalize">{user.onboardingData.learningPreference}</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Chat Placeholder */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-[#111318] dark:text-white mb-4">Chat</h3>
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 text-center">
              <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">chat_bubble_outline</span>
              <p className="text-[#616f89] dark:text-gray-400">Chat functionality coming soon...</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Chat;
