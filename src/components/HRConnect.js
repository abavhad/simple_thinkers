import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function HRConnect() {
  const [showHrModal, setShowHrModal] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredPolicy, setHoveredPolicy] = useState(null);
  const [uploadingDoc, setUploadingDoc] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState(0);
  const [hoveredDownloadDoc, setHoveredDownloadDoc] = useState(null);
  const [draggedOverDoc, setDraggedOverDoc] = useState(null);
  const user = getCurrentUser();

  const handleFileUpload = (docName, file) => {
    if (file) {
      setUploadingDoc(docName);
      // Simulate upload progress
      setTimeout(() => {
        setUploadedDocs(prev => ({
          ...prev,
          [docName]: {
            fileName: file.name,
            status: 'uploaded',
            uploadedAt: new Date().toLocaleDateString()
          }
        }));
        setUploadingDoc(null);
      }, 1500);
    }
  };

  const handleRemoveFile = (docName) => {
    setUploadedDocs(prev => {
      const newDocs = { ...prev };
      delete newDocs[docName];
      return newDocs;
    });
  };

  const getDocStatus = (docName) => {
    return uploadedDocs[docName]?.status || 'pending';
  };

  const getUploadedFileName = (docName) => {
    return uploadedDocs[docName]?.fileName;
  };

  const requiredDocs = [
    'Signed Employment Agreement',
    'Completed Tax Declaration (W-4)',
    'Direct Deposit Authorization',
    'Emergency Contact Form',
    'Signed NDA & Confidentiality',
    'Government ID (Passport/Driver License)',
    'Work Authorization Document'
  ];

  const uploadedCount = requiredDocs.filter(doc => getDocStatus(doc) === 'uploaded').length;
  const progressPercentage = Math.round((uploadedCount / requiredDocs.length) * 100);

  // Animate progress bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progressPercentage);
    }, 300);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  // Policy categories
  const policyCategories = [
    { id: 'all', name: 'All Policies', icon: 'policy' },
    { id: 'attendance', name: 'Attendance', icon: 'schedule' },
    { id: 'leave', name: 'Leave', icon: 'event_available' },
    { id: 'benefits', name: 'Benefits', icon: 'health_and_safety' },
    { id: 'expense', name: 'Expense', icon: 'receipt_long' },
    { id: 'training', name: 'Training', icon: 'school' }
  ];

  const policies = [
    {
      id: 'attendance',
      icon: 'schedule',
      title: 'Attendance & Time Tracking',
      desc: 'Guidelines on shifts and logging hours for your region.',
      category: 'attendance'
    },
    {
      id: 'leave',
      icon: 'event_available',
      title: 'Leave Management',
      desc: 'Sick leave, vacation, and sabbatical policies overview.',
      category: 'leave'
    },
    {
      id: 'expense',
      icon: 'receipt_long',
      title: 'Expense Reimbursement',
      desc: 'Business travel and miscellaneous expense claims guidelines.',
      category: 'expense'
    },
    {
      id: 'benefits',
      icon: 'health_and_safety',
      title: 'Insurance & Benefits',
      desc: 'Health, dental, and life insurance enrollment details.',
      category: 'benefits'
    },
    {
      id: 'training',
      icon: 'school',
      title: 'Professional Training',
      desc: 'Certifications and skill development reimbursement programs.',
      category: 'training'
    },
    {
      id: 'supplies',
      icon: 'print',
      title: 'Supplies & Stationery',
      desc: 'Ordering equipment and office essentials for home or site.',
      category: 'supplies'
    }
  ];

  const filteredPolicies = policies.filter(policy => {
    const matchesSearch = !searchQuery || 
      policy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      policy.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || policy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const faqs = [
    {
      question: 'When is the next payroll cycle?',
      answer: 'Payroll cycles run bi-weekly on Fridays. The next cycle is scheduled for February 7, 2025. Direct deposits are typically processed within 2-3 business days.'
    },
    {
      question: 'How do I accrue PTO?',
      answer: 'PTO accrues at a rate of 1.25 days per month for employees with less than 5 years of service, and 1.67 days per month for those with 5+ years. Unused PTO can be carried over up to a maximum of 10 days.'
    },
    {
      question: 'Hardware refresh eligibility?',
      answer: 'Employees are eligible for hardware refresh every 3 years. This includes laptops, monitors, and peripherals. Submit a request through the IT Equipment Request Form in the Supplies & Stationery policy section.'
    }
  ];

  if (!user) {
    return null;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* Page Header with Stats */}
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">HR Connect</h1>
          <p className="text-slate-500 text-sm">Centralized resource hub for policies, support, and onboarding formalities.</p>
        </div>
            
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-4 border border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 mb-1">Document Progress</p>
                <p className="text-2xl font-bold text-primary">{uploadedCount} / {requiredDocs.length}</p>
              </div>
              <div className="size-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">description</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-xl p-4 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 mb-1">Completion Rate</p>
                <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{progressPercentage}%</p>
              </div>
              <div className="size-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400 text-xl">check_circle</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl p-4 border border-blue-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500 mb-1">Available Policies</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{policies.length}</p>
              </div>
              <div className="size-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600 dark:text-blue-400 text-xl">policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Onboarding Formalities Section */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">assignment</span>
              Onboarding Formalities
            </h2>
            <p className="text-slate-500 text-sm">Complete your onboarding by downloading required forms and uploading signed documents.</p>
          </div>
          {progressPercentage === 100 && (
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 rounded-lg">
              <span className="material-symbols-outlined text-emerald-600 dark:text-emerald-400">celebration</span>
              <span className="text-sm font-bold text-emerald-700 dark:text-emerald-400">All Required Documents Complete!</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Documents to Download */}
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="size-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-2xl">download</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Documents to Download</h3>
                <p className="text-xs text-slate-500">Download, fill, and sign these forms</p>
              </div>
              <div className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span className="text-xs font-bold text-slate-600 dark:text-slate-400">7 Files</span>
              </div>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                  {[
                    { name: 'Employment Agreement Template', size: '245 KB', type: 'PDF', required: true, icon: 'description' },
                    { name: 'Tax Declaration Form (W-4)', size: '180 KB', type: 'PDF', required: true, icon: 'receipt' },
                    { name: 'Direct Deposit Authorization', size: '156 KB', type: 'PDF', required: true, icon: 'account_balance' },
                    { name: 'Emergency Contact Form', size: '98 KB', type: 'PDF', required: true, icon: 'contact_emergency' },
                    { name: 'NDA & Confidentiality Agreement', size: '312 KB', type: 'PDF', required: true, icon: 'security' },
                    { name: 'Benefits Enrollment Guide', size: '1.2 MB', type: 'PDF', required: false, icon: 'health_and_safety' },
                    { name: 'IT Equipment Request Form', size: '89 KB', type: 'PDF', required: false, icon: 'computer' }
                  ].map((doc, idx) => (
                    <div 
                      key={idx} 
                      onMouseEnter={() => setHoveredDownloadDoc(idx)}
                      onMouseLeave={() => setHoveredDownloadDoc(null)}
                      className={`group flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 ${
                        hoveredDownloadDoc === idx
                          ? 'border-primary/50 bg-primary/5 shadow-lg shadow-primary/5 scale-[1.02]'
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                          doc.type === 'PDF' 
                            ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' 
                            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        } ${hoveredDownloadDoc === idx ? 'scale-110 rotate-3' : ''}`}>
                          <span className="material-symbols-outlined text-xl">{doc.icon}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-bold text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{doc.name}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[10px] text-slate-500 flex items-center gap-1">
                              <span className="material-symbols-outlined text-xs">description</span>
                              {doc.size}
                            </span>
                            {doc.required && (
                              <span className="px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-[10px] font-bold uppercase">Required</span>
                            )}
                            {!doc.required && (
                              <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase">Optional</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          const link = document.createElement('a');
                          link.href = '#';
                          link.download = doc.name.replace(/\s+/g, '_') + '.pdf';
                          link.click();
                        }}
                        className={`ml-3 px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg transition-all flex items-center gap-2 shrink-0 ${
                          hoveredDownloadDoc === idx
                            ? 'shadow-lg shadow-primary/30 scale-110'
                            : 'hover:bg-primary/90 hover:scale-105'
                        } active:scale-95`}
                      >
                        <span className="material-symbols-outlined text-sm">download</span>
                        <span>Download</span>
                      </button>
                    </div>
                  ))}
                </div>
          </div>

          {/* Documents to Upload */}
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-sm">
                <span className="material-symbols-outlined text-2xl">upload</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Documents to Upload</h3>
                <p className="text-xs text-slate-500">Upload signed forms and required documents</p>
              </div>
              <div className="px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{uploadedCount}/{requiredDocs.length}</span>
              </div>
            </div>
            <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar pr-2">
                  {[
                    { name: 'Signed Employment Agreement', required: true, icon: 'description' },
                    { name: 'Completed Tax Declaration (W-4)', required: true, icon: 'receipt' },
                    { name: 'Direct Deposit Authorization', required: true, icon: 'account_balance' },
                    { name: 'Emergency Contact Form', required: true, icon: 'contact_emergency' },
                    { name: 'Signed NDA & Confidentiality', required: true, icon: 'security' },
                    { name: 'Government ID (Passport/Driver License)', required: true, icon: 'badge' },
                    { name: 'Work Authorization Document', required: true, icon: 'work' },
                    { name: 'Benefits Enrollment Form', required: false, icon: 'health_and_safety' }
                  ].map((doc, idx) => {
                    const status = doc.required ? getDocStatus(doc.name) : 'optional';
                    const fileName = getUploadedFileName(doc.name);
                    const isHovered = hoveredDownloadDoc === `upload-${idx}`;
                    const isDraggedOver = draggedOverDoc === idx;
                    
                    return (
                      <div 
                        key={idx} 
                        onMouseEnter={() => setHoveredDownloadDoc(`upload-${idx}`)}
                        onMouseLeave={() => {
                          setHoveredDownloadDoc(null);
                          setDraggedOverDoc(null);
                        }}
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDraggedOverDoc(idx);
                        }}
                        onDragLeave={() => setDraggedOverDoc(null)}
                        onDrop={(e) => {
                          e.preventDefault();
                          setDraggedOverDoc(null);
                          const file = e.dataTransfer.files[0];
                          if (file && (status === 'pending' || status === 'optional')) {
                            handleFileUpload(doc.name, file);
                          }
                        }}
                        className={`p-3.5 rounded-xl border transition-all duration-200 ${
                          status === 'uploaded'
                            ? 'border-emerald-200/50 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-900/5'
                            : status === 'pending'
                            ? isDraggedOver
                              ? 'border-primary/40 bg-primary/5'
                              : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20'
                            : 'border-transparent hover:border-slate-200 dark:hover:border-slate-800 bg-slate-50/30 dark:bg-slate-800/20'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                              status === 'uploaded' 
                                ? 'bg-emerald-100/50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' 
                                : status === 'pending' 
                                ? 'bg-amber-100/50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400'
                                : 'bg-slate-100/50 dark:bg-slate-800/50 text-slate-400'
                            }`}>
                              <span className="material-symbols-outlined text-lg">
                                {status === 'uploaded' ? 'check_circle' : status === 'pending' ? 'pending' : doc.icon}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-semibold truncate ${
                                status === 'uploaded' 
                                  ? 'text-emerald-900 dark:text-emerald-100' 
                                  : 'text-slate-900 dark:text-white'
                              }`}>
                                {doc.name}
                              </p>
                              <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                                {status === 'uploaded' && (
                                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Uploaded</span>
                                )}
                                {status === 'pending' && (
                                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Pending</span>
                                )}
                                {status === 'optional' && (
                                  <span className="text-[10px] text-slate-400 font-medium">Optional</span>
                                )}
                                {doc.required && (
                                  <span className="px-1.5 py-0.5 rounded bg-red-50/50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[9px] font-bold uppercase">Required</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {status === 'pending' && (
                          <label className="block">
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  handleFileUpload(doc.name, e.target.files[0]);
                                }
                              }}
                              disabled={uploadingDoc === doc.name}
                            />
                            {uploadingDoc === doc.name ? (
                              <div className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-primary/10 text-primary text-xs font-semibold rounded-lg border border-primary/20">
                                <span className="material-symbols-outlined text-sm animate-spin">sync</span>
                                <span>Uploading...</span>
                              </div>
                            ) : (
                              <div className="relative">
                                <span className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg border border-dashed transition-all cursor-pointer ${
                                  isDraggedOver
                                    ? 'border-primary/40 bg-primary/5'
                                    : 'border-slate-300 dark:border-slate-700 hover:border-primary/30 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                                }`}>
                                  <span className="material-symbols-outlined text-sm">upload_file</span>
                                  <span>Choose File</span>
                                </span>
                                {isDraggedOver && (
                                  <div className="absolute inset-0 flex items-center justify-center bg-primary/10 rounded-lg">
                                    <span className="text-primary text-xs font-semibold flex items-center gap-1.5">
                                      <span className="material-symbols-outlined text-sm">cloud_upload</span>
                                      Drop here
                                    </span>
                                  </div>
                                )}
                              </div>
                            )}
                          </label>
                        )}
                        {status === 'uploaded' && (
                          <div className="p-2.5 bg-emerald-50/50 dark:bg-emerald-900/10 border border-emerald-200/50 dark:border-emerald-900/30 rounded-lg animate-fadeIn">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 flex-1 min-w-0">
                                <div className="size-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-white text-[10px]">check</span>
                                </div>
                                <span className="text-xs text-emerald-900 dark:text-emerald-100 truncate font-semibold">{fileName}</span>
                              </div>
                              <div className="flex items-center gap-2 shrink-0">
                                <button className="text-[10px] text-slate-600 dark:text-slate-400 hover:text-primary font-medium transition-colors">View</button>
                                <span className="text-slate-300">·</span>
                                <button 
                                  onClick={() => handleRemoveFile(doc.name)}
                                  className="text-[10px] text-slate-600 dark:text-slate-400 hover:text-red-500 font-medium transition-colors"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                            {uploadedDocs[doc.name]?.uploadedAt && (
                              <p className="text-[9px] text-slate-400 dark:text-slate-500 ml-7 mt-1">{uploadedDocs[doc.name].uploadedAt}</p>
                            )}
                          </div>
                        )}
                        {status === 'optional' && (
                          <label className="block">
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  handleFileUpload(doc.name, e.target.files[0]);
                                }
                              }}
                            />
                            <span className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-xs font-semibold rounded-lg border border-dashed transition-all cursor-pointer ${
                              isDraggedOver
                                ? 'border-primary/40 bg-primary/5'
                                : 'border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                            }`}>
                              <span className="material-symbols-outlined text-sm">upload_file</span>
                              <span>Choose File (Optional)</span>
                            </span>
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-emerald-500/5 border border-primary/20 dark:border-primary/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">trending_up</span>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">Upload Progress</p>
                    </div>
                    <span className="text-xs font-bold text-primary">{progressPercentage}%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="bg-gradient-to-r from-primary to-emerald-400 h-full rounded-full transition-all duration-500 relative overflow-hidden"
                        style={{ width: `${animatedProgress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400 whitespace-nowrap">{uploadedCount} / {requiredDocs.length}</span>
                  </div>
                  {progressPercentage < 100 && (
                    <p className="text-[10px] text-slate-500 mt-2">
                      {requiredDocs.length - uploadedCount} document{requiredDocs.length - uploadedCount !== 1 ? 's' : ''} remaining
                    </p>
                  )}
                </div>
              </div>
            </div>
      </section>

      {/* Search and Filter Section */}
      <section className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">policy</span>
            HR Policies & Resources
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input
              type="text"
              placeholder="Search policies..."
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
              {policyCategories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Active Filters */}
        {(searchQuery || selectedCategory !== 'all') && (
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
                {policyCategories.find(c => c.id === selectedCategory)?.name}
                <button onClick={() => setSelectedCategory('all')} className="hover:bg-primary/20 rounded">
                  <span className="material-symbols-outlined text-xs">close</span>
                </button>
              </span>
            )}
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-xs text-slate-500 hover:text-primary font-medium"
            >
              Clear all
            </button>
          </div>
        )}
      </section>

      {/* Two Column Layout: Main and Sidebar */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Content Grid */}
        <div className="flex-1">
          {filteredPolicies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPolicies.map((card) => (
                <div 
                  key={card.id} 
                  onMouseEnter={() => setHoveredPolicy(card.id)}
                  onMouseLeave={() => setHoveredPolicy(null)}
                  className={`group flex flex-col bg-white dark:bg-slate-900 border-2 rounded-xl p-6 transition-all duration-300 ${
                    hoveredPolicy === card.id
                      ? 'border-primary/50 shadow-xl shadow-primary/5 scale-[1.02]'
                      : 'border-slate-200 dark:border-slate-800 hover:shadow-lg'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all ${
                    hoveredPolicy === card.id
                      ? 'bg-primary text-white scale-110 rotate-3'
                      : 'bg-primary/10 text-primary'
                  }`}>
                    <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                  </div>
                  <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2 group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-6">{card.desc}</p>
                  <Link
                    to={`/dashboard/hr-connect/policy/${card.id}`}
                    className="w-full py-2.5 px-4 bg-primary text-white rounded-lg text-sm font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                  >
                    <span>View Policy</span>
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-700 mb-4">search_off</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No policies found</h3>
              <p className="text-slate-500 mb-4">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-80 flex flex-col gap-6">
          {/* Connect with HR Section */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-xs">support_agent</span>
              Connect with HR
            </h3>
            <div className="p-5 rounded-xl border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-slate-50 dark:from-slate-800/50 dark:to-slate-800/30 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="size-12 rounded-lg bg-center bg-cover bg-slate-200 border-2 border-primary/30 shadow-sm"
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}
                ></div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">HR Partner</p>
                  <p className="text-[11px] text-slate-500">Employee Support</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span className="size-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Available now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowHrModal(true)}
                className="w-full py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-95"
              >
                <span className="material-symbols-outlined text-sm">event</span>
                Book 1:1 with HR
              </button>
              <p className="text-[10px] text-center text-slate-500 mt-3 flex items-center justify-center gap-1">
                <span className="material-symbols-outlined text-xs">schedule</span>
                Next available: Today, 4:00 PM
              </p>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-900 dark:text-white text-base font-bold px-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">help</span>
              Common FAQs
            </h2>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
                  {faqs.map((faq, idx) => {
                    const isExpanded = expandedFaq === idx;
                    return (
                      <div key={idx} className={`${idx < faqs.length - 1 ? 'border-b border-slate-100/50 dark:border-slate-800/50' : ''}`}>
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                          className="w-full p-4 flex justify-between items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                        >
                          <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors text-left pr-4">{faq.question}</span>
                          <span className={`material-symbols-outlined text-slate-400 transition-transform shrink-0 ${isExpanded ? 'rotate-180' : ''}`}>
                            expand_more
                          </span>
                        </button>
                        {isExpanded && (
                          <div className="px-4 pb-4 animate-fadeIn">
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

          {/* Quick Links Sidebar Nav Style */}
          <div className="flex flex-col gap-4">
            <h2 className="text-slate-900 dark:text-white text-base font-bold px-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-lg">navigation</span>
              Quick Links
            </h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary border border-primary/20 cursor-pointer hover:bg-primary/20 transition-all group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">policy</span>
                <p className="text-sm font-semibold">All Policies</p>
                <span className="ml-auto material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">assignment_ind</span>
                <p className="text-sm font-medium">My HR Requests</p>
                <span className="ml-auto material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all cursor-pointer group">
                <span className="material-symbols-outlined group-hover:scale-110 transition-transform">description</span>
                <p className="text-sm font-medium">Internal Handbook</p>
                <span className="ml-auto material-symbols-outlined text-xs opacity-0 group-hover:opacity-100 transition-opacity">arrow_forward</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* HR Calendar Booking Modal */}
      {showHrModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowHrModal(false);
            }
          }}
        >
          <div className="w-full max-w-[520px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden animate-fadeIn">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-primary/5 to-slate-50 dark:bg-slate-800/50">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">event</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white">Book HR Calendar</h2>
                  <p className="text-xs text-slate-500">Choose a slot to meet HR</p>
                </div>
              </div>
              <button
                onClick={() => setShowHrModal(false)}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="px-6 py-6 space-y-5">
              <div className="bg-gradient-to-br from-primary/5 to-slate-50 dark:from-slate-800/50 dark:to-slate-800/30 rounded-xl p-5 border border-primary/20 dark:border-slate-700 space-y-4">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3">
                    <div
                      className="size-10 rounded-lg bg-center bg-cover bg-slate-200 border-2 border-primary/20"
                      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}
                    ></div>
                    <div>
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">With</span>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">HR Partner</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-primary">verified</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">calendar_today</span>
                      Date
                    </span>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      Time
                    </span>
                    <input
                      type="time"
                      className="h-11 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-xs">notes</span>
                    Notes (Optional)
                  </span>
                  <textarea
                    className="min-h-[80px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                    placeholder="Anything you want HR to know ahead of the session..."
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="py-3 rounded-lg bg-gradient-to-r from-primary to-primary/90 text-white text-sm font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-sm">event_available</span>
                  <span>Confirm Booking</span>
                </button>
                <button
                  onClick={() => setShowHrModal(false)}
                  className="py-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-white text-sm font-bold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HRConnect;

