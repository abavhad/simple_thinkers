import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function ModuleView() {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  // Module data - in a real app, this would come from an API
  const moduleData = {
    'welcome-introduction': {
      title: 'Welcome & Introduction',
      progress: 100,
      videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS',
      currentSession: '01. Welcome to Webex Playtime',
      timeProgress: '18:30 / 18:30',
      resources: [
        { name: 'Welcome_Guide.pdf', size: '1.2 MB', type: 'PDF', icon: 'picture_as_pdf', color: 'red' },
        { name: 'Getting_Started.pdf', size: '0.9 MB', type: 'PDF', icon: 'description', color: 'blue' }
      ],
      transcript: [
        {
          part: '01',
          label: 'Part 01: Getting Started',
          title: 'Welcome to Your Journey',
          content: [
            'Welcome to Webex Playtime! We\'re excited to have you join our engineering team. This introduction module will help you get oriented with our platform, understand our development culture, and set you up for success.',
            '"Every great engineer starts with a single line of code. Your journey begins here."'
          ],
          highlight: true
        },
        {
          part: '02',
          label: 'Part 02: Platform Overview',
          title: 'Understanding the Ecosystem',
          content: [
            'Webex Playtime is our comprehensive learning and development platform designed specifically for engineers. Here, you\'ll find everything you need to grow your skills, connect with your team, and contribute to meaningful projects.',
            'Key features you\'ll discover:',
            'Module Library: Structured learning paths tailored to your role.',
            'Performance Tracking: Monitor your progress and achievements.',
            'Team Resources: Access tools, spaces, and collaboration channels.'
          ],
          highlight: false,
          listItems: [
            'Module Library: Structured learning paths tailored to your role.',
            'Performance Tracking: Monitor your progress and achievements.',
            'Team Resources: Access tools, spaces, and collaboration channels.'
          ]
        },
        {
          part: '03',
          label: 'Part 03: Next Steps',
          title: 'Your Action Items',
          content: [
            'Now that you\'re familiar with the platform, it\'s time to dive deeper. Complete your onboarding profile, explore the module library, and connect with your assigned mentor. Remember, learning is a journey, not a destination.'
          ],
          highlight: false
        }
      ],
      deepDiveNote: 'Download the Welcome Guide for a comprehensive overview of all platform features and best practices.'
    },
    'organization-overview': {
      title: 'Organization Overview',
      progress: 45,
      videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS',
      currentSession: '03. Executive Vision & Strategy 2024',
      timeProgress: '12:45 / 24:00',
      resources: [
        { name: 'Org_Structure_Q3.pdf', size: '2.4 MB', type: 'PDF', icon: 'picture_as_pdf', color: 'red' },
        { name: 'Strategic_Roadmap.pdf', size: '1.8 MB', type: 'PDF', icon: 'description', color: 'blue' }
      ],
      transcript: [
        {
          part: '01',
          label: 'Part 01: Executive Summary',
          title: 'Introduction to the Ecosystem',
          content: [
            'Welcome to the Organization Overview. In this session, our leadership team outlines the core architectural principles that drive our engineering culture. As we scale to support millions of concurrent users, understanding our internal structure is critical.',
            '"Our goal is not just to build features, but to engineer platforms that empower global collaboration without friction."'
          ],
          highlight: true
        },
        {
          part: '02',
          label: 'Part 02: Structural Breakdown',
          title: 'Functional Business Units',
          content: [
            'The organization is divided into three primary functional groups: Core Platform Services, Experience Engineering, and Global Infrastructure. Each unit operates with significant autonomy while adhering to our shared \'Golden Path\' standards.',
            'Platform Services: Focuses on API reliability and data integrity.',
            'Experience Engineering: Delivers the frontend excellence across web and mobile.'
          ],
          highlight: false,
          listItems: [
            'Platform Services: Focuses on API reliability and data integrity.',
            'Experience Engineering: Delivers the frontend excellence across web and mobile.'
          ]
        },
        {
          part: '03',
          label: 'Part 03: Performance Indicators',
          title: 'Measuring Success (KPIs)',
          content: [
            'Our North Star metric remains \'User Satisfaction Score\' (USS), which is a weighted average of platform uptime, latency, and qualitative feedback from our enterprise partners.'
          ],
          highlight: false
        }
      ],
      deepDiveNote: 'Refer to the "Org_Structure_Q3" PDF in the resources section for a visual map of reporting lines and cross-functional task forces.'
    },
    'corporate-culture': {
      title: 'Corporate Culture',
      progress: 100,
      videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS',
      currentSession: '02. Values & Principles in Action',
      timeProgress: '24:00 / 24:00',
      resources: [
        { name: 'Culture_Handbook_2024.pdf', size: '3.2 MB', type: 'PDF', icon: 'picture_as_pdf', color: 'red' },
        { name: 'Team_Values_Guide.pdf', size: '1.5 MB', type: 'PDF', icon: 'description', color: 'blue' },
        { name: 'Diversity_Report.pdf', size: '2.1 MB', type: 'PDF', icon: 'description', color: 'blue' }
      ],
      transcript: [
        {
          part: '01',
          label: 'Part 01: Our Foundation',
          title: 'Core Values & Mission',
          content: [
            'Welcome to Corporate Culture at Cisco. Our culture is built on a foundation of trust, innovation, and inclusion. We believe that great products come from great teams, and great teams are built on shared values.',
            '"We don\'t just write code—we build communities, solve problems, and create experiences that matter."'
          ],
          highlight: true
        },
        {
          part: '02',
          label: 'Part 02: Working Together',
          title: 'Collaboration & Communication',
          content: [
            'Our engineering culture emphasizes open communication, cross-functional collaboration, and continuous learning. We operate with a growth mindset, where every challenge is an opportunity to learn and improve.',
            'Key principles that guide our daily work:',
            'Transparency: We share information openly and honestly.',
            'Empathy: We listen to understand, not just to respond.',
            'Ownership: We take responsibility for our work and its impact.'
          ],
          highlight: false,
          listItems: [
            'Transparency: We share information openly and honestly.',
            'Empathy: We listen to understand, not just to respond.',
            'Ownership: We take responsibility for our work and its impact.'
          ]
        },
        {
          part: '03',
          label: 'Part 03: Growth & Development',
          title: 'Learning Culture',
          content: [
            'We invest heavily in our people\'s growth. From mentorship programs to internal tech talks, we create opportunities for continuous learning. Our culture encourages experimentation, accepts failure as a learning opportunity, and celebrates innovation.'
          ],
          highlight: false
        },
        {
          part: '04',
          label: 'Part 04: Inclusion & Diversity',
          title: 'Building Diverse Teams',
          content: [
            'Diversity isn\'t just a goal—it\'s a strength. We actively work to create an inclusive environment where everyone can bring their authentic selves to work. Our diverse perspectives drive better solutions and more innovative products.'
          ],
          highlight: false
        }
      ],
      deepDiveNote: 'Download the Culture Handbook for detailed information about our values, team norms, and how we work together to achieve our mission.'
    },
    'engineering-at-cisco': {
      title: 'Engineering at Cisco',
      progress: 100,
      videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS',
      currentSession: '04. Engineering Excellence Standards',
      timeProgress: '28:15 / 28:15',
      resources: [
        { name: 'Engineering_Standards.pdf', size: '2.8 MB', type: 'PDF', icon: 'picture_as_pdf', color: 'red' },
        { name: 'Architecture_Guidelines.pdf', size: '3.1 MB', type: 'PDF', icon: 'description', color: 'blue' }
      ],
      transcript: [
        {
          part: '01',
          label: 'Part 01: Engineering Philosophy',
          title: 'Our Approach to Building',
          content: [
            'Engineering at Cisco is about more than writing code—it\'s about building systems that scale, platforms that empower, and solutions that solve real-world problems. We follow industry best practices while innovating on new approaches.',
            '"Great engineering is invisible. When it works perfectly, users don\'t notice it—they just experience the magic."'
          ],
          highlight: true
        },
        {
          part: '02',
          label: 'Part 02: Standards & Practices',
          title: 'Code Quality & Architecture',
          content: [
            'We maintain high standards for code quality, architecture, and system design. Our engineering teams follow established patterns, conduct thorough code reviews, and prioritize maintainability and scalability.',
            'Core principles:',
            'Clean Code: Readable, maintainable, and well-documented.',
            'Scalable Architecture: Design for growth from day one.',
            'Security First: Build security into every layer.',
            'Performance Matters: Optimize for speed and efficiency.'
          ],
          highlight: false,
          listItems: [
            'Clean Code: Readable, maintainable, and well-documented.',
            'Scalable Architecture: Design for growth from day one.',
            'Security First: Build security into every layer.',
            'Performance Matters: Optimize for speed and efficiency.'
          ]
        },
        {
          part: '03',
          label: 'Part 03: Innovation Culture',
          title: 'Continuous Improvement',
          content: [
            'We foster a culture of continuous learning and innovation. Engineers are encouraged to experiment, share knowledge, and contribute to open-source projects. Our innovation labs provide space for creative problem-solving.'
          ],
          highlight: false
        }
      ],
      deepDiveNote: 'Review the Engineering Standards PDF for detailed coding guidelines, architectural patterns, and best practices used across all teams.'
    },
    'mern-foundations': {
      title: 'MERN Foundations',
      progress: 64,
      videoThumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS',
      currentSession: '05. Advanced React Patterns',
      timeProgress: '15:30 / 32:00',
      resources: [
        { name: 'MERN_Stack_Guide.pdf', size: '4.2 MB', type: 'PDF', icon: 'picture_as_pdf', color: 'red' },
        { name: 'React_Best_Practices.pdf', size: '2.5 MB', type: 'PDF', icon: 'description', color: 'blue' },
        { name: 'NodeJS_Patterns.pdf', size: '3.0 MB', type: 'PDF', icon: 'description', color: 'blue' }
      ],
      transcript: [
        {
          part: '01',
          label: 'Part 01: Stack Overview',
          title: 'Understanding MERN',
          content: [
            'The MERN stack—MongoDB, Express, React, and Node.js—is the foundation of our full-stack development. This module provides an in-depth look at how we use each technology and how they work together seamlessly.',
            '"Master the stack, master the craft. Each technology is a tool—together, they\'re a powerhouse."'
          ],
          highlight: true
        },
        {
          part: '02',
          label: 'Part 02: MongoDB & Data Modeling',
          title: 'Database Design',
          content: [
            'MongoDB provides the flexibility and scalability we need for our applications. Learn how we model data, optimize queries, and ensure data integrity across our distributed systems.',
            'Key concepts:',
            'Schema Design: Structure data for performance and scalability.',
            'Indexing: Optimize query performance.',
            'Aggregation: Complex data processing pipelines.',
            'Transactions: Ensure data consistency.'
          ],
          highlight: false,
          listItems: [
            'Schema Design: Structure data for performance and scalability.',
            'Indexing: Optimize query performance.',
            'Aggregation: Complex data processing pipelines.',
            'Transactions: Ensure data consistency.'
          ]
        },
        {
          part: '03',
          label: 'Part 03: Express & API Design',
          title: 'Backend Architecture',
          content: [
            'Express.js powers our RESTful APIs and microservices. We follow RESTful principles, implement proper error handling, and build APIs that are both powerful and easy to consume.'
          ],
          highlight: false
        },
        {
          part: '04',
          label: 'Part 04: React & Frontend',
          title: 'Modern React Patterns',
          content: [
            'React enables us to build dynamic, interactive user interfaces. We use modern patterns like hooks, context, and component composition to create maintainable and performant frontend applications.'
          ],
          highlight: false
        },
        {
          part: '05',
          label: 'Part 05: Node.js & Runtime',
          title: 'Server-Side JavaScript',
          content: [
            'Node.js allows us to use JavaScript on both client and server. Learn about event-driven architecture, async patterns, and how we leverage Node.js for high-performance applications.'
          ],
          highlight: false
        }
      ],
      deepDiveNote: 'Download the MERN Stack Guide for comprehensive documentation, code examples, and architectural patterns used in our codebase.'
    }
  };

  const module = moduleData[moduleId] || moduleData['organization-overview'];

  const handleBack = () => {
    navigate('/dashboard/moduleLibrary');
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#FBFDFF] dark:bg-slate-950">
      <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-10 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <button 
            onClick={handleBack}
            className="size-10 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-500 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div>
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{module.title}</h2>
            <div className="flex items-center gap-3 mt-0.5">
              <div className="w-24 bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-primary h-full transition-all" style={{ width: `${module.progress}%` }}></div>
              </div>
              <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{module.progress}% Complete</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-colors">
            <span className="material-symbols-outlined text-xl">bookmark</span>
            Save
          </button>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-xl text-sm font-black hover:bg-primary-dark shadow-lg shadow-primary/20 transition-all uppercase tracking-wider">
            Mark as Complete
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-10 border-r border-slate-200 dark:border-slate-800">
          <div className="mb-12">
            <div className="aspect-video w-full rounded-2xl bg-slate-900 relative overflow-hidden group shadow-premium ring-1 ring-slate-200/50 dark:ring-slate-800">
              <img 
                alt="Presentation Thumbnail" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                src={module.videoThumbnail}
              />
              <div className="absolute inset-0 video-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="size-20 bg-primary/90 text-white rounded-full flex items-center justify-center hover:scale-110 hover:bg-primary transition-all shadow-2xl">
                  <span className="material-symbols-outlined text-4xl fill-icon">play_arrow</span>
                </button>
              </div>
              <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between text-white">
                <div>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest text-[10px]">Current Session</p>
                  <h3 className="text-xl font-bold">{module.currentSession}</h3>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{module.timeProgress}</span>
                  <span className="material-symbols-outlined cursor-pointer hover:text-secondary">fullscreen</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Supporting Resources</h3>
              <span className="text-[10px] font-bold text-slate-400">{module.resources.length} DOWNLOADS AVAILABLE</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {module.resources.map((resource, idx) => {
                const colorClasses = {
                  red: 'bg-red-50 dark:bg-red-950/30 text-red-500',
                  blue: 'bg-blue-50 dark:bg-blue-950/30 text-blue-500'
                };
                return (
                  <a 
                    key={idx}
                    className="p-4 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl flex items-center gap-4 hover:border-primary/30 hover:shadow-soft transition-all group" 
                    href="#"
                  >
                    <div className={`size-12 rounded-lg ${colorClasses[resource.color] || 'bg-slate-50 dark:bg-slate-800 text-slate-500'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined text-2xl">{resource.icon}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-slate-800 dark:text-slate-200">{resource.name}</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{resource.size} • {resource.type}</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-300 group-hover:text-primary transition-colors">download</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-[450px] bg-white dark:bg-slate-900/50 flex flex-col shrink-0">
          <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="text-base font-black text-slate-900 dark:text-white">Transcript & Deep Dive</h3>
            <div className="flex gap-2">
              <button className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                <span className="material-symbols-outlined text-lg">search</span>
              </button>
            </div>
          </div>
            <div className="flex-1 flex overflow-hidden">
            <div className="w-16 border-r border-slate-100 dark:border-slate-800 flex flex-col items-center py-8 gap-6 shrink-0">
              {module.transcript.map((part, idx) => (
                <button 
                  key={idx}
                  className={`size-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    idx === 0 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-400 hover:bg-slate-200'
                  }`}
                >
                  {part.part}
                </button>
              ))}
              <div className="w-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
            </div>
            <div className="flex-1 overflow-y-auto custom-scrollbar p-8">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {module.transcript.map((part, idx) => (
                  <div key={idx} className="mb-10">
                    <span className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${
                      idx === 0 ? 'text-primary' : 'text-slate-400'
                    }`}>{part.label}</span>
                    <h4 className={`${idx === 0 ? 'text-xl font-extrabold' : 'text-lg font-bold'} text-slate-900 dark:text-white mb-4 ${idx === 0 ? 'leading-tight' : ''}`}>
                      {part.title}
                    </h4>
                    {part.content.map((paragraph, pIdx) => {
                      if (pIdx === 1 && part.highlight) {
                        return (
                          <p key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic border-l-4 border-primary/20 pl-4 py-1 bg-slate-50 dark:bg-slate-800/50 rounded-r-lg mb-4">
                            {paragraph}
                          </p>
                        );
                      }
                      return (
                        <p key={pIdx} className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      );
                    })}
                    {part.listItems && (
                      <ul className="space-y-3 mt-4">
                        {part.listItems.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {module.deepDiveNote && (
                  <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20 mb-10">
                    <div className="flex items-center gap-2 mb-2 text-secondary">
                      <span className="material-symbols-outlined font-bold">lightbulb</span>
                      <span className="text-xs font-black uppercase tracking-wider">Deep Dive Note</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                      {module.deepDiveNote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ModuleView;
