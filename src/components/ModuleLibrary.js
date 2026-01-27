import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function ModuleLibrary() {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [hoveredModule, setHoveredModule] = useState(null);
  const [expandedWeeks, setExpandedWeeks] = useState([1, 2]); // Expand first two weeks by default

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

  // Calculate statistics
  const allModules = weeklySchedule.flatMap(week => week.modules);
  const completedCount = allModules.filter(m => m.status === 'completed').length;
  const inProgressCount = allModules.filter(m => m.status === 'in-progress').length;
  const totalDuration = allModules.reduce((sum, m) => sum + parseInt(m.duration), 0);
  const completedDuration = allModules
    .filter(m => m.status === 'completed')
    .reduce((sum, m) => sum + parseInt(m.duration), 0);
  const overallProgress = Math.round((completedCount / allModules.length) * 100);

  // Filter modules based on search, category, and status
  const filteredSchedule = weeklySchedule.map(week => ({
    ...week,
    modules: week.modules.filter(module => {
      const matchesSearch = !searchQuery || 
        module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        module.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory;
      const matchesStatus = selectedStatus === 'all' || module.status === selectedStatus;
      return matchesSearch && matchesCategory && matchesStatus;
    })
  })).filter(week => week.modules.length > 0);

  const toggleWeek = (weekNumber) => {
    setExpandedWeeks(prev => 
      prev.includes(weekNumber) 
        ? prev.filter(w => w !== weekNumber)
        : [...prev, weekNumber]
    );
  };

  const categories = ['all', ...new Set(allModules.map(m => m.category))];
  const statuses = ['all', 'completed', 'in-progress', 'upcoming'];

  return (
    <div className="p-12 max-w-7xl mx-auto">
      {/* Header with Stats */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-6 mb-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-3">Module Library</h2>
            <p className="text-slate-500 text-base font-medium max-w-2xl">
              Your week-by-week onboarding schedule. Complete modules in order to progress through your onboarding journey.
            </p>
          </div>
          {/* Quick Stats */}
          <div className="flex items-center gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-primary">{overallProgress}%</div>
              <div className="text-xs text-slate-500">Complete</div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">{completedCount}</div>
              <div className="text-xs text-slate-500">Completed</div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 px-4 py-3 shadow-sm">
              <div className="text-2xl font-bold text-primary">{inProgressCount}</div>
              <div className="text-xs text-slate-500">In Progress</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input
                type="text"
                placeholder="Search modules..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">category</span>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">filter_list</span>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full pl-10 pr-4 py-3 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
              >
                {statuses.map(status => (
                  <option key={status} value={status}>
                    {status === 'all' ? 'All Status' : status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all') && (
            <div className="mt-4 flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500">Active filters:</span>
              {searchQuery && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded flex items-center gap-1">
                  Search: "{searchQuery}"
                  <button onClick={() => setSearchQuery('')} className="hover:bg-primary/20 rounded">
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded flex items-center gap-1">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')} className="hover:bg-primary/20 rounded">
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}
              {selectedStatus !== 'all' && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded flex items-center gap-1">
                  {selectedStatus}
                  <button onClick={() => setSelectedStatus('all')} className="hover:bg-primary/20 rounded">
                    <span className="material-symbols-outlined text-xs">close</span>
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                }}
                className="text-xs text-slate-500 hover:text-primary font-medium"
              >
                Clear all
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Week-by-Week Schedule */}
      <div className="space-y-8">
        {filteredSchedule.map((week, weekIndex) => {
          const isExpanded = expandedWeeks.includes(week.week);
          return (
            <section key={week.week} className="mb-12 animate-fadeIn">
              {/* Week Header - Clickable to expand/collapse */}
              <div 
                onClick={() => toggleWeek(week.week)}
                className={`mb-6 p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg ${
                  week.status === 'completed' 
                    ? 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-300' 
                    : week.status === 'in-progress'
                    ? 'bg-primary/5 border-primary/30 shadow-lg shadow-primary/5 hover:border-primary/50'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`size-12 rounded-xl flex items-center justify-center transition-all ${
                      week.status === 'completed' 
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30' 
                        : week.status === 'in-progress'
                        ? 'bg-primary text-white shadow-lg shadow-primary/30 animate-pulse'
                        : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                    }`}>
                      <span className="material-symbols-outlined text-2xl font-bold">
                        {week.status === 'completed' ? 'check_circle' : 'calendar_month'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {week.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${getStatusBadge(week.status)}`}>
                          {getStatusText(week.status)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400 flex-wrap">
                        <span className="font-medium">{week.dateRange}</span>
                        <span>•</span>
                        <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-700 text-xs font-bold uppercase">
                          {week.phase}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        {week.modules.length} Module{week.modules.length !== 1 ? 's' : ''}
                      </p>
                      <p className="text-xs text-slate-500">
                        {week.modules.reduce((total, m) => total + parseInt(m.duration), 0)} min total
                      </p>
                    </div>
                    <span className={`material-symbols-outlined text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                      expand_more
                    </span>
                  </div>
                </div>
              </div>

            {/* Modules Grid - Animated expand/collapse */}
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 overflow-hidden ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
              {week.modules.map((module, moduleIndex) => {
                // Team Overview, Codebase Architecture, and Engineering at Cisco are always clickable
                const isTeamOverview = module.id === 'team-overview';
                const isCodebaseArchitecture = module.id === 'codebase-architecture';
                const isEngineeringAtCisco = module.id === 'engineering-at-cisco';
                const isSpecialModule = isTeamOverview || isCodebaseArchitecture || isEngineeringAtCisco;
                const isClickable = isSpecialModule || module.status !== 'upcoming' || week.status === 'in-progress';
                
                return (
                  <div
                    key={module.id}
                    onClick={() => {
                      if (isClickable && module.id) {
                        if (isTeamOverview) {
                          navigate('/dashboard/teamResources/overview');
                        } else {
                          navigate(`/dashboard/moduleLibrary/view/${module.id}`);
                        }
                      }
                    }}
                    onMouseEnter={() => setHoveredModule(`${week.week}-${module.id}`)}
                    onMouseLeave={() => setHoveredModule(null)}
                    className={`module-card bg-white dark:bg-slate-900 p-6 rounded-xl border-2 transition-all duration-300 ${
                      module.status === 'completed'
                        ? 'border-emerald-200 dark:border-emerald-900/50 shadow-sm hover:shadow-md'
                        : module.status === 'in-progress'
                        ? 'border-primary/30 shadow-lg shadow-primary/5 hover:shadow-xl hover:shadow-primary/10'
                        : isSpecialModule
                        ? 'border-primary/20 shadow-lg shadow-primary/5 hover:border-primary/40 hover:shadow-xl'
                        : 'border-slate-200 dark:border-slate-700 opacity-75'
                    } ${
                      isClickable ? 'cursor-pointer hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1' : 'cursor-not-allowed'
                    } ${isSpecialModule ? 'ring-2 ring-primary/10 hover:ring-primary/30' : ''} ${
                      hoveredModule === `${week.week}-${module.id}` ? 'z-10' : ''
                    }`}
                    style={{
                      animationDelay: `${moduleIndex * 50}ms`
                    }}
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
                        {module.status === 'upcoming' && !isSpecialModule && (
                          <span className="material-symbols-outlined text-slate-300 text-xl">lock</span>
                        )}
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 leading-tight flex items-center gap-2">
                      {module.title}
                      {isSpecialModule && (
                        <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[9px] font-bold uppercase">
                          {isCodebaseArchitecture ? 'Interactive' : isEngineeringAtCisco ? 'Available' : 'Featured'}
                        </span>
                      )}
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
                        {isSpecialModule ? (
                          <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">
                            Available Now
                          </span>
                        ) : (
                          <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${getStatusBadge(module.status)}`}>
                            {getStatusText(module.status)}
                          </span>
                        )}
                      </div>
                      {(module.status === 'in-progress' || isSpecialModule) && (
                        <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                          {isTeamOverview ? 'Explore Team' : isCodebaseArchitecture ? 'View Structure' : isEngineeringAtCisco ? 'Start Learning' : 'Continue'}
                          <span className="material-symbols-outlined text-xs">arrow_forward</span>
                        </button>
                      )}
                    </div>

                    {module.status === 'in-progress' && (
                      <div className="mt-4">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full rounded-full transition-all relative overflow-hidden"
                            style={{ width: `${module.progress}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Hover Preview */}
                    {hoveredModule === `${week.week}-${module.id}` && isClickable && (
                      <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700 animate-fadeIn">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">Click to {isTeamOverview ? 'explore team' : isCodebaseArchitecture ? 'view structure' : isEngineeringAtCisco ? 'start learning' : 'view module'}</span>
                          <span className="material-symbols-outlined text-primary text-sm animate-bounce">arrow_forward</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            </section>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredSchedule.length === 0 && (
        <div className="text-center py-16">
          <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">search_off</span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No modules found</h3>
          <p className="text-slate-500 mb-4">Try adjusting your filters or search query</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedStatus('all');
            }}
            className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default ModuleLibrary;
