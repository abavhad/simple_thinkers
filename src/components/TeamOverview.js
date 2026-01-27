import { useState } from 'react';
import { getCurrentUser } from '../utils/userUtils';
import { useNavigate } from 'react-router-dom';

function TeamOverview() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [hoveredMember, setHoveredMember] = useState(null);

  if (!user) {
    return null;
  }

  const teamName = user.team || 'Payments Infrastructure';
  const teamDisplayName = teamName === 'Payments Infrastructure' ? 'Payments Team' : teamName;

  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20 mb-8">
          <div className="relative z-10">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <span className="material-symbols-outlined text-3xl">group_work</span>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase backdrop-blur-sm">
                    Your Team
                  </span>
                </div>
                <h2 className="text-4xl font-black mb-3">{teamDisplayName} Overview</h2>
                <p className="text-slate-200 text-base font-medium max-w-2xl mb-6">
                  The backbone of financial operations at Webex Playtime, ensuring secure, global-scale transaction processing.
                </p>
                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">people</span>
                    <span className="text-sm text-slate-200">6 Team Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                    <span className="text-sm text-slate-200">Global Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    <span className="text-sm text-slate-200">24/7 Operations</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => navigate('/dashboard/teamResources')}
                className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-slate-100 transition-all flex items-center gap-2 shrink-0"
              >
                <span>View Resources</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="absolute -right-12 -bottom-12 size-48 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -left-8 -top-8 size-32 bg-white/5 rounded-full blur-2xl"></div>
          <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[200px] text-white/5 rotate-12 select-none">groups</span>
        </div>
      </div>

      {/* Organization Hierarchy */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-10 border-b border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Organization Hierarchy</h3>
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-[11px] font-bold text-slate-500 uppercase">Live Structure</span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          {/* Senior Manager */}
          <div 
            className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-slate-200 dark:border-slate-800 shadow-sm w-64 flex items-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group"
            onMouseEnter={() => setHoveredMember('marcus')}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div className="size-12 rounded-lg bg-center bg-cover border-2 border-slate-100 group-hover:border-primary/50 transition-all" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}></div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">Marcus Thorne</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-tight">Senior Manager</p>
            </div>
            <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">arrow_forward</span>
          </div>
          <div className="connector-v"></div>

          {/* Technical Lead */}
          <div 
            className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border-2 border-primary/30 shadow-lg shadow-primary/5 w-64 flex items-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-xl transition-all group"
            onMouseEnter={() => setHoveredMember('manager')}
            onMouseLeave={() => setHoveredMember(null)}
          >
            <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary border-2 border-primary/20 group-hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">{user.manager || 'Sarah Jenkins'}</p>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-tight">Technical Lead</p>
              <p className="text-[9px] text-slate-500 mt-1">Your Direct Manager</p>
            </div>
            <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
          </div>
          <div className="connector-v"></div>

          {/* Engineers */}
          <div className="w-[80%] h-[2px] bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex justify-between w-full mt-0">
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div 
                className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group"
                onMouseEnter={() => setHoveredMember('liam')}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">Liam Carter</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div 
                className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group"
                onMouseEnter={() => setHoveredMember('elena')}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">Elena Rodriguez</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div 
                className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all group"
                onMouseEnter={() => setHoveredMember('david')}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">David Chen</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Responsibilities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-primary text-white p-8 rounded-xl shadow-xl shadow-primary/10 relative overflow-hidden">
          <div className="relative z-10">
            <div className="size-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-2xl font-bold">flag</span>
            </div>
            <h4 className="text-xl font-black mb-3">Team Mission</h4>
            <p className="text-slate-100 text-sm leading-relaxed font-medium">
              To build and maintain the most resilient, secure, and user-friendly payment infrastructure in the enterprise communication market, enabling seamless global commerce.
            </p>
          </div>
          <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-white/5 text-[160px] select-none pointer-events-none">payments</span>
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Key Responsibilities</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <div className="pt-0.5">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Global Gateway Integration</p>
                <p className="text-[11px] text-slate-500">Managing Stripe, PayPal, and regional provider APIs.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <div className="pt-0.5">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">PCI Compliance & Security</p>
                <p className="text-[11px] text-slate-500">Maintaining Level 1 security standards across all nodes.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
              <div className="pt-0.5">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200">Subscription Engine</p>
                <p className="text-[11px] text-slate-500">Automated recurring billing and tier management.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamOverview;
