import { getCurrentUser } from '../utils/userUtils';

function DashboardOverview() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  // Get user's first name for greeting
  const firstName = user.name ? user.name.split(' ')[0] : 'User';

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <section className="bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-primary/10">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Welcome Back, {firstName}!</h2>
          <p className="text-slate-200 mb-6">You've completed <span className="text-secondary font-bold">68%</span> of your onboarding curriculum. You're ahead of schedule by 2 days.</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-secondary h-full rounded-full" style={{ width: '68%' }}></div>
            </div>
            <span className="text-sm font-bold">68%</span>
          </div>
        </div>
        <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[200px] text-white/5 rotate-12 select-none">analytics</span>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">rocket_launch</span>
              Current Focus
            </h3>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm card-hover flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">corporate_fare</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wide">Module 3 of 8</span>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-slate-500 text-xs">Estimated 45 min left</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">Organization Overview & Strategic Goals</h4>
                  <p className="text-sm text-slate-500 mt-1">Understanding our core architecture and the quarterly product roadmap.</p>
                </div>
              </div>
              <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shrink-0">
                Continue
              </button>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">monitoring</span>
              Weekly Engagement
            </h3>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
              <div className="flex items-end justify-between h-48 gap-2">
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-24 relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 bg-primary/40 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">MON</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-40 relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 bg-primary/60 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">TUE</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-32 relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 bg-primary/50 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">WED</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-44 relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 bg-primary h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-900 dark:text-white font-bold">THU</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-28 relative overflow-hidden">
                    <div className="absolute bottom-0 inset-x-0 bg-primary/40 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">FRI</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-12 relative overflow-hidden opacity-30">
                    <div className="absolute bottom-0 inset-x-0 bg-slate-300 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">SAT</span>
                </div>
                <div className="flex flex-col items-center gap-2 flex-1 group">
                  <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-8 relative overflow-hidden opacity-30">
                    <div className="absolute bottom-0 inset-x-0 bg-slate-300 h-full"></div>
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">SUN</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">12.4 hrs</p>
                  <p className="text-[11px] text-slate-500 font-medium">Focus time this week</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center text-emerald-500 gap-1 font-bold text-sm">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    +18%
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium text-right uppercase tracking-tighter">vs last week</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">link</span>
            Quick Resources
          </h3>
          <div className="grid grid-cols-1 gap-3">
            <a className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all shadow-sm" href="#">
              <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Employee Handbook</p>
                <p className="text-[10px] text-slate-500">Policies & Benefits</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
            </a>
            <a className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all shadow-sm" href="#">
              <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">IT Support Desk</p>
                <p className="text-[10px] text-slate-500">Hardware & Access</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
            </a>
            <a className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all shadow-sm" href="#">
              <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">description</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Brand Guidelines</p>
                <p className="text-[10px] text-slate-500">Design & Assets</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
            </a>
            <a className="group flex items-center gap-4 p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-primary/50 transition-all shadow-sm" href="#">
              <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:text-primary transition-colors">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">Payroll & Taxes</p>
                <p className="text-[10px] text-slate-500">Workday Portal</p>
              </div>
              <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardOverview;
