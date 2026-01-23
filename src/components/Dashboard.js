import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../utils/userUtils';

function Dashboard() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [activeModule, setActiveModule] = useState('module-library');

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

  // Get user's first name for greeting
  const firstName = user.name ? user.name.split(' ')[0] : 'User';

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="flex h-screen overflow-hidden">
        {/* Side Navigation Bar */}
        <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shrink-0">
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-3 mb-10">
              <div className="size-9 bg-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl">account_tree</span>
              </div>
              <div>
                <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-none tracking-tight">WEBEX</h1>
                <p className="text-slate-400 text-[10px] mt-1 uppercase tracking-widest font-semibold">Development Portal</p>
              </div>
            </div>
            <nav className="flex flex-col gap-1 flex-grow">
              <a 
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                  activeModule === 'overview' 
                    ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveModule('overview'); }}
              >
                <span className="material-symbols-outlined text-[20px]">dashboard</span>
                <span className="text-sm">Overview</span>
              </a>
              <a 
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-all ${
                  activeModule === 'module-library' 
                    ? 'bg-primary/5 text-primary font-semibold border-l-4 border-primary rounded-l-none' 
                    : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
                href="#"
                onClick={(e) => { e.preventDefault(); setActiveModule('module-library'); }}
              >
                <span className="material-symbols-outlined text-[20px]">school</span>
                <span className="text-sm">Module Library</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">assignment_turned_in</span>
                <span className="text-sm">Certifications</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">analytics</span>
                <span className="text-sm">Performance</span>
              </a>
              <a className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium transition-all" href="#">
                <span className="material-symbols-outlined text-[20px]">group</span>
                <span className="text-sm">Team Resources</span>
              </a>
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
        <main className="flex-1 overflow-y-auto bg-slate-50 dark:bg-slate-950">
          {/* Top Header */}
          <header className="sticky top-0 z-20 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-12 flex-1">
              <div>
                <div className="flex items-center gap-4 mb-1">
                  <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Course Completion</span>
                  <span className="text-xs font-bold text-primary">68%</span>
                </div>
                <div className="w-64 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full">
                  <div className="bg-primary h-full rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 relative">
                  <span className="material-symbols-outlined">notifications</span>
                  <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
                </button>
              </div>
              <div className="flex items-center gap-3 pl-6 border-l border-slate-200 dark:border-slate-800">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white leading-none">{user.name}</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">{user.role}</p>
                </div>
                <div 
                  className="size-9 rounded-full bg-center bg-cover border border-slate-200" 
                  style={{ backgroundImage: `url("${user.avatar}")` }}
                ></div>
              </div>
            </div>
          </header>

          <div className="p-10 max-w-6xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Module Library</h2>
              <p className="text-slate-500 text-sm">A structured onboarding curriculum designed for engineering excellence.</p>
            </div>

            {/* Core Curriculum */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Core Curriculum</h3>
                <span className="text-[11px] font-bold text-slate-400">6 MODULES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* Completed Modules */}
                {[
                  { icon: 'info', title: 'Welcome & Introduction' },
                  { icon: 'diversity_2', title: 'Corporate Culture' }
                ].map((module, idx) => (
                  <div key={idx} className="module-card bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                    <div className="flex items-start justify-between mb-4">
                      <span className="material-symbols-outlined text-slate-400">{module.icon}</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">Completed</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-4">{module.title}</h4>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full">
                      <div className="bg-emerald-500 h-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                ))}
                {/* In Progress Module */}
                <div className="module-card bg-white dark:bg-slate-900 p-5 rounded-lg border border-primary/20 bg-primary/5 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <span className="material-symbols-outlined text-primary">corporate_fare</span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">In Progress</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Org Overview</h4>
                  <p className="text-[11px] text-slate-500 mb-4">45% through assessment</p>
                  <div className="w-full bg-slate-200 dark:bg-slate-800 h-1 rounded-full">
                    <div className="bg-primary h-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
              {/* Up Next Modules */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
                {[
                  { icon: 'policy', title: 'Policies & Compliance' },
                  { icon: 'work_outline', title: 'Career Pathways' },
                  { icon: 'build_circle', title: 'Internal Tools' }
                ].map((module, idx) => (
                  <div key={idx} className="module-card bg-slate-50/50 dark:bg-slate-900/50 p-5 rounded-lg border border-slate-200 dark:border-slate-800 border-dashed">
                    <div className="flex items-start justify-between mb-4 opacity-50">
                      <span className="material-symbols-outlined text-slate-400">{module.icon}</span>
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wide">Up Next</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-400 mb-4">{module.title}</h4>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering Specialization */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Engineering Specialization</h3>
                <span className="text-[11px] font-bold text-slate-400">4 MODULES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Completed */}
                <div className="module-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between h-40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">Engineering at Cisco</h4>
                      <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide">Completed</span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2">Overview of standard practices, architectural guidelines, and innovation culture.</p>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                {/* In Progress */}
                <div className="module-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/30 shadow-sm flex flex-col justify-between h-40">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">MERN Foundations</h4>
                      <span className="px-2 py-0.5 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wide">In Progress</span>
                    </div>
                    <p className="text-xs text-slate-500">Advanced study of MongoDB, Express, React, and Node.js within the core framework.</p>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                    <div className="bg-primary h-full rounded-full" style={{ width: '64%' }}></div>
                  </div>
                </div>
                {/* Up Next */}
                {[
                  { title: 'Codebase Architecture', desc: 'Deep dive into the core repository structure and functional components.' },
                  { title: 'Dev Workflow & CI/CD', desc: 'Mastering PR processes, automated pipelines, and local deployment environments.' }
                ].map((module, idx) => (
                  <div key={idx} className="module-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between opacity-50 h-40">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white">{module.title}</h4>
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-400 text-[10px] font-bold uppercase tracking-wide">Up Next</span>
                      </div>
                      <p className="text-xs text-slate-500">{module.desc}</p>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Team-Specific Modules */}
            <section className="mb-14 pb-14">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Team: {user.team || 'Payments Infrastructure'}</h3>
                <span className="text-[11px] font-bold text-slate-400">4 MODULES</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* In Progress */}
                <div className="module-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center">
                  <div className="size-10 mx-auto rounded-lg bg-slate-50 dark:bg-slate-800 text-primary flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined">group_work</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">Team Overview</h4>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full mb-2">
                    <div className="bg-primary h-full" style={{ width: '20%' }}></div>
                  </div>
                  <span className="text-[10px] font-semibold text-primary">20% Completed</span>
                </div>
                {/* Locked */}
                {[
                  { icon: 'hub', title: 'Architecture', status: 'Pending Overview' },
                  { icon: 'map', title: 'Services Map', status: 'Locked' },
                  { icon: 'task', title: 'First Assignment', status: 'Locked' }
                ].map((module, idx) => (
                  <div key={idx} className="module-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 text-center opacity-60">
                    <div className="size-10 mx-auto rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-3">
                      <span className="material-symbols-outlined">{module.icon}</span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-400 mb-2">{module.title}</h4>
                    <span className="text-[10px] font-semibold text-slate-400">{module.status}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-80 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-y-auto hidden xl:flex flex-col shrink-0">
          <div className="p-8 space-y-10">
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
                <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors">Schedule 1:1 Session</button>
                <p className="text-[10px] text-center text-slate-400 mt-3 italic">Next available: Today, 4:00 PM</p>
              </div>
            </div>

            {/* Upcoming Deadlines */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Upcoming Deadlines</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 flex gap-3 items-start">
                  <div className="size-8 rounded bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">event</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Org Overview Quiz</p>
                    <p className="text-[10px] text-red-500 font-medium mt-1">Due in 2 days</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 flex gap-3 items-start">
                  <div className="size-8 rounded bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">description</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Security Compliance</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">Sept 15, 2024</p>
                  </div>
                </div>
                <div className="p-3 rounded-lg border border-slate-100 dark:border-slate-800 flex gap-3 items-start opacity-60">
                  <div className="size-8 rounded bg-slate-50 text-slate-400 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-lg">history_edu</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Ethics Training</p>
                    <p className="text-[10px] text-slate-500 font-medium mt-1">Sept 30, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Recent Activity</h3>
              <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-slate-100 dark:before:bg-slate-800">
                <div className="flex gap-4 relative">
                  <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-primary z-10 flex items-center justify-center">
                    <span className="size-2 bg-primary rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-900 dark:text-white font-medium">Completed <span className="font-bold">Culture</span> module</p>
                    <p className="text-[10px] text-slate-400">2 hours ago</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                    <span className="size-2 bg-slate-300 rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-900 dark:text-white font-medium">Started <span className="font-bold">Org Overview</span></p>
                    <p className="text-[10px] text-slate-400">Yesterday</p>
                  </div>
                </div>
                <div className="flex gap-4 relative">
                  <div className="size-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 z-10 flex items-center justify-center">
                    <span className="size-2 bg-slate-300 rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-900 dark:text-white font-medium">Mentor session confirmed</p>
                    <p className="text-[10px] text-slate-400">Aug 24, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Dashboard;
