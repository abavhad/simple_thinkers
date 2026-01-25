import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';

const policyData = {
  attendance: {
    title: 'Attendance & Time Tracking',
    summary: 'Guidelines on shifts, time logging, and overtime approval.',
    sections: [
      {
        heading: 'Core Policy',
        body:
          'All employees must log time daily in the approved system. Shifts are defined by your team lead, and any variance requires prior approval.',
      },
      {
        heading: 'Overtime & Exceptions',
        body:
          'Overtime is permitted only with manager approval. Exceptions for global time zones must be documented in your weekly report.',
      },
      {
        heading: 'Best Practices',
        body:
          'Log time before end of day, include brief context for deviations, and sync with your team lead weekly.',
      },
    ],
  },
  leave: {
    title: 'Leave Management',
    summary: 'Sick leave, vacation, and sabbatical policies overview.',
    sections: [
      {
        heading: 'Leave Types',
        body:
          'Employees may request sick leave, vacation leave, or unpaid leave. Eligibility is based on region and tenure.',
      },
      {
        heading: 'Request Process',
        body:
          'Submit requests via HR Connect at least 7 days in advance for planned leave. Emergency leave should be logged within 24 hours.',
      },
      {
        heading: 'Approvals',
        body:
          'Managers approve requests within 2 business days. Escalations go to HR Partner if no response.',
      },
    ],
  },
  expense: {
    title: 'Expense Reimbursement',
    summary: 'Business travel and miscellaneous expense claims guidelines.',
    sections: [
      {
        heading: 'Eligible Expenses',
        body:
          'Travel, meals during business trips, and approved tools are reimbursable with receipts.',
      },
      {
        heading: 'Submission Window',
        body:
          'Submit expenses within 30 days. Late submissions require justification.',
      },
      {
        heading: 'Processing Time',
        body:
          'Claims are reviewed within 5 business days and reimbursed in the next payroll cycle.',
      },
    ],
  },
  benefits: {
    title: 'Insurance & Benefits',
    summary: 'Health, dental, and life insurance enrollment details.',
    sections: [
      {
        heading: 'Enrollment',
        body:
          'Open enrollment occurs twice annually. New hires must enroll within 30 days of start.',
      },
      {
        heading: 'Coverage',
        body:
          'Plans vary by region. Review the benefit summary before selecting coverage.',
      },
      {
        heading: 'Changes',
        body:
          'Life events (marriage, relocation) qualify for mid‑cycle changes with documentation.',
      },
    ],
  },
  training: {
    title: 'Professional Training',
    summary: 'Certifications and skill development reimbursement programs.',
    sections: [
      {
        heading: 'Eligibility',
        body:
          'Full-time employees are eligible for approved training reimbursement.',
      },
      {
        heading: 'Approval Flow',
        body:
          'Submit training requests to your manager and HR Partner for approval.',
      },
      {
        heading: 'Reimbursement',
        body:
          'Reimbursement is processed after proof of completion is submitted.',
      },
    ],
  },
  supplies: {
    title: 'Supplies & Stationery',
    summary: 'Ordering equipment and office essentials for home or site.',
    sections: [
      {
        heading: 'Ordering',
        body:
          'Use the approved procurement portal for office supplies and peripherals.',
      },
      {
        heading: 'Hardware',
        body:
          'Standard equipment bundles are available for home office setup.',
      },
      {
        heading: 'Delivery',
        body:
          'Delivery timelines depend on location and stock availability.',
      },
    ],
  },
};

function PolicyDocs() {
  const { policyId } = useParams();
  const navigate = useNavigate();
  const user = getCurrentUser();

  if (!user) {
    return null;
  }

  const policy = policyData[policyId];

  if (!policy) {
    return (
      <div className="p-10 text-center text-slate-500">
        Policy not found.
      </div>
    );
  }

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate('/dashboard/hr-connect')}
          className="text-xs font-bold text-primary hover:underline"
        >
          ← Back to HR Connect
        </button>
        <span className="text-[11px] text-slate-400 uppercase tracking-widest">Policy Docs</span>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm">
        <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2">{policy.title}</h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">{policy.summary}</p>

        <div className="space-y-6">
          {policy.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">{section.heading}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PolicyDocs;

