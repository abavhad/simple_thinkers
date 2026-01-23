import { getCurrentUser } from '../utils/userUtils';

function TeamResources() {
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      {/* Recommended Webex Spaces */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Recommended Webex Spaces</h3>
            <p className="text-xs text-slate-500 mt-1">Join the conversation with your engineering cohorts.</p>
          </div>
          <button className="text-xs font-bold text-primary hover:underline">View All Spaces</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center font-bold text-lg">#</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">#Cisco-MERN-Eng</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">group</span>
                  <span className="text-[11px] text-slate-500 font-medium">1,240 members</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">Primary technical channel for MERN stack engineering discussions, troubleshooting, and best practices.</p>
            <button
              onClick={() => {
                window.location.href = 'webexteams://im?space=04a13290-f131-11f0-8a93-115d033c514a';
              }}
              className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wide"
            >
              Join Space
            </button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 flex items-center justify-center font-bold text-lg">#</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">#Payments-Team-General</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">group</span>
                  <span className="text-[11px] text-slate-500 font-medium">45 members</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">General coordination for the payments infrastructure team. Private access required.</p>
            <button className="w-full py-2.5 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors uppercase tracking-wide">Request Access</button>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-full hover:border-primary/30 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-10 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-600 flex items-center justify-center font-bold text-lg">#</div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">#Support-Hub</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="material-symbols-outlined text-[14px] text-slate-400">group</span>
                  <span className="text-[11px] text-slate-500 font-medium">890 members</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">Cross-functional space for urgent production support and customer incident reporting.</p>
            <button className="w-full py-2.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors uppercase tracking-wide">Join Space</button>
          </div>
        </div>
      </section>

      {/* Dev Ops & Infrastructure Access */}
      <section>
        <div className="mb-6">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Dev Ops & Infrastructure Access</h3>
          <p className="text-xs text-slate-500 mt-1">Manage your professional tool credentials and environment access.</p>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {/* GitHub Enterprise */}
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-slate-900 flex items-center justify-center text-white shrink-0">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">GitHub Enterprise</h5>
                  <p className="text-xs text-slate-500">Source code management and CI pipelines</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</span>
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold uppercase">Granted</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors min-w-[120px]">Open Tool</button>
              </div>
            </div>

            {/* Jenkins */}
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                  <img alt="Jenkins" className="w-8 h-8" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6iQlMIjwVFdUNsZoMAEQnqgUUxOlklUCxyF1Q7K2W6S2OF3ppaFh9prrH3S3A1odxWlbQNPsiFl00A_1vgfzbfkfrm4DyNGZmH7e39bqBsLyX726IpUGX9kWqliEOdMPaUyZebwXK6e4u1XzjzJJObJkjXNvEVjQF4LXSnUMCo-jhMbxX3j3Ajh8BwhApbiHByP-QTIRIa4qC_NBkmJc8mRAZ_omyVg2a_Ujvcpzu5uSAydSrrdbh0COipGsWksR9-SpwEpBYJjSn" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Jenkins</h5>
                  <p className="text-xs text-slate-500">Build automation and continuous integration</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</span>
                  <div className="flex items-center gap-1.5 text-amber-500">
                    <span className="size-1.5 rounded-full bg-amber-500"></span>
                    <span className="text-xs font-bold uppercase">Request Pending</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-slate-200 dark:bg-slate-800 text-slate-500 text-xs font-bold rounded-lg cursor-not-allowed min-w-[120px]" disabled>Pending</button>
              </div>
            </div>

            {/* Grafana */}
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.7 40.5l-3.2-3.2 4.1-13.4 3.7 3.7-4.6 12.9zm26.6 0l3.2-3.2-4.1-13.4-3.7 3.7 4.6 12.9zM25 45c-1.4 0-2.5-1.1-2.5-2.5S23.6 40 25 40s2.5 1.1 2.5 2.5S26.4 45 25 45zm0-20c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" fill="#F46800" />
                    <path d="M25 35c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10zm0-18c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z" fill="#F46800" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Grafana</h5>
                  <p className="text-xs text-slate-500">Real-time observability and metrics dashboards</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="size-1.5 rounded-full bg-slate-300"></span>
                    <span className="text-xs font-bold uppercase">Not Requested</span>
                  </div>
                </div>
                <button className="px-6 py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors min-w-[120px]">Request Access</button>
              </div>
            </div>

            {/* Kibana */}
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden shrink-0">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 32 32">
                    <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z" fill="#00BFB3" />
                    <path d="M16 26a10 10 0 100-20 10 10 0 000 20z" fill="#fff" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">Kibana</h5>
                  <p className="text-xs text-slate-500">Log exploration and search analysis</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</span>
                  <div className="flex items-center gap-1.5 text-emerald-600">
                    <span className="size-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-xs font-bold uppercase">Granted</span>
                  </div>
                </div>
                <button className="px-6 py-2 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors min-w-[120px]">Open Tool</button>
              </div>
            </div>

            {/* DockerHub */}
            <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded bg-sky-500 flex items-center justify-center text-white shrink-0">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M13.983 11.078h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.118c0-.102.084-.185.186-.185zM11.261 11.078h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.118c0-.102.084-.185.186-.185zm-2.722 0h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.118c0-.102.084-.185.186-.185zm-2.721 0h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.118c0-.102.084-.185.186-.185zm2.721-2.722h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.541c0-.102.084-.185.186-.185zm2.722 0h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.541c0-.102.084-.185.186-.185zm2.722 0h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.541c0-.102.084-.185.186-.185zm-2.722-2.721h2.119c.102 0 .186.083.186.185v2.118c0 .103-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186V5.82c0-.102.084-.185.186-.185zm6.753 7.439c-2.494 0-4.52 2.026-4.52 4.52 0 2.494 2.026 4.52 4.52 4.52s4.52-2.026 4.52-4.52c0-2.494-2.026-4.52-4.52-4.52zm-12.059 4.601c-.102 0-.186.083-.186.185v2.118c0 .103.084.186.186.186h2.119c.102 0 .186-.083.186-.186v-2.118a.186.186 0 0 0-.186-.185h-2.119zM23.977 12.02c-.285-.597-.71-1.162-1.29-1.562-.158-.11-.317-.21-.486-.301v-.002c-.068-.037-.132-.072-.2-.107l-.045-.025-.045-.022-.052-.025-.098-.041-.039-.016-.118-.045c-.046-.016-.088-.032-.137-.045l-.046-.012-.138-.033-.051-.012c-.088-.02-.177-.038-.268-.053l-.053-.007c-.094-.014-.191-.025-.288-.033l-.063-.005c-.13-.008-.261-.012-.394-.012-.132 0-.261.004-.394.012l-.063.005c-.096.008-.193.019-.288.033l-.052.007c-.092.015-.18.033-.268.053l-.051.012-.138.033-.046.012c-.049.013-.091.029-.137.045l-.118.045-.039.016-.098.041-.052.025-.045.022-.045.025c-.068.035-.132.07-.2.107v.002c-.169.091-.328.191-.486.301-.58.4-.1.1 0 0 0 .54-1.005 1.562-1.29 2.162l.013-.005c-1.478 2.373-4.046 3.974-6.992 3.974h-.012c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v-3.327c0-2.209 1.791-4 4-4 2.209 0 4 1.791 4 4v.246c0 .48.389.87.87.87.481 0 .87-.39.87-.87v-.246c0-2.494-2.026-4.52-4.52-4.52z" />
                  </svg>
                </div>
                <div>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white">DockerHub</h5>
                  <p className="text-xs text-slate-500">Container registry and base image management</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-end">
                  <span className="text-[10px] uppercase font-bold text-slate-400 mb-1">Status</span>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <span className="size-1.5 rounded-full bg-slate-300"></span>
                    <span className="text-xs font-bold uppercase">Not Requested</span>
                  </div>
                </div>
                <button className="px-6 py-2 border border-primary text-primary text-xs font-bold rounded-lg hover:bg-primary/5 transition-colors min-w-[120px]">Request Access</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamResources;
