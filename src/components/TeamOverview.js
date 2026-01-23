import { getCurrentUser } from '../utils/userUtils';

function TeamOverview() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  const teamName = user.team || 'Payments Infrastructure';
  const teamDisplayName = teamName === 'Payments Infrastructure' ? 'Payments Team' : teamName;

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">{teamDisplayName} Overview</h2>
        <p className="text-slate-500 text-base font-medium max-w-2xl">The backbone of financial operations at Webex Playtime, ensuring secure, global-scale transaction processing.</p>
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
          <div className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-64 flex items-center gap-4">
            <div className="size-12 rounded-lg bg-center bg-cover border border-slate-100" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}></div>
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">Marcus Thorne</p>
              <p className="text-[10px] text-primary font-bold uppercase tracking-tight">Senior Manager</p>
            </div>
          </div>
          <div className="connector-v"></div>

          {/* Technical Lead */}
          <div className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-64 flex items-center gap-4">
            <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
              <span className="material-symbols-outlined">person</span>
            </div>
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">{user.manager || 'Sarah Jenkins'}</p>
              <p className="text-[10px] text-secondary font-bold uppercase tracking-tight">Technical Lead</p>
            </div>
          </div>
          <div className="connector-v"></div>

          {/* Engineers */}
          <div className="w-[80%] h-[2px] bg-slate-200 dark:bg-slate-800"></div>
          <div className="flex justify-between w-full mt-0">
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white">Liam Carter</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white">Elena Rodriguez</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <div className="connector-v"></div>
              <div className="org-card bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm w-56 flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-xl">engineering</span>
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 dark:text-white">David Chen</p>
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
