import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function ModuleLibrary() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Module Library</h2>
        <p className="text-slate-500 text-base font-medium max-w-2xl">Refined onboarding modules curated for engineering excellence and strategic professional development.</p>
      </div>

      {/* Core Curriculum */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Core Curriculum</h3>
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full"></span>
            <span className="text-[11px] font-bold text-slate-500">6 Specialized Modules</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Completed: Welcome & Introduction */}
          <div 
            onClick={() => navigate('/dashboard/moduleLibrary/view/welcome-introduction')}
            className="module-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft relative overflow-hidden cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-completed/5 text-completed rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-medium">verified_user</span>
              </div>
              <div className="relative size-12">
                <svg className="size-full" viewBox="0 0 36 36">
                  <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                  <circle className="stroke-completed" cx="18" cy="18" fill="none" r="16" strokeDasharray="100, 100" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-completed text-lg font-bold">check</span>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Welcome & Introduction</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-completed/10 text-completed text-[10px] font-black uppercase tracking-wider">Completed</span>
          </div>

          {/* Completed: Corporate Culture */}
          <div 
            onClick={() => navigate('/dashboard/moduleLibrary/view/corporate-culture')}
            className="module-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-completed/5 text-completed rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-medium">diversity_3</span>
              </div>
              <div className="relative size-12">
                <svg className="size-full" viewBox="0 0 36 36">
                  <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                  <circle className="stroke-completed" cx="18" cy="18" fill="none" r="16" strokeDasharray="100, 100" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-completed text-lg font-bold">check</span>
                </div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">Corporate Culture</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-completed/10 text-completed text-[10px] font-black uppercase tracking-wider">Completed</span>
          </div>

          {/* In Progress: Organization Overview */}
          <div 
            onClick={() => navigate('/dashboard/moduleLibrary/view/organization-overview')}
            className="module-card bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-primary/20 shadow-xl shadow-primary/5 cursor-pointer"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl font-medium">corporate_fare</span>
              </div>
              <div className="relative size-12">
                <svg className="size-full" viewBox="0 0 36 36">
                  <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                  <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="45, 100" strokeLinecap="round" strokeWidth="3" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-primary">45%</div>
              </div>
            </div>
            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1 leading-tight">Organization Overview</h4>
            <p className="text-xs text-slate-500 mb-4 font-medium">Deep dive into structure and goals</p>
            <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">In Progress</span>
          </div>
        </div>

        {/* Up Next Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="module-card glass-pending p-6 rounded-2xl transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-2xl font-medium">policy</span>
              </div>
              <span className="material-symbols-outlined text-slate-300">lock_open</span>
            </div>
            <h4 className="text-lg font-bold text-slate-400 mb-2 leading-tight">Policies & Compliance</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Up Next</span>
          </div>

          <div className="module-card glass-pending p-6 rounded-2xl transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-2xl font-medium">insights</span>
              </div>
              <span className="material-symbols-outlined text-slate-300">lock_open</span>
            </div>
            <h4 className="text-lg font-bold text-slate-400 mb-2 leading-tight">Career Pathways</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Up Next</span>
          </div>

          <div className="module-card glass-pending p-6 rounded-2xl transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="size-12 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-2xl font-medium">construction</span>
              </div>
              <span className="material-symbols-outlined text-slate-300">lock_open</span>
            </div>
            <h4 className="text-lg font-bold text-slate-400 mb-2 leading-tight">Internal Tooling</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Up Next</span>
          </div>
        </div>
      </section>

      {/* Engineering Specialization */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Engineering Specialization</h3>
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full"></span>
            <span className="text-[11px] font-bold text-slate-500">4 MODULES</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Completed: Engineering at Cisco */}
          <div 
            onClick={() => navigate('/dashboard/moduleLibrary/view/engineering-at-cisco')}
            className="module-card bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft flex items-center gap-6 cursor-pointer"
          >
            <div className="relative size-20 shrink-0">
              <svg className="size-full" viewBox="0 0 36 36">
                <circle className="stroke-slate-50 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="4" />
                <circle className="stroke-completed" cx="18" cy="18" fill="none" r="16" strokeDasharray="100, 100" strokeLinecap="round" strokeWidth="4" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-completed text-3xl">terminal</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">Engineering at Cisco</h4>
                <span className="px-2 py-0.5 rounded bg-completed/10 text-completed text-[9px] font-black uppercase">Completed</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Overview of standard practices, architectural guidelines, and innovation culture.</p>
            </div>
          </div>

          {/* In Progress: MERN Foundations */}
          <div 
            onClick={() => navigate('/dashboard/moduleLibrary/view/mern-foundations')}
            className="module-card bg-white dark:bg-slate-900 p-8 rounded-2xl border-2 border-primary/20 shadow-xl shadow-primary/5 flex items-center gap-6 cursor-pointer"
          >
            <div className="relative size-20 shrink-0">
              <svg className="size-full" viewBox="0 0 36 36">
                <circle className="stroke-slate-50 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="4" />
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="64, 100" strokeLinecap="round" strokeWidth="4" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-3xl">layers</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white">MERN Foundations</h4>
                <span className="px-2 py-0.5 rounded bg-primary text-white text-[9px] font-black uppercase">In Progress</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Advanced study of MongoDB, Express, React, and Node.js within the core framework.</p>
            </div>
          </div>

          {/* Up Next: Codebase Architecture */}
          <div className="module-card glass-pending p-8 rounded-2xl flex items-center gap-6 group">
            <div className="relative size-20 shrink-0">
              <div className="size-20 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-3xl font-medium">schema</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-extrabold text-slate-400">Codebase Architecture</h4>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[9px] font-black uppercase">Up Next</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Deep dive into the core repository structure and functional components.</p>
            </div>
          </div>

          {/* Up Next: Dev Workflow & CI/CD */}
          <div className="module-card glass-pending p-8 rounded-2xl flex items-center gap-6 group">
            <div className="relative size-20 shrink-0">
              <div className="size-20 bg-slate-100 dark:bg-slate-800 text-slate-400 rounded-2xl flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                <span className="material-symbols-outlined text-3xl font-medium">settings</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xl font-extrabold text-slate-400">Dev Workflow & CI/CD</h4>
                <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-400 text-[9px] font-black uppercase">Up Next</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Mastering PR processes, automated pipelines, and local deployment environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team-Specific Modules */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Team: {user.team || 'Payments Infrastructure'}</h3>
          <div className="flex items-center gap-2">
            <span className="size-2 bg-primary rounded-full"></span>
            <span className="text-[11px] font-bold text-slate-500">4 MODULES</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* In Progress: Team Overview */}
          <div 
            onClick={() => navigate('/dashboard/teamResources/overview')}
            className="module-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-soft text-center cursor-pointer"
          >
            <div className="size-12 mx-auto rounded-xl bg-primary/5 text-primary flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl font-medium">group_work</span>
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-tight">Team Overview</h4>
            <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mb-3">
              <div className="bg-primary h-full rounded-full" style={{ width: '20%' }}></div>
            </div>
            <span className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">20% Completed</span>
          </div>

          {/* Pending: Architecture */}
          <div className="module-card glass-pending p-6 rounded-2xl text-center group">
            <div className="size-12 mx-auto rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-4 group-hover:bg-slate-200 transition-colors">
              <span className="material-symbols-outlined text-2xl font-medium">hub</span>
            </div>
            <h4 className="text-base font-bold text-slate-400 mb-3 leading-tight">Architecture</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Pending Overview</span>
          </div>

          {/* Locked: Services Map */}
          <div className="module-card glass-pending p-6 rounded-2xl text-center group opacity-60">
            <div className="size-12 mx-auto rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl font-medium">map</span>
            </div>
            <h4 className="text-base font-bold text-slate-400 mb-3 leading-tight">Services Map</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Locked</span>
          </div>

          {/* Locked: First Assignment */}
          <div className="module-card glass-pending p-6 rounded-2xl text-center group opacity-60">
            <div className="size-12 mx-auto rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-2xl font-medium">task</span>
            </div>
            <h4 className="text-base font-bold text-slate-400 mb-3 leading-tight">First Assignment</h4>
            <span className="inline-block px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 text-[10px] font-black uppercase tracking-wider">Locked</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ModuleLibrary;
