import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left: Hero Image */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-screen overflow-hidden">
          <img
            alt="Diverse professionals working together in a modern office environment"
            className="absolute inset-0 w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLdJNdy4DBiiXU7lq2PruqrUPa33UjcQ-As7L7hSU_s6P1ZYSMpdXyV6RmSGTUrECY3Swr1oi3aBVNX7vVEhQjFlh4wXxtjWx2-dbfb_vdMydicmvFPfzttU8ZKZLJJEhQfdXMPfbEeCm9-EmwAvflVO_3mNynhnxd7qJGgs0HPcJoAOMgPhSuDvUzmwi_2cIYKSBtDn4AfDKd7nlQRN_Rhw1KnEpuB3z9dvajZ7pe4HrirncbOFOFWo33RocSP5mcDJHp92eOVOc"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white p-2 rounded">
                <svg fill="none" height="20" viewBox="0 0 40 25" width="32" xmlns="http://www.w3.org/2000/svg">
                  <rect fill="#1460F3" height="5" width="2" x="2" y="10"></rect>
                  <rect fill="#1460F3" height="15" width="2" x="7" y="5"></rect>
                  <rect fill="#1460F3" height="10" width="2" x="12" y="10"></rect>
                  <rect fill="#1460F3" height="25" width="2" x="17" y="0"></rect>
                  <rect fill="#1460F3" height="25" width="2" x="22" y="0"></rect>
                  <rect fill="#1460F3" height="10" width="2" x="27" y="10"></rect>
                  <rect fill="#1460F3" height="15" width="2" x="32" y="5"></rect>
                  <rect fill="#1460F3" height="5" width="2" x="37" y="10"></rect>
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Cisco</span>
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">Welcome To Cisco.</h2>
            <p className="text-white/90 text-sm md:text-base max-w-md">
              Experience a more engaging way to connect and work together seamlessly.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 md:p-12 bg-background-light dark:bg-background-dark">
          <div className="w-full max-w-md">
            <div className="flex items-center gap-2 mb-12">
              <div className="bg-primary p-1.5 rounded-md">
                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22L2 12L12 2L22 12L12 22Z" fill="white" fillOpacity="0.2"></path>
                  <path d="M12 18L6 12L12 6L18 12L12 18Z" fill="white"></path>
                </svg>
              </div>
              <h1 className="text-slate-900 dark:text-slate-100 font-semibold text-lg">Cisco Self Onboarding Hub</h1>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Forgot Password</h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Enter the email address associated with your account and we'll send you a link to reset your password.
                </p>
              </div>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  navigate('/set-password');
                }}
              >
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                    id="email"
                    name="email"
                    placeholder="name@company.com"
                    required
                    type="email"
                  />
                </div>
                <button
                  className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
                  type="submit"
                >
                  Send Reset Link
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </form>

              <div className="pt-4 text-center">
                <Link className="inline-flex items-center text-primary font-semibold hover:underline gap-1" to="/">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                  Back to Sign In
                </Link>
              </div>
            </div>

            <div className="mt-24 border-t border-slate-100 dark:border-slate-800 pt-8 text-center">
              <p className="text-sm text-slate-400 dark:text-slate-500">
                New to Webex Playtime? <Link className="text-primary font-semibold hover:underline" to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Theme toggle */}
      <button
        className="fixed bottom-6 right-6 p-3 bg-white dark:bg-slate-800 shadow-xl rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        <span className="material-symbols-outlined block dark:hidden">dark_mode</span>
        <span className="material-symbols-outlined hidden dark:block">light_mode</span>
      </button>
    </div>
  );
}

export default ForgotPassword;
