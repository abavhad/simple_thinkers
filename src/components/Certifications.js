import { getCurrentUser } from '../utils/userUtils';

function Certifications() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="p-10 max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Webex Playtime Certifications</h2>
        <p className="text-slate-500 text-sm">Manage your professional credentials and discover new specialized learning paths.</p>
      </div>

      <section className="mb-14">
        <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Earned Certifications</h3>
          <span className="text-[11px] font-bold text-slate-400">3 TOTAL</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="certification-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="size-8 certificate-seal rounded-full flex items-center justify-center text-white opacity-20">
                <span className="material-symbols-outlined text-lg">workspace_premium</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2">Cisco Systems</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">Full Stack Specialist</h4>
              <p className="text-xs text-slate-500">Issued: Aug 12, 2024</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] text-slate-400 font-mono">ID: CX-2024-890</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-[16px]">download</span>
                Download PDF
              </button>
            </div>
          </div>

          <div className="certification-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="size-8 certificate-seal rounded-full flex items-center justify-center text-white opacity-20">
                <span className="material-symbols-outlined text-lg">workspace_premium</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2">Cisco Systems</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">Agile Methodology Proficient</h4>
              <p className="text-xs text-slate-500">Issued: June 05, 2024</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] text-slate-400 font-mono">ID: CX-2024-412</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-[16px]">download</span>
                Download PDF
              </button>
            </div>
          </div>

          <div className="certification-card bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <div className="size-8 certificate-seal rounded-full flex items-center justify-center text-white opacity-20">
                <span className="material-symbols-outlined text-lg">workspace_premium</span>
              </div>
            </div>
            <div className="mb-6">
              <div className="text-primary font-bold text-[10px] tracking-widest uppercase mb-2">Cisco Systems</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-tight mb-1">Corporate Compliance</h4>
              <p className="text-xs text-slate-500">Issued: Jan 15, 2024</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-[10px] text-slate-400 font-mono">ID: CX-2024-102</span>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-bold hover:bg-slate-100 transition-colors border border-slate-200 dark:border-slate-700">
                <span className="material-symbols-outlined text-[16px]">download</span>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14 pb-14">
        <div className="flex items-center justify-between mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Available Paths</h3>
          <span className="text-[11px] font-bold text-slate-400">ENROLLED IN 4</span>
        </div>
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
            <div className="size-12 rounded bg-primary/5 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">terminal</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">MERN Specialist</h4>
              <p className="text-[11px] text-slate-500">Core architecture, MongoDB optimization, and React performance.</p>
            </div>
            <div className="w-full md:w-64">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-primary">65% Progress</span>
                <span className="text-[10px] text-slate-400">8/12 Modules</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full" style={{ width: '65%' }}></div>
              </div>
            </div>
            <button className="text-xs font-bold text-primary hover:underline whitespace-nowrap px-4">Continue Path</button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
            <div className="size-12 rounded bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-slate-400">shield</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Security Compliant Engineer</h4>
              <p className="text-[11px] text-slate-500">Data protection, threat modeling, and secure coding standards.</p>
            </div>
            <div className="w-full md:w-64">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400">20% Progress</span>
                <span className="text-[10px] text-slate-400">2/10 Modules</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-slate-300 dark:bg-slate-700 h-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            <button className="text-xs font-bold text-primary hover:underline whitespace-nowrap px-4">Resume</button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
            <div className="size-12 rounded bg-slate-50 dark:bg-slate-800 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-slate-400">hub</span>
            </div>
            <div className="flex-grow">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Cloud Infrastructure Architect</h4>
              <p className="text-[11px] text-slate-500">AWS/Azure migration, serverless design, and kubernetes at scale.</p>
            </div>
            <div className="w-full md:w-64">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-400">0% Progress</span>
                <span className="text-[10px] text-slate-400">0/15 Modules</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-slate-300 dark:bg-slate-700 h-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <button className="text-xs font-bold text-primary hover:underline whitespace-nowrap px-4">Start Path</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Certifications;
