import { Link, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentUser, logout } from '../utils/userUtils';
import { useTheme } from '../contexts/ThemeContext';
import MeetingRequestModal from './MeetingRequestModal';
import CircuitAIChat from './CircuitAIChat';

function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();
  const { theme, toggleTheme } = useTheme();
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [showCircuitAI, setShowCircuitAI] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Side Navigation Bar */}
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0">
        <div className="p-6 flex flex-col h-full">
          <div className="flex items-center gap-3 mb-10">
            <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xl">account_tree</span>
            </div>
            <div>
              <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight uppercase">Cisco</h1>
              <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-widest font-semibold">Self Onboarding Portal</p>
            </div>
          </div>
          <nav className="flex flex-col gap-1 flex-grow">
            <Link
              to="/dashboard/overview"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/overview')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/overview') ? 'fill-icon' : ''}`}>dashboard</span>
              <span className="text-sm">Overview</span>
            </Link>
            <Link
              to="/dashboard/moduleLibrary"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/moduleLibrary')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/moduleLibrary') ? 'fill-icon' : ''}`}>school</span>
              <span className="text-sm">Module Library</span>
            </Link>
            <Link
              to="/dashboard/certifications"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/certifications')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/certifications') ? 'fill-icon' : ''}`}>assignment_turned_in</span>
              <span className="text-sm">Growth</span>
            </Link>
            <Link
              to="/dashboard/teamResources"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/teamResources')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/teamResources') ? 'fill-icon' : ''}`}>groups</span>
              <span className="text-sm">Team Resources</span>
            </Link>
            <Link
              to="/dashboard/campus"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/campus')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/campus') ? 'fill-icon' : ''}`}>location_on</span>
              <span className="text-sm">Campus Overview</span>
            </Link>
            <Link
              to="/dashboard/hr-connect"
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                isActive('/dashboard/hr-connect')
                  ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none'
                  : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <span className={`material-symbols-outlined text-[20px] ${isActive('/dashboard/hr-connect') ? 'fill-icon' : ''}`}>policy</span>
              <span className="text-sm">HR Connect</span>
            </Link>
          </nav>
          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">help</span>
              <span className="text-sm font-medium">Support</span>
            </a>
            <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" href="#">
              <span className="material-symbols-outlined text-[20px]">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors mt-2"
            >
              <span className="material-symbols-outlined text-[20px]">logout</span>
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto bg-slate-50/50 dark:bg-slate-950">
        {/* Top Header */}
        <header className={`sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 px-10 py-5 flex items-center justify-between ${
          location.pathname === '/dashboard/moduleLibrary' || location.pathname.startsWith('/dashboard/teamResources') || location.pathname === '/dashboard/campus' || location.pathname === '/dashboard/hr-connect'
            ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md' 
            : 'bg-white dark:bg-slate-900'
        }`}>
          <div className="flex items-center gap-12 flex-1">
            {location.pathname === '/dashboard/certifications' ? (
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input 
                  className="bg-transparent border-none text-sm focus:ring-0 w-64 text-slate-600" 
                  placeholder="Search certifications & progress..." 
                  type="text"
                />
              </div>
            ) : location.pathname === '/dashboard/moduleLibrary' ? (
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Curriculum Progress</span>
                  <span className="text-sm font-black text-primary">68%</span>
                </div>
                <div className="w-72 bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden shadow-inner">
                  <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full transition-all duration-1000" style={{ width: '68%' }}></div>
                </div>
              </div>
            ) : location.pathname === '/dashboard/campus' ? (
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Progress</span>
                  <span className="text-sm font-black text-primary">68%</span>
                </div>
                <div className="w-56 bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            ) : location.pathname === '/dashboard/hr-connect' ? (
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-400">search</span>
                <input
                  className="bg-transparent border-none text-sm focus:ring-0 w-64 text-slate-600 dark:text-slate-300 placeholder:text-slate-500"
                  placeholder="Search policies..."
                  type="text"
                />
              </div>
            ) : location.pathname.startsWith('/dashboard/teamResources') ? (
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Team Space</span>
                <span className="text-slate-300">/</span>
                <span className="text-sm font-black text-primary">{user.team || 'Payments Team'}</span>
              </div>
            ) : (
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                {location.pathname === '/dashboard/overview' ? 'Dashboard Overview' : 
                 location.pathname === '/dashboard/certifications' ? 'Growth & Progress' :
                 location.pathname === '/dashboard/teamResources' ? 'Team Resources' :
                 location.pathname === '/dashboard/campus' ? 'Campus Overview' :
                 'Dashboard'}
              </h2>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <span className="material-symbols-outlined">
                {theme === 'dark' ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <div className="relative">
              <button className={`p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 relative transition-colors ${
                location.pathname === '/dashboard/moduleLibrary' ? '' : ''
              }`}>
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
              </button>
            </div>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
              <div className="text-right hidden md:block">
                <p className={`${location.pathname === '/dashboard/moduleLibrary' ? 'text-sm font-bold' : 'text-sm font-semibold'} text-slate-900 dark:text-white leading-none`}>{user.name}</p>
                <p className={`${location.pathname === '/dashboard/moduleLibrary' ? 'text-[10px] text-slate-400 font-bold uppercase tracking-tight' : 'text-[11px] text-slate-500 font-medium'} mt-1`}>{user.role}</p>
              </div>
              <div
                className={`bg-center bg-cover shadow-sm ${
                  location.pathname === '/dashboard/moduleLibrary' 
                    ? 'size-10 rounded-xl border-2 border-slate-100' 
                    : 'size-9 rounded-full border border-slate-200'
                }`}
                style={{ backgroundImage: `url("${user.avatar}")` }}
              ></div>
            </div>
          </div>
        </header>

        <Outlet />
      </main>

      {/* Right Sidebar */}
      {location.pathname !== '/dashboard/hr-connect' && (
        <aside className={`w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden xl:flex flex-col shrink-0 ${
          location.pathname === '/dashboard/moduleLibrary' || location.pathname.startsWith('/dashboard/teamResources') || location.pathname === '/dashboard/campus' ? 'shadow-[-4px_0_12px_rgba(0,0,0,0.02)]' : ''
        }`}>
          <div className={`${location.pathname === '/dashboard/moduleLibrary' || location.pathname.startsWith('/dashboard/teamResources') || location.pathname === '/dashboard/campus' ? 'p-8 space-y-12' : 'p-8 space-y-10'}`}>
            {location.pathname === '/dashboard/campus' ? (
            <>
              {/* Campus AI Assistant */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Campus AI Assistant</h3>
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-12 rounded-xl bg-primary shadow-lg shadow-primary/20 flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-2xl fill-icon">smart_toy</span>
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 dark:text-white leading-tight">Nexus Bot</p>
                      <p className="text-[11px] text-slate-400 font-bold mt-0.5">Campus Guide</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowCircuitAI(true)}
                    className="w-full py-3 bg-primary text-white text-[11px] font-black rounded-xl hover:bg-primary/90 transition-all shadow-md active:scale-95 uppercase tracking-widest"
                  >
                    Ask a Question
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-4 font-medium italic">"Show me today's vegetarian specials"</p>
                </div>
              </div>

              {/* Quick Services */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Quick Services</h3>
                <div className="space-y-3">
                  <a
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:border-primary/20 group"
                    href="https://maps.app.goo.gl/737Up1S4J1VbrWbU9"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open Interactive Map in new tab"
                  >
                    <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-xl">map</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Interactive Map</span>
                  </a>
                  <a className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:border-primary/20 group" href="#">
                    <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-xl">support_agent</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">IT Concierge</span>
                  </a>
                  <a className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4 items-center hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:border-primary/20 group" href="#">
                    <div className="size-9 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-500 group-hover:text-primary flex items-center justify-center shrink-0 transition-colors">
                      <span className="material-symbols-outlined text-xl">meeting_room</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Room Reservation</span>
                  </a>
                </div>
              </div>

              {/* Security & Alerts */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Security & Alerts</h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-100 dark:before:bg-slate-800">
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary z-10 flex items-center justify-center">
                      <span className="size-2 bg-primary rounded-full animate-pulse"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-bold">Shuttle Route A <span className="text-amber-500">Delay</span></p>
                      <p className="text-[10px] text-slate-400 font-medium">12 mins ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 z-10 flex items-center justify-center">
                      <span className="size-2 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-bold">Wi-Fi Maintenance (BGL 16)</p>
                      <p className="text-[10px] text-slate-400 font-medium">Scheduled for 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : location.pathname.startsWith('/dashboard/teamResources') ? (
            <>
              {/* Current Sprint Stats */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Current Sprint Stats</h3>
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-black text-slate-500 uppercase">Sprint Completion</span>
                      <span className="text-xs font-black text-primary">74%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '74%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Velocity</p>
                      <p className="text-lg font-black text-slate-900 dark:text-white">42</p>
                    </div>
                    <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 text-center">
                      <p className="text-[10px] font-black text-slate-400 uppercase mb-1">Open PRs</p>
                      <p className="text-lg font-black text-secondary">8</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Announcements */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Announcements</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30">
                    <p className="text-xs font-bold text-blue-900 dark:text-blue-300">Stripe API Migration</p>
                    <p className="text-[10px] text-blue-700 dark:text-blue-400 mt-1">Starting tomorrow at 2:00 PM PST. Ensure tests are passing.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 flex gap-4">
                    <div className="size-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-lg">warning</span>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">Downtime Alert</p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1">Sandbox environment maintenance on Friday.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Quick Links</h3>
                <div className="grid grid-cols-1 gap-2">
                  <a 
                    href="https://developer.webex.com/docs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">description</span>
                    <span className="text-[11px] font-black uppercase">Technical Docs</span>
                  </a>
                  <a 
                    href="https://developer.webex.com/docs/api/getting-started" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">terminal</span>
                    <span className="text-[11px] font-black uppercase">API Playground</span>
                  </a>
                  <a 
                    href="https://webexteams://im?space=c5662510-f83b-11f0-b457-8d96be1becbc" 
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">forum</span>
                    <span className="text-[11px] font-black uppercase">Support Slack</span>
                  </a>
                </div>
              </div>
            </>
          ) : location.pathname === '/dashboard/moduleLibrary' ? (
            <>
              {/* Your Mentor */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Your Mentor</h3>
                <div className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-4 mb-6">
                    {(() => {
                      const mentorAvatar = user.manager
                        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS'
                        : user.avatar;
                      return (
                        <div
                          className="size-14 rounded-2xl bg-center bg-cover border-2 border-white shadow-md"
                          style={{ backgroundImage: `url("${mentorAvatar}")` }}
                        ></div>
                      );
                    })()}
                    <div>
                      <p className="text-base font-black text-slate-900 dark:text-white leading-tight">{user.manager || 'Sarah Jenkins'}</p>
                      <p className="text-xs text-slate-500 font-bold mt-1 uppercase tracking-tight">Sr. Technical Lead</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowMeetingModal(true)}
                    className="w-full py-3 bg-primary text-white text-xs font-black rounded-xl hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all uppercase tracking-widest"
                  >
                    Request 1:1
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-4 font-bold italic">Next: Today, 4:00 PM</p>
                </div>
              </div>

              {/* Action Required */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Action Required</h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white hover:border-red-200 transition-all flex gap-4 items-center">
                    <div className="size-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl font-bold">event_busy</span>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">Org Overview Quiz</p>
                      <p className="text-[10px] text-red-500 font-black mt-1 uppercase">Due in 48 hours</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-white hover:border-primary/20 transition-all flex gap-4 items-center">
                    <div className="size-10 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-xl">gavel</span>
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-900 dark:text-white">Security Policy</p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Sept 15, 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Latest Updates */}
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Latest Updates</h3>
                <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
                  <div className="flex gap-5 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary z-10 flex items-center justify-center shadow-sm">
                      <span className="size-1.5 bg-primary rounded-full"></span>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[11px] text-slate-900 dark:text-white font-bold leading-relaxed">
                        Completed <span className="text-completed">Corporate Culture</span>
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-5 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                      <span className="size-1.5 bg-slate-200 rounded-full"></span>
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[11px] text-slate-900 dark:text-white font-bold leading-relaxed">
                        Started <span className="text-primary">Org Overview</span>
                      </p>
                      <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : location.pathname === '/dashboard/certifications' ? (
            <>
              {/* Recently Earned by Colleagues */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Recently Earned by Colleagues</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-center bg-cover shrink-0" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}></div>
                    <div>
                      <p className="text-xs text-slate-900 dark:text-white font-medium">
                        <span className="font-bold">Sarah Jenkins</span> earned <span className="text-primary font-bold">Cloud Architect</span>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-slate-400 text-lg">person</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-900 dark:text-white font-medium">
                        <span className="font-bold">Mark Thompson</span> earned <span className="text-primary font-bold">MERN Specialist</span>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-slate-400 text-lg">person</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-900 dark:text-white font-medium">
                        <span className="font-bold">Elena Rodriguez</span> earned <span className="text-primary font-bold">Security Compliant</span>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1">2 days ago</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 py-2 border border-slate-200 dark:border-slate-800 text-[11px] font-bold rounded text-slate-500 hover:bg-slate-50 transition-colors">View All Activity</button>
              </div>

              {/* Your Progress Summary */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Your Progress Summary</h3>
                <div className="p-5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex justify-between items-end mb-4">
                    <div>
                      <p className="text-2xl font-bold text-slate-900 dark:text-white">03</p>
                      <p className="text-[10px] text-slate-500 uppercase font-bold tracking-tight">Active Certifications</p>
                    </div>
                    <span className="material-symbols-outlined text-primary mb-1">verified</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-[10px] text-slate-500 mb-2">Next Renewal in <span className="font-bold text-slate-900 dark:text-white">45 Days</span></p>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full">
                      <div className="bg-orange-400 h-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Assigned Mentor */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Assigned Mentor</h3>
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    {(() => {
                      const mentorAvatar = user.manager
                        ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS'
                        : user.avatar;
                      return (
                        <div
                          className="size-12 rounded-lg bg-center bg-cover bg-slate-200"
                          style={{ backgroundImage: `url("${mentorAvatar}")` }}
                        ></div>
                      );
                    })()}
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">{user.manager || 'Sarah Jenkins'}</p>
                      <p className="text-[11px] text-slate-500">Sr. Technical Lead</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setShowMeetingModal(true)}
                    className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors"
                  >
                    Schedule 1:1 Session
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-3 italic">Next available: Today, 4:00 PM</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Activity</h3>
                <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-100 dark:before:bg-slate-800">
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary z-10 flex items-center justify-center">
                      <span className="size-2 bg-primary rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-medium leading-tight">Completed <span className="font-bold">Culture</span> module</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                      <span className="size-2 bg-slate-300 rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-medium leading-tight">Submitted <span className="font-bold">MERN Assessment</span></p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                      <span className="size-2 bg-slate-300 rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-medium leading-tight">Mentor session confirmed</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Aug 24, 2024</p>
                    </div>
                  </div>
                  <div className="flex gap-4 relative">
                    <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                      <span className="size-2 bg-slate-300 rounded-full"></span>
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-900 dark:text-white font-medium leading-tight">Account setup finalized</p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Aug 23, 2024</p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-6 py-2 border border-slate-200 dark:border-slate-800 text-slate-500 text-[10px] font-bold rounded uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  View Full Audit Log
                </button>
              </div>
            </>
          )}
          </div>
        </aside>
      )}

      {/* Meeting Request Modal */}
      <MeetingRequestModal 
        isOpen={showMeetingModal} 
        onClose={() => setShowMeetingModal(false)} 
      />

      {/* Circuit AI Chat */}
      <CircuitAIChat 
        isOpen={showCircuitAI} 
        onClose={() => setShowCircuitAI(false)} 
      />
    </div>
  );
}

export default DashboardLayout;
