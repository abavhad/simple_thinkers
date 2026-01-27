import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function ModuleLibrary() {
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  // Week-wise schedule data
  const weeklySchedule = [
    {
      week: 1,
      title: 'Foundation Week',
      dateRange: 'Jan 20-24, 2025',
      status: 'completed',
      phase: 'Foundation',
      modules: [
        {
          id: 'welcome-introduction',
          title: 'Welcome & Introduction',
          description: 'Get oriented with the platform and development culture',
          duration: '30 min',
          status: 'completed',
          progress: 100,
          icon: 'verified_user',
          category: 'Core'
        },
        {
          id: 'corporate-culture',
          title: 'Corporate Culture',
          description: 'Understand our values, mission, and work environment',
          duration: '25 min',
          status: 'completed',
          progress: 100,
          icon: 'diversity_3',
          category: 'Core'
        }
      ]
    },
    {
      week: 2,
      title: 'Organization & Policies',
      dateRange: 'Jan 27-31, 2025',
      status: 'in-progress',
      phase: 'Foundation',
      modules: [
        {
          id: 'organization-overview',
          title: 'Organization Overview',
          description: 'Deep dive into structure and strategic goals',
          duration: '45 min',
          status: 'in-progress',
          progress: 45,
          icon: 'corporate_fare',
          category: 'Core'
        },
        {
          id: 'policies-compliance',
          title: 'Policies & Compliance',
          description: 'Essential policies and compliance requirements',
          duration: '35 min',
          status: 'upcoming',
          progress: 0,
          icon: 'policy',
          category: 'Core'
        }
      ]
    },
    {
      week: 3,
      title: 'Engineering Fundamentals',
      dateRange: 'Feb 3-7, 2025',
      status: 'upcoming',
      phase: 'Technical',
      modules: [
        {
          id: 'engineering-at-cisco',
          title: 'Engineering at Cisco',
          description: 'Standard practices and architectural guidelines',
          duration: '50 min',
          status: 'upcoming',
          progress: 0,
          icon: 'terminal',
          category: 'Engineering'
        },
        {
          id: 'mern-foundations',
          title: 'MERN Foundations',
          description: 'MongoDB, Express, React, and Node.js deep dive',
          duration: '60 min',
          status: 'upcoming',
          progress: 0,
          icon: 'layers',
          category: 'Engineering'
        }
      ]
    },
    {
      week: 4,
      title: 'Advanced Development',
      dateRange: 'Feb 10-14, 2025',
      status: 'upcoming',
      phase: 'Technical',
      modules: [
        {
          id: 'codebase-architecture',
          title: 'Codebase Architecture',
          description: 'Repository structure and functional components',
          duration: '55 min',
          status: 'upcoming',
          progress: 0,
          icon: 'schema',
          category: 'Engineering'
        },
        {
          id: 'dev-workflow-cicd',
          title: 'Dev Workflow & CI/CD',
          description: 'PR processes, pipelines, and deployment',
          duration: '50 min',
          status: 'upcoming',
          progress: 0,
          icon: 'settings',
          category: 'Engineering'
        }
      ]
    },
    {
      week: 5,
      title: 'Team Integration',
      dateRange: 'Feb 17-21, 2025',
      status: 'upcoming',
      phase: 'Integration',
      modules: [
        {
          id: 'team-overview',
          title: 'Team Overview',
          description: 'Understand your team structure and responsibilities',
          duration: '30 min',
          status: 'upcoming',
          progress: 0,
          icon: 'group_work',
          category: 'Team'
        },
        {
          id: 'first-assignment',
          title: 'First Assignment',
          description: 'Prepare for your first project assignment',
          duration: '40 min',
          status: 'upcoming',
          progress: 0,
          icon: 'task',
          category: 'Team'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-500 dark:bg-emerald-600';
      case 'in-progress':
        return 'bg-primary';
      case 'upcoming':
        return 'bg-slate-300 dark:bg-slate-700';
      default:
        return 'bg-slate-300 dark:bg-slate-700';
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400';
      case 'in-progress':
        return 'bg-primary/10 text-primary';
      case 'upcoming':
        return 'bg-slate-100 dark:bg-slate-800 text-slate-400';
      default:
        return 'bg-slate-100 dark:bg-slate-800 text-slate-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
      default:
        return 'Upcoming';
    }
  };

  return (
    <div className="p-12 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Module Library</h2>
        <p className="text-slate-500 text-base font-medium max-w-2xl">
          Your week-by-week onboarding schedule. Complete modules in order to progress through your onboarding journey.
        </p>
      </div>

      {/* Week-by-Week Schedule */}
      <div className="space-y-8">
        {weeklySchedule.map((week, weekIndex) => (
          <section key={week.week} className="mb-12">
            {/* Week Header */}
            <div className={`mb-6 p-6 rounded-xl border-2 ${
              week.status === 'completed' 
                ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/50' 
                : week.status === 'in-progress'
                ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/5'
                : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
            }`}>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className={`size-12 rounded-xl flex items-center justify-center ${
                    week.status === 'completed' 
                      ? 'bg-emerald-500 text-white' 
                      : week.status === 'in-progress'
                      ? 'bg-primary text-white'
                      : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                  }`}>
                    <span className="material-symbols-outlined text-2xl font-bold">
                      {week.status === 'completed' ? 'check_circle' : 'calendar_month'}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {week.title}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${getStatusBadge(week.status)}`}>
                        {getStatusText(week.status)}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                      <span className="font-medium">{week.dateRange}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs font-bold uppercase">
                        {week.phase}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    {week.modules.length} Module{week.modules.length !== 1 ? 's' : ''}
                  </p>
                  <p className="text-xs text-slate-500">
                    {week.modules.reduce((total, m) => total + parseInt(m.duration), 0)} min total
                  </p>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {week.modules.map((module, moduleIndex) => {
                const isClickable = module.status !== 'upcoming' || week.status === 'in-progress';
                return (
                  <div
                    key={module.id}
                    onClick={() => {
                      if (isClickable && module.id) {
                        navigate(`/dashboard/moduleLibrary/view/${module.id}`);
                      }
                    }}
                    className={`module-card bg-white dark:bg-slate-900 p-6 rounded-xl border-2 transition-all ${
                      module.status === 'completed'
                        ? 'border-emerald-200 dark:border-emerald-900/50 shadow-sm'
                        : module.status === 'in-progress'
                        ? 'border-primary/30 shadow-lg shadow-primary/5'
                        : 'border-slate-200 dark:border-slate-700 opacity-75'
                    } ${
                      isClickable ? 'cursor-pointer hover:shadow-md' : 'cursor-not-allowed'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`size-12 rounded-xl flex items-center justify-center ${
                        module.status === 'completed'
                          ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                          : module.status === 'in-progress'
                          ? 'bg-primary/10 text-primary'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        <span className="material-symbols-outlined text-2xl font-medium">
                          {module.icon}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        {module.status === 'completed' && (
                          <div className="relative size-10">
                            <svg className="size-full" viewBox="0 0 36 36">
                              <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                              <circle className="stroke-emerald-500" cx="18" cy="18" fill="none" r="16" strokeDasharray="100, 100" strokeLinecap="round" strokeWidth="3" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <span className="material-symbols-outlined text-emerald-500 text-sm font-bold">check</span>
                            </div>
                          </div>
                        )}
                        {module.status === 'in-progress' && (
                          <div className="relative size-10">
                            <svg className="size-full" viewBox="0 0 36 36">
                              <circle className="stroke-slate-100 dark:stroke-slate-800" cx="18" cy="18" fill="none" r="16" strokeWidth="3" />
                              <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray={`${module.progress}, 100`} strokeLinecap="round" strokeWidth="3" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center text-[9px] font-black text-primary">
                              {module.progress}%
                            </div>
                          </div>
                        )}
                        {module.status === 'upcoming' && (
                          <span className="material-symbols-outlined text-slate-300 text-xl">lock</span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                      {module.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                      {module.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-slate-500 flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {module.duration}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getStatusBadge(module.status)}`}>
                          {getStatusText(module.status)}
                        </span>
                      </div>
                      {module.status === 'in-progress' && (
                        <button className="text-xs font-bold text-primary hover:underline">
                          Continue →
                        </button>
                      )}
                    </div>

                    {module.status === 'in-progress' && (
                      <div className="mt-4">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${module.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ModuleLibrary;
