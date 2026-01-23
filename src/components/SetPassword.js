import { useState } from 'react';
import { Link } from 'react-router-dom';

function SetPassword() {
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleNew = () => setShowNew((v) => !v);
  const toggleConfirm = () => setShowConfirm((v) => !v);

  // Live criteria checks
  const hasMinLength = newPassword.length >= 8;
  const hasNumberAndSymbol = /[0-9]/.test(newPassword) && /[^A-Za-z0-9]/.test(newPassword);
  const passwordsMatch = confirmPassword.length > 0 && newPassword === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation: match and length
    if (!hasMinLength) {
      setError('Password must be at least 8 characters long.');
      setSuccess(false);
      return;
    }
    if (!hasNumberAndSymbol) {
      setError('Password must include at least one number and one symbol.');
      setSuccess(false);
      return;
    }
    if (!passwordsMatch) {
      setError('Passwords do not match.');
      setSuccess(false);
      return;
    }
    setError('');
    setSuccess(true);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col">
      {/* Top hero */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          alt="Team working together on laptops"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyim9vKJSdtdqao9FC_GqebJ2l-brwq6rxSAwScxZPZRVxTosuW8gpgJkUHqYrVJ3AJFDDanneLOi7ecaMGj3MBYLRWdwzt-iAbJxKZSOolqn9b1Kzc57hFAuJ0Fwkf3OkLcyvLABQJA3kY4ejJ94HzuvkqgR2Y3F6NTDIGEQZ2OQSs9nHXZk6dy6fDTmrk452-RVislXbAPC6xCvzACwUgF6PC4vewu0JpfA-ALAFBV0BHQAQqmmrJAsfWlIm3rMafCf0lswFRfY"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-light dark:from-background-dark to-transparent"></div>
      </div>

      {/* Main */}
      <main className="flex-grow px-6 -mt-8 relative z-10">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <span className="text-slate-900 dark:text-white font-semibold text-lg tracking-tight">Onboarding Hub</span>
          </div>

          <div className="space-y-2 mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Create New Password</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Your new password must be different from previous passwords and at least 8 characters long.
            </p>
          </div>

          {success && (
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900/40 p-4">
              <span className="material-symbols-outlined text-green-600">check_circle</span>
              <div>
                <p className="text-sm font-semibold text-green-700 dark:text-green-300">Password successfully set</p>
                <p className="text-sm text-green-700/80 dark:text-green-300/80">You can now sign in with your new password.</p>
                <div className="mt-3">
                  <a className="text-sm font-medium text-primary hover:underline" href="/">Back to Sign In</a>
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900/40 p-3 text-sm text-red-700 dark:text-red-300">
              {error}
            </div>
          )}

          {!success && (
            <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="new-password">
                New Password
              </label>
              <div className="relative">
                <input
                  className="ios-input block w-full px-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  id="new-password"
                  name="new-password"
                  placeholder="Enter new password"
                  type={showNew ? 'text' : 'password'}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  type="button"
                  onClick={toggleNew}
                  aria-label="Toggle new password visibility"
                >
                  <span className="material-symbols-outlined text-xl">{showNew ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="confirm-password">
                Confirm New Password
              </label>
              <div className="relative">
                <input
                  className="ios-input block w-full px-4 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="Repeat new password"
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  type="button"
                  onClick={toggleConfirm}
                  aria-label="Toggle confirm password visibility"
                >
                  <span className="material-symbols-outlined text-xl">{showConfirm ? 'visibility_off' : 'visibility'}</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4 space-y-3">
              <div className={`flex items-center gap-2 text-xs font-medium ${hasMinLength ? 'text-green-700 dark:text-green-300' : 'text-slate-600 dark:text-slate-400'}`}>
                <span className={`material-symbols-outlined text-sm ${hasMinLength ? 'text-green-600' : 'text-slate-300 dark:text-slate-600'}`}>{hasMinLength ? 'check_circle' : 'radio_button_unchecked'}</span>
                At least 8 characters long
              </div>
              <div className={`flex items-center gap-2 text-xs font-medium ${hasNumberAndSymbol ? 'text-green-700 dark:text-green-300' : 'text-slate-600 dark:text-slate-400'}`}>
                <span className={`material-symbols-outlined text-sm ${hasNumberAndSymbol ? 'text-green-600' : 'text-slate-300 dark:text-slate-600'}`}>{hasNumberAndSymbol ? 'check_circle' : 'radio_button_unchecked'}</span>
                Includes a number and a symbol
              </div>
              <div className={`flex items-center gap-2 text-xs font-medium ${passwordsMatch ? 'text-green-700 dark:text-green-300' : 'text-slate-600 dark:text-slate-400'}`}>
                <span className={`material-symbols-outlined text-sm ${passwordsMatch ? 'text-green-600' : 'text-slate-300 dark:text-slate-600'}`}>{passwordsMatch ? 'check_circle' : 'radio_button_unchecked'}</span>
                Passwords must match
              </div>
            </div>

            <button
              className="w-full bg-primary hover:bg-blue-700 text-white font-semibold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-[0.98] transition-all duration-200 mt-4"
              type="submit"
            >
              Reset Password
            </button>
          </form>
          )}

          {!success && (
            <div className="mt-8 text-center">
              <Link className="text-sm font-medium text-primary hover:underline" to="/">
                Back to Sign In
              </Link>
            </div>
          )}
        </div>
      </main>

      <div className="h-8" />
    </div>
  );
}

export default SetPassword;
