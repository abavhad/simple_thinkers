import { getCurrentUser } from '../utils/userUtils';

function Performance() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Competency Matrix */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Competency Matrix</h3>
              <span className="material-symbols-outlined text-slate-400 text-sm">more_horiz</span>
            </div>
            <div className="relative h-64 flex items-center justify-center spider-chart-bg">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <polygon fill="none" points="50,10 90,50 50,90 10,50" stroke="#e2e8f0" strokeWidth="0.5" />
                  <line stroke="#e2e8f0" strokeWidth="0.5" x1="50" x2="50" y1="10" y2="90" />
                  <line stroke="#e2e8f0" strokeWidth="0.5" x1="10" x2="90" y1="50" y2="50" />
                  <polygon fill="rgba(0, 80, 115, 0.2)" points="50,25 75,50 50,80 30,50" stroke="#005073" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="absolute top-0 text-[10px] font-bold text-slate-500">FRONTEND</span>
              <span className="absolute right-0 text-[10px] font-bold text-slate-500 rotate-90 origin-right translate-x-2">BACKEND</span>
              <span className="absolute bottom-0 text-[10px] font-bold text-slate-500">CULTURE</span>
              <span className="absolute left-0 text-[10px] font-bold text-slate-500 -rotate-90 origin-left -translate-x-2">PROCESS</span>
            </div>
          </div>

          {/* Learning Velocity */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Learning Velocity</h3>
              <span className="text-[11px] text-emerald-600 font-bold">+12% vs last month</span>
            </div>
            <div className="h-64 flex flex-col justify-end gap-2 px-2">
              <div className="flex items-end gap-3 h-40">
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-[40%]"></div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-[55%]"></div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-t h-[35%]"></div>
                <div className="w-full bg-primary/20 rounded-t h-[70%] border-t-2 border-primary"></div>
                <div className="w-full bg-primary rounded-t h-[85%]"></div>
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-medium px-1">
                <span>W1</span><span>W2</span><span>W3</span><span>W4</span><span>W5</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-4 leading-relaxed italic">
                "Pacing ahead of cohort average. Targeted module completion: 3.4 modules/week."
              </p>
            </div>
          </div>
        </div>

        {/* Feedback Loop */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Feedback Loop: Recent Check-ins</h3>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="shrink-0 size-8 rounded bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">comment</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Mentor: Sarah Jenkins</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tight">August 24</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Excellent progress on the MERN module. Alex showed deep understanding of asynchronous patterns during our last review. For the next phase, focus on optimizing DB queries.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
              <div className="shrink-0 size-8 rounded bg-slate-200 dark:bg-slate-700 text-slate-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-lg">fact_check</span>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Peer Review Summary</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-tight">August 18</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">Code documentation is top-notch. Teammates appreciate the clarity of PR descriptions. Continue maintaining this standard.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Goals for Quarter */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Goals for Quarter (Q3)</h3>
            <span className="text-xs font-semibold text-primary">3 of 5 Completed</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="flex items-center gap-3">
                <input checked className="rounded border-slate-300 text-primary focus:ring-primary size-4" disabled type="checkbox" />
                <span className="text-sm font-medium text-slate-500 line-through">Complete Core Onboarding Curriculum</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Aug 15</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="flex items-center gap-3">
                <input checked className="rounded border-slate-300 text-primary focus:ring-primary size-4" disabled type="checkbox" />
                <span className="text-sm font-medium text-slate-500 line-through">Attend Ethics & Compliance Workshop</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Aug 20</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="flex items-center gap-3">
                <input checked className="rounded border-slate-300 text-primary focus:ring-primary size-4" disabled type="checkbox" />
                <span className="text-sm font-medium text-slate-500 line-through">Submit first CI/CD Pipeline PR</span>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">Aug 22</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="flex items-center gap-3">
                <input className="rounded border-slate-300 text-primary focus:ring-primary size-4" type="checkbox" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Earn Security Specialist Certification</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">Sept 15</span>
            </div>
            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
              <div className="flex items-center gap-3">
                <input className="rounded border-slate-300 text-primary focus:ring-primary size-4" type="checkbox" />
                <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Shadow Team Lead in Product Planning</span>
              </div>
              <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded uppercase">Sept 30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <aside className="col-span-12 lg:col-span-4 space-y-8">
        {/* Upcoming 1:1 Reviews */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Upcoming 1:1 Reviews</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-primary/20 bg-primary/[0.02]">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-slate-200 bg-cover" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}></div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Quarterly Sync</p>
                    <p className="text-[11px] text-slate-500">with Sarah Jenkins</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-primary">AUG 30</p>
                  <p className="text-[10px] text-slate-400">14:00 PM</p>
                </div>
              </div>
              <button className="w-full py-2 bg-primary text-white text-[11px] font-bold rounded hover:bg-primary/90 transition-colors uppercase">View Prep Notes</button>
            </div>
            <div className="p-4 rounded-lg border border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                  <span className="material-symbols-outlined text-sm">event_repeat</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-200">Bi-weekly Check-in</p>
                  <p className="text-[10px] text-slate-500">Sept 12, 10:00 AM</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-300 text-sm">chevron_right</span>
            </div>
          </div>
        </div>

        {/* Recommended Skills */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-6">Recommended Skills</h3>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">Based on your career goal of <span className="font-bold text-slate-700 dark:text-slate-200">Senior Architect</span>, we recommend focusing on:</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group cursor-pointer">
              <div className="size-8 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg">schema</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Distributed Systems</p>
                <p className="text-[10px] text-slate-500 mt-1">Foundational course for architects</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group cursor-pointer">
              <div className="size-8 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg">security</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Cloud Infrastructure Sec</p>
                <p className="text-[10px] text-slate-500 mt-1">High demand in your current org</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-3 rounded-lg border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-colors group cursor-pointer">
              <div className="size-8 rounded bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg">psychology</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">Leadership Fundamentals</p>
                <p className="text-[10px] text-slate-500 mt-1">Required for L6 promotions</p>
              </div>
            </div>
          </div>
        </div>

        {/* Current Pathway */}
        <div className="p-6 rounded-xl bg-slate-900 text-white">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Current Pathway</h3>
          <p className="text-sm font-semibold mb-2">Technical Lead Transition</p>
          <div className="w-full bg-slate-800 h-1.5 rounded-full mb-4">
            <div className="bg-secondary h-full rounded-full" style={{ width: '42%' }}></div>
          </div>
          <div className="flex items-center justify-between text-[10px] font-bold text-slate-400">
            <span>L4 DEVELOPER</span>
            <span className="text-secondary">42% PROGRESS</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Performance;
