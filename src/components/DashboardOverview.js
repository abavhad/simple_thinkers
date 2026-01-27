import { useState, useEffect, useRef } from 'react';
import { getCurrentUser } from '../utils/userUtils';
import { useNavigate } from 'react-router-dom';

function DashboardOverview() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [isHoveringProgress, setIsHoveringProgress] = useState(false);
  const [hoveredMilestone, setHoveredMilestone] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const progressBarRef = useRef(null);
  const hasAnimated = useRef(false);

  // Roadmap milestones data
  const milestones = [
    {
      id: 1,
      phase: 'Foundation',
      week: 'Week 1',
      status: 'completed',
      title: 'Welcome & Orientation',
      description: 'Complete welcome modules and corporate culture introduction',
      modules: ['Welcome & Introduction', 'Corporate Culture'],
      date: 'Jan 20-24',
      progress: 100
    },
    {
      id: 2,
      phase: 'Foundation',
      week: 'Week 2',
      status: 'in-progress',
      title: 'Organization Overview',
      description: 'Deep dive into company structure, strategic goals, and policies',
      modules: ['Organization Overview', 'Policies & Compliance'],
      date: 'Jan 27-31',
      progress: 45
    },
    {
      id: 3,
      phase: 'Technical',
      week: 'Week 3',
      status: 'upcoming',
      title: 'Engineering Fundamentals',
      description: 'Learn engineering practices and MERN stack foundations',
      modules: ['Engineering at Cisco', 'MERN Foundations'],
      date: 'Feb 3-7',
      progress: 0
    },
    {
      id: 4,
      phase: 'Technical',
      week: 'Week 4',
      status: 'upcoming',
      title: 'Advanced Development',
      description: 'Master codebase architecture and CI/CD workflows',
      modules: ['Codebase Architecture', 'Dev Workflow & CI/CD'],
      date: 'Feb 10-14',
      progress: 0
    },
    {
      id: 5,
      phase: 'Integration',
      week: 'Week 5',
      status: 'upcoming',
      title: 'Team Integration',
      description: 'Understand team structure and prepare for first assignment',
      modules: ['Team Overview', 'First Assignment'],
      date: 'Feb 17-21',
      progress: 0
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return 'check_circle';
      case 'in-progress':
        return 'radio_button_checked';
      case 'upcoming':
        return 'circle';
      default:
        return 'circle';
    }
  };

  // Calculate overall progress from milestones
  const calculateOverallProgress = () => {
    const totalMilestones = milestones.length;
    const completedMilestones = milestones.filter(m => m.status === 'completed').length;
    const inProgressMilestone = milestones.find(m => m.status === 'in-progress');
    
    let progress = (completedMilestones / totalMilestones) * 100;
    if (inProgressMilestone) {
      progress += (inProgressMilestone.progress / totalMilestones);
    }
    return Math.round(progress);
  };

  const overallProgress = calculateOverallProgress();
  
  // Calculate breakdown for tooltip
  const completedCount = milestones.filter(m => m.status === 'completed').length;
  const inProgressCount = milestones.filter(m => m.status === 'in-progress').length;
  const upcomingCount = milestones.filter(m => m.status === 'upcoming').length;

  // Animate progress on mount - must be called before early return
  useEffect(() => {
    if (!user) return;
    
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = overallProgress / steps;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const newProgress = Math.min(increment * currentStep, overallProgress);
        setAnimatedProgress(newProgress);
        setDisplayProgress(Math.round(newProgress));
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setDisplayProgress(overallProgress);
        }
      }, stepDuration);
      
      return () => clearInterval(interval);
    } else {
      setAnimatedProgress(overallProgress);
      setDisplayProgress(overallProgress);
    }
  }, [overallProgress, user]);

  // Early return after all hooks
  if (!user) {
    return null;
  }

  // Get user's first name for greeting
  const firstName = user.name ? user.name.split(' ')[0] : 'User';

  // Handle milestone marker click
  const handleMilestoneClick = (milestone, e) => {
    e.stopPropagation();
    if (milestone.status === 'completed' || milestone.status === 'in-progress') {
      navigate('/dashboard/moduleLibrary');
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary to-slate-800 rounded-2xl p-8 text-white relative overflow-hidden shadow-lg shadow-primary/10">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl font-bold mb-2">Welcome Back, {firstName}!</h2>
          <p className="text-slate-200 mb-6">
            You've completed <span className="text-secondary font-bold transition-all duration-300">{displayProgress}%</span> of your onboarding roadmap. 
            <span className="inline-flex items-center gap-1 ml-2 text-emerald-300">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              You're ahead of schedule by 2 days.
            </span>
          </p>
          <div className="relative">
            <div 
              ref={progressBarRef}
              className="flex items-center gap-4 cursor-pointer group"
              onMouseEnter={() => setIsHoveringProgress(true)}
              onMouseLeave={() => {
                setIsHoveringProgress(false);
                setHoveredMilestone(null);
              }}
              onClick={() => navigate('/dashboard/moduleLibrary')}
            >
              <div className="flex-1 bg-white/10 h-4 rounded-full overflow-visible relative group-hover:h-5 transition-all duration-300 shadow-inner">
                {/* Animated progress fill */}
                <div 
                  className="bg-gradient-to-r from-secondary via-secondary to-emerald-400 h-full rounded-full transition-all duration-500 relative overflow-hidden group-hover:shadow-lg group-hover:shadow-secondary/50"
                  style={{ width: `${animatedProgress}%` }}
                >
                  {/* Shimmer effect */}
                  {isHoveringProgress && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  )}
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/50 to-transparent blur-sm opacity-50"></div>
                </div>
                
                {/* Milestone markers - clickable and interactive */}
                {milestones.map((milestone, index) => {
                  const position = ((index + 1) / milestones.length) * 100;
                  const isCompleted = milestone.status === 'completed';
                  const isInProgress = milestone.status === 'in-progress';
                  const isHovered = hoveredMilestone === milestone.id;
                  const isPast = isCompleted || (isInProgress && index < milestones.findIndex(m => m.status === 'in-progress'));
                  
                  return (
                    <div
                      key={milestone.id}
                      className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full transition-all duration-300 cursor-pointer z-10 ${
                        isCompleted 
                          ? 'bg-emerald-400 shadow-emerald-400/50' 
                          : isInProgress 
                          ? 'bg-primary shadow-primary/50 animate-pulse' 
                          : 'bg-white/30'
                      } ${
                        isHovered 
                          ? 'size-5 shadow-2xl scale-125' 
                          : isHoveringProgress 
                          ? 'size-3 shadow-lg' 
                          : 'size-2'
                      } ${isPast ? 'ring-2 ring-white/50' : ''}`}
                      style={{ left: `${position}%` }}
                      onMouseEnter={(e) => {
                        e.stopPropagation();
                        setHoveredMilestone(milestone.id);
                      }}
                      onMouseLeave={() => setHoveredMilestone(null)}
                      onClick={(e) => handleMilestoneClick(milestone, e)}
                    >
                      {/* Inner glow for completed/in-progress */}
                      {(isCompleted || isInProgress) && (
                        <div className={`absolute inset-0 rounded-full ${
                          isCompleted ? 'bg-emerald-300 animate-ping opacity-75' : 'bg-primary/50'
                        }`}></div>
                      )}
                      {/* Checkmark for completed */}
                      {isCompleted && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-[10px] font-bold">check</span>
                        </div>
                      )}
                      {/* Pulse ring for in-progress */}
                      {isInProgress && (
                        <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping"></div>
                      )}
                    </div>
                  );
                })}
                
                {/* Hovered milestone tooltip */}
                {hoveredMilestone && (() => {
                  const milestone = milestones.find(m => m.id === hoveredMilestone);
                  if (!milestone) return null;
                  const position = ((milestones.indexOf(milestone) + 1) / milestones.length) * 100;
                  
                  return (
                    <div 
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-3 min-w-[200px] z-50 animate-fadeIn pointer-events-none"
                      style={{ left: `${position}%` }}
                    >
                      <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">{milestone.title}</div>
                      <div className="text-[10px] text-slate-500 mb-2">{milestone.week}</div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                          milestone.status === 'completed' 
                            ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                            : milestone.status === 'in-progress'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                        }`}>
                          {milestone.status === 'completed' ? '✓ Complete' : milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                        {milestone.status !== 'upcoming' && (
                          <span className="text-[10px] text-slate-500">{milestone.progress}%</span>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </div>
              
              {/* Progress percentage with animation */}
              <div className="flex items-center gap-2 min-w-[60px]">
                <div className="relative">
                  <span className="text-lg font-bold transition-all duration-300 group-hover:text-secondary group-hover:scale-110 inline-block">
                    {displayProgress}%
                  </span>
                  {isHoveringProgress && (
                    <span className="absolute -top-1 -right-1 material-symbols-outlined text-xs text-emerald-300 animate-bounce">arrow_upward</span>
                  )}
                </div>
                {isHoveringProgress && (
                  <span className="material-symbols-outlined text-sm animate-bounce group-hover:translate-x-1 transition-transform">arrow_forward</span>
                )}
              </div>
            </div>
            
            {/* Enhanced Interactive Tooltip */}
            {isHoveringProgress && (
              <div 
                className="absolute top-full left-0 mt-4 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 p-6 min-w-[360px] z-50 animate-fadeIn"
                onMouseEnter={() => setIsHoveringProgress(true)}
                onMouseLeave={() => setIsHoveringProgress(false)}
              >
                <div className="absolute -top-2 left-8 w-4 h-4 bg-white dark:bg-slate-900 border-l border-t border-slate-200 dark:border-slate-700 rotate-45"></div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary animate-spin-slow">insights</span>
                    Progress Breakdown
                  </h4>
                  <span className="text-xs text-slate-500 flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">schedule</span>
                    Click to explore
                  </span>
                </div>
                
                {/* Animated milestone cards */}
                <div className="space-y-2 mb-4 max-h-[200px] overflow-y-auto custom-scrollbar">
                  {milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className={`p-3 rounded-lg border transition-all cursor-pointer hover:scale-[1.02] ${
                        milestone.status === 'completed'
                          ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-900/50'
                          : milestone.status === 'in-progress'
                          ? 'bg-primary/5 border-primary/30 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 opacity-60'
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (milestone.status !== 'upcoming') {
                          navigate('/dashboard/moduleLibrary');
                        }
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 flex-1">
                          <div className={`size-2 rounded-full ${
                            milestone.status === 'completed' ? 'bg-emerald-500' : 
                            milestone.status === 'in-progress' ? 'bg-primary animate-pulse' : 
                            'bg-slate-300 dark:bg-slate-700'
                          }`}></div>
                          <span className="text-xs font-bold text-slate-900 dark:text-white">{milestone.title}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          {milestone.status === 'completed' && (
                            <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                          )}
                          {milestone.status === 'in-progress' && (
                            <span className="text-[10px] font-bold text-primary">{milestone.progress}%</span>
                          )}
                          {milestone.status === 'upcoming' && (
                            <span className="material-symbols-outlined text-slate-400 text-sm">lock</span>
                          )}
                        </div>
                      </div>
                      {milestone.status === 'in-progress' && (
                        <div className="mt-2 w-full bg-slate-200 dark:bg-slate-700 h-1 rounded-full overflow-hidden">
                          <div 
                            className="bg-primary h-full rounded-full transition-all"
                            style={{ width: `${milestone.progress}%` }}
                          ></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Summary stats */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                  <div className="text-center p-2 rounded-lg bg-emerald-50 dark:bg-emerald-900/20">
                    <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{completedCount}</div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-400">Completed</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-primary/10">
                    <div className="text-lg font-bold text-primary">{inProgressCount}</div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-400">In Progress</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <div className="text-lg font-bold text-slate-600 dark:text-slate-400">{upcomingCount}</div>
                    <div className="text-[10px] text-slate-600 dark:text-slate-400">Upcoming</div>
                  </div>
                </div>
                
                {/* Overall progress */}
                <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Overall Progress</span>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {displayProgress}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-primary via-secondary to-emerald-400 h-full rounded-full transition-all duration-500 relative"
                      style={{ width: `${animatedProgress}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </div>
                
                {/* Action button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/dashboard/moduleLibrary');
                  }}
                  className="mt-4 w-full bg-gradient-to-r from-primary to-secondary text-white px-4 py-3 rounded-lg font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group"
                >
                  <span>View Full Roadmap</span>
                  <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
              </div>
            )}
          </div>
        </div>
        <span className="material-symbols-outlined absolute -right-8 -bottom-8 text-[200px] text-white/5 rotate-12 select-none">route</span>
      </section>

      {/* Roadmap Timeline */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">route</span>
              Onboarding Roadmap
            </h3>
            <p className="text-slate-500 text-sm">Your journey through the onboarding milestones</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-emerald-500"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-primary"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400">In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-slate-300 dark:bg-slate-700"></div>
              <span className="text-xs text-slate-600 dark:text-slate-400">Upcoming</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800"></div>

          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.id} className="relative flex gap-6">
                {/* Milestone Marker */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`size-16 rounded-full ${getStatusColor(milestone.status)} flex items-center justify-center shadow-lg`}>
                    <span className="material-symbols-outlined text-white text-2xl">
                      {getStatusIcon(milestone.status)}
                    </span>
                  </div>
                  {milestone.status === 'in-progress' && (
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Milestone Content */}
                <div className="flex-1 pb-8">
                  <div className={`bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border-2 ${
                    milestone.status === 'completed' ? 'border-emerald-200 dark:border-emerald-900/50' :
                    milestone.status === 'in-progress' ? 'border-primary/30 shadow-lg shadow-primary/5' :
                    'border-slate-200 dark:border-slate-700'
                  } transition-all hover:shadow-md`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                            {milestone.phase}
                          </span>
                          <span className="text-xs font-bold text-slate-500">{milestone.week}</span>
                          <span className="text-xs text-slate-400">•</span>
                          <span className="text-xs text-slate-500">{milestone.date}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                          {milestone.title}
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                          {milestone.description}
                        </p>
                      </div>
                      {milestone.status === 'completed' && (
                        <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase">
                          ✓ Complete
                        </span>
                      )}
                      {milestone.status === 'in-progress' && (
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase">
                          In Progress
                        </span>
                      )}
                    </div>

                    {/* Modules List */}
                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Modules:</p>
                      <div className="flex flex-wrap gap-2">
                        {milestone.modules.map((module, idx) => (
                          <span
                            key={idx}
                            className={`px-2.5 py-1 rounded-lg text-xs font-medium ${
                              milestone.status === 'completed' 
                                ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                : milestone.status === 'in-progress'
                                ? 'bg-primary/10 text-primary'
                                : 'bg-slate-200 dark:bg-slate-700 text-slate-500'
                            }`}
                          >
                            {module}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar */}
                    {milestone.status !== 'upcoming' && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-slate-600 dark:text-slate-400">Progress</span>
                          <span className="text-xs font-bold text-slate-900 dark:text-white">{milestone.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all ${
                              milestone.status === 'completed' ? 'bg-emerald-500' : 'bg-primary'
                            }`}
                            style={{ width: `${milestone.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    {milestone.status === 'in-progress' && (
                      <button
                        onClick={() => navigate('/dashboard/moduleLibrary')}
                        className="mt-4 w-full bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors"
                      >
                        Continue Learning
                      </button>
                    )}
                    {milestone.status === 'upcoming' && (
                      <div className="mt-4 text-xs text-slate-500 italic">
                        Available starting {milestone.date}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section>
        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-sm">link</span>
          Quick Resources
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>
    </div>
  );
}

export default DashboardOverview;
