import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/userUtils';
import { useTheme } from '../contexts/ThemeContext';

function MeetingRequestModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const { theme } = useTheme();

  if (!isOpen) return null;

  const handleBackToDashboard = () => {
    onClose();
    navigate('/dashboard/moduleLibrary');
  };

  const handleAddToCalendar = () => {
    // This would typically open calendar app or add event
    // For now, we'll just show an alert or could integrate with calendar APIs
    alert('Calendar integration coming soon!');
  };

  // Get mentor name from user data
  const mentorName = user?.manager || 'Sarah Jenkins';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-[520px] bg-white dark:bg-background-dark rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#e7ebf3] dark:border-white/10 overflow-hidden">
        {/* Success Content */}
        <div className="flex flex-col items-center pt-10 pb-4 px-8 text-center">
          {/* Success Icon */}
          <div className="size-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-4xl font-bold">check_circle</span>
          </div>
          <h1 className="text-[#0d121b] dark:text-white text-[28px] font-bold leading-tight tracking-tight mb-2">Meeting Request Sent!</h1>
          <p className="text-[#4c669a] dark:text-gray-400 text-base font-normal">An invitation has been sent to {mentorName} and added to your calendar.</p>
        </div>

        {/* Details Section */}
        <div className="px-8 py-6">
          <div className="bg-background-light dark:bg-white/5 rounded-xl p-6 space-y-4">
            <div className="grid grid-cols-[80px_1fr] gap-4 items-center">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">With</p>
              <div className="flex items-center gap-3">
                <div 
                  className="size-8 rounded-full bg-cover bg-center" 
                  style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZox3SLHKm77QCOD5tRhUbQc9LcOBFi5LqLGPbQzr77gcVq6kY2i41aCFM6gZMjCKk21BzAYDXXH5e1CF-Uj6S0bh7UQSoHNwfqB7PDcJxfWjSbUo5V-16m-GjeyN_6D1KSRGrnjeMG-E8_Aq1Pa_dyPrf3QoTgUE1lLQLC_GJpFnGG2ULlN8unULhDy2tPcOOBrQnWsKwbxPoXQnbjbgxQmKH-TAmusim2OzaVkJD3ZbLi-I-mqRntPEJUN91WAnow6ZHAQ9l8MPS")` }}
                ></div>
                <p className="text-[#0d121b] dark:text-white text-base font-semibold">{mentorName}</p>
              </div>
            </div>
            <div className="border-t border-[#cfd7e7] dark:border-white/10 pt-4 grid grid-cols-[80px_1fr] gap-4 items-center">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">Date</p>
              <p className="text-[#0d121b] dark:text-white text-base font-medium">Friday, Oct 25, 2024</p>
            </div>
            <div className="border-t border-[#cfd7e7] dark:border-white/10 pt-4 grid grid-cols-[80px_1fr] gap-4 items-center">
              <p className="text-[#4c669a] dark:text-gray-400 text-sm font-medium">Time</p>
              <div>
                <p className="text-[#0d121b] dark:text-white text-base font-medium">2:00 PM - 2:30 PM</p>
                <p className="text-[#4c669a] dark:text-gray-400 text-xs">(PST) Pacific Standard Time</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card Graphic / Placeholder for context */}
        <div className="px-8 pb-4">
          <div className="w-full h-32 bg-primary/5 dark:bg-primary/20 rounded-lg flex items-center justify-center overflow-hidden relative">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#005073 1px, transparent 1px)', backgroundSize: '16px 16px' }}></div>
            <div className="flex items-center gap-4 z-10">
              <span className="material-symbols-outlined text-primary/40 text-4xl">calendar_today</span>
              <div className="h-1 w-24 bg-primary/20 rounded-full"></div>
              <div className="h-1 w-12 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="px-8 pb-10 flex flex-col gap-3 mt-4">
          <button 
            onClick={handleAddToCalendar}
            className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-colors hover:bg-primary/90 w-full"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
            <span className="truncate">Add to Outlook/Google Calendar</span>
          </button>
          <button 
            onClick={handleBackToDashboard}
            className="flex items-center justify-center rounded-lg h-12 px-6 bg-[#e7ebf3] dark:bg-white/10 text-[#0d121b] dark:text-white text-base font-bold transition-colors hover:bg-[#d1d9e7] dark:hover:bg-white/20 w-full"
          >
            <span className="truncate">Back to Dashboard</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetingRequestModal;
