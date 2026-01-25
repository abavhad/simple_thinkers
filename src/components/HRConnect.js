import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

function HRConnect() {
  const [showHrModal, setShowHrModal] = useState(false);
  const [uploadedDocs, setUploadedDocs] = useState({});
  const user = getCurrentUser();

  const handleFileUpload = (docName, file) => {
    if (file) {
      setUploadedDocs(prev => ({
        ...prev,
        [docName]: {
          fileName: file.name,
          status: 'uploaded'
        }
      }));
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

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Main Content Area */}
      <main className="flex-1 flex justify-center py-8">
        <div className="max-w-[1200px] w-full flex flex-col gap-6 px-10">
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="text-slate-500">Webex Playtime</span>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 dark:text-slate-100 font-medium">HR Connect</span>
          </div>

          {/* Page Header */}
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">HR Connect - Policies & Support</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Centralized resource hub for Cisco employees.</p>
          </div>

          {/* Onboarding Formalities Section */}
          <section className="mt-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Onboarding Formalities</h2>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Complete your onboarding by downloading required forms and uploading signed documents.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Documents to Download */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-xl">download</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Documents to Download</h3>
                    <p className="text-xs text-slate-500">Download, fill, and sign these forms</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Employment Agreement Template', size: '245 KB', type: 'PDF', required: true },
                    { name: 'Tax Declaration Form (W-4)', size: '180 KB', type: 'PDF', required: true },
                    { name: 'Direct Deposit Authorization', size: '156 KB', type: 'PDF', required: true },
                    { name: 'Emergency Contact Form', size: '98 KB', type: 'PDF', required: true },
                    { name: 'NDA & Confidentiality Agreement', size: '312 KB', type: 'PDF', required: true },
                    { name: 'Benefits Enrollment Guide', size: '1.2 MB', type: 'PDF', required: false },
                    { name: 'IT Equipment Request Form', size: '89 KB', type: 'PDF', required: false }
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <div className={`size-8 rounded flex items-center justify-center shrink-0 ${doc.type === 'PDF' ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'}`}>
                          <span className="material-symbols-outlined text-lg">description</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-900 dark:text-white truncate">{doc.name}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-slate-500">{doc.size}</span>
                            {doc.required && (
                              <span className="px-1.5 py-0.5 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase">Required</span>
                            )}
                          </div>
                        </div>
                      </div>
                      <button className="ml-3 px-3 py-1.5 bg-primary text-white text-xs font-bold rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-1.5 shrink-0">
                        <span className="material-symbols-outlined text-sm">download</span>
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents to Upload */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <span className="material-symbols-outlined text-xl">upload</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Documents to Upload</h3>
                    <p className="text-xs text-slate-500">Upload signed forms and required documents</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {[
                    { name: 'Signed Employment Agreement', required: true },
                    { name: 'Completed Tax Declaration (W-4)', required: true },
                    { name: 'Direct Deposit Authorization', required: true },
                    { name: 'Emergency Contact Form', required: true },
                    { name: 'Signed NDA & Confidentiality', required: true },
                    { name: 'Government ID (Passport/Driver License)', required: true },
                    { name: 'Work Authorization Document', required: true },
                    { name: 'Benefits Enrollment Form', required: false }
                  ].map((doc, idx) => {
                    const status = doc.required ? getDocStatus(doc.name) : 'optional';
                    const fileName = getUploadedFileName(doc.name);
                    return (
                      <div key={idx} className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3 flex-1">
                            <div className={`size-8 rounded flex items-center justify-center shrink-0 ${
                              status === 'uploaded' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400' :
                              status === 'pending' ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400' :
                              'bg-slate-50 dark:bg-slate-800 text-slate-400'
                            }`}>
                              <span className="material-symbols-outlined text-lg">
                                {status === 'uploaded' ? 'check_circle' : status === 'pending' ? 'pending' : 'description'}
                              </span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-slate-900 dark:text-white">{doc.name}</p>
                              <div className="flex items-center gap-2 mt-0.5">
                                {status === 'uploaded' && (
                                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">✓ Uploaded</span>
                                )}
                                {status === 'pending' && (
                                  <span className="text-[10px] text-amber-600 dark:text-amber-400 font-bold">Pending</span>
                                )}
                                {status === 'optional' && (
                                  <span className="text-[10px] text-slate-500 font-bold">Optional</span>
                                )}
                                {doc.required && (
                                  <span className="px-1.5 py-0.5 rounded bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-[10px] font-bold uppercase">Required</span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {status === 'pending' && (
                          <label className="block mt-2">
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
                            <span className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-primary/10 text-primary text-xs font-bold rounded-lg hover:bg-primary/20 transition-colors cursor-pointer">
                              <span className="material-symbols-outlined text-sm">upload_file</span>
                              Choose File
                            </span>
                          </label>
                        )}
                        {status === 'uploaded' && (
                          <div className="flex items-center gap-2 mt-2">
                            <span className="text-xs text-slate-500 truncate">{fileName}</span>
                            <button className="text-xs text-primary hover:underline font-medium">View</button>
                            <button 
                              onClick={() => handleRemoveFile(doc.name)}
                              className="text-xs text-red-500 hover:underline font-medium"
                            >
                              Remove
                            </button>
                          </div>
                        )}
                        {status === 'optional' && (
                          <label className="block mt-2">
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
                            <span className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer">
                              <span className="material-symbols-outlined text-sm">upload_file</span>
                              Choose File (Optional)
                            </span>
                          </label>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-amber-500 text-sm">info</span>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">Upload Progress</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${(uploadedCount / requiredDocs.length) * 100}%` }}></div>
                    </div>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-400">{uploadedCount} / {requiredDocs.length} Required</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Two Column Layout: Main and Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 mt-4">
            {/* Content Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    id: 'attendance',
                    icon: 'schedule',
                    title: 'Attendance & Time Tracking',
                    desc: 'Guidelines on shifts and logging hours for your region.'
                  },
                  {
                    id: 'leave',
                    icon: 'event_available',
                    title: 'Leave Management',
                    desc: 'Sick leave, vacation, and sabbatical policies overview.'
                  },
                  {
                    id: 'expense',
                    icon: 'receipt_long',
                    title: 'Expense Reimbursement',
                    desc: 'Business travel and miscellaneous expense claims guidelines.'
                  },
                  {
                    id: 'benefits',
                    icon: 'health_and_safety',
                    title: 'Insurance & Benefits',
                    desc: 'Health, dental, and life insurance enrollment details.'
                  },
                  {
                    id: 'training',
                    icon: 'school',
                    title: 'Professional Training',
                    desc: 'Certifications and skill development reimbursement programs.'
                  },
                  {
                    id: 'supplies',
                    icon: 'print',
                    title: 'Supplies & Stationery',
                    desc: 'Ordering equipment and office essentials for home or site.'
                  }
                ].map((card) => (
                  <div key={card.id} className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-5 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                    </div>
                    <h3 className="text-slate-900 dark:text-white text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex-grow mb-6">{card.desc}</p>
                    <Link
                      to={`/dashboard/hr-connect/policy/${card.id}`}
                      className="w-full py-2 px-4 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors text-center"
                    >
                      View Policy
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="w-full lg:w-80 flex flex-col gap-6">
              {/* Connect with HR Section */}
              <div>
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Connect with HR</h3>
                <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="size-12 rounded-lg bg-center bg-cover bg-slate-200"
                      style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}
                    ></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">HR Partner</p>
                      <p className="text-[11px] text-slate-500">Employee Support</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowHrModal(true)}
                    className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary/90 transition-colors"
                  >
                    Book 1:1 with HR
                  </button>
                  <p className="text-[10px] text-center text-slate-400 mt-3 italic">Next available: Today, 4:00 PM</p>
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="flex flex-col gap-4">
                <h2 className="text-slate-900 dark:text-white text-base font-bold px-1">Common FAQs</h2>
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                  {[
                    'When is the next payroll cycle?',
                    'How do I accrue PTO?',
                    'Hardware refresh eligibility?'
                  ].map((item, idx) => (
                    <div key={item} className={`p-4 flex justify-between items-center cursor-pointer ${idx < 2 ? 'border-b border-slate-100 dark:border-slate-800' : ''}`}>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{item}</span>
                      <span className="material-symbols-outlined text-slate-400">expand_more</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Links Sidebar Nav Style */}
              <div className="flex flex-col gap-4">
                <h2 className="text-slate-900 dark:text-white text-base font-bold px-1">Navigation</h2>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">policy</span>
                    <p className="text-sm font-semibold">All Policies</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
                    <span className="material-symbols-outlined">assignment_ind</span>
                    <p className="text-sm font-medium">My HR Requests</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors">
                    <span className="material-symbols-outlined">description</span>
                    <p className="text-sm font-medium">Internal Handbook</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="mt-auto border-t border-slate-200 dark:border-slate-800 py-6 px-10 text-center text-slate-400 text-xs">
        <p>© 2024 Cisco Systems, Inc. HR Connect Portal. Variant 1 of 2.</p>
      </footer>

      {/* HR Calendar Booking Modal */}
      {showHrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-[520px] bg-white dark:bg-background-dark rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-200 dark:border-white/10 overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900">
              <div>
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Book HR Calendar</h2>
                <p className="text-xs text-slate-500">Choose a slot to meet HR</p>
              </div>
              <button
                onClick={() => setShowHrModal(false)}
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="bg-background-light dark:bg-white/5 rounded-xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-bold">With</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">HR Partner</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="flex flex-col gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Date
                    <input
                      type="date"
                      className="h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Time
                    <input
                      type="time"
                      className="h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Notes
                  <textarea
                    className="min-h-[72px] rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Anything you want HR to know ahead of the session..."
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button className="py-2.5 rounded-lg bg-primary text-white text-xs font-bold hover:bg-primary/90 transition-colors">
                  Save & Add to Calendar
                </button>
                <button
                  onClick={() => setShowHrModal(false)}
                  className="py-2.5 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-white text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                >
                  Close
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

