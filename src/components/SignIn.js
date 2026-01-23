import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { authenticateUser } from '../data/dummyUsers';

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    // Authenticate user
    const user = authenticateUser(email, password);
    
    if (!user) {
      setError('Invalid email or password. Please try again.');
      return;
    }
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', 'true');
    
    console.log('User signed in:', user);
    
    // Check if onboarding is completed
    const onboardingCompleted = localStorage.getItem('onboardingCompleted');
    if (!onboardingCompleted) {
      // First login - redirect to onboarding
      navigate('/onboarding');
    } else {
      // Already onboarded - redirect to module library
      navigate('/dashboard/moduleLibrary');
    }
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    const passwordInput = e.target.closest('div').querySelector('input[type="password"], input[type="text"]');
    if (passwordInput) {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="flex min-h-screen w-full flex-col lg:flex-row overflow-hidden">
        {/* Left Side: Hero Image / Visual Panel */}
        <div className="hidden lg:flex lg:w-1/2 relative">
          <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10"></div>
          <div 
            className="w-full h-full bg-center bg-cover" 
            alt="diverse team members laughing and collaborating together" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjvmKHY9Yc5MAnUAeQhcBGZEcz63kDIZvh_dQIiFWHLd7OCPcc8-WWtCa3n4bx5t9E7YMzcH9VrTjdUYoYgWdyB6knXUKB2S6V1CVu7OQ0by5lfCwfYE5N-ZzOD-hcnq8crJiuN366nehAhQ36VtMdj-STa8_2GvgSmv3U4G5QWdi4Lv2v4hjUUHZy0StLoupOGwVrxQaKjlfv8PjjrMKfw6IDH8MIL_YXYmwLrRTZZvjsQnBUfESDTwlXQVF-3c09cOGnoEBVyws9")'
            }}
          ></div>
          <div className="absolute bottom-6 right-12 z-20 max-w-lg text-[#111318] p-8">
            <div className="flex items-start gap-5">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Cisco_logo.svg"
                alt="Cisco logo"
                className="h-24 w-24 lg:h-24 lg:w-24 object-contain flex-shrink-0"
              />
              <div>
                <h1 className="text-3xl font-serif font-semibold leading-snug mb-3 text-[#0f172a]">
                  Welcome To Cisco.
                </h1>
                <p className="text-base text-[#475569]">
                  Experience a more engaging way to connect and work together seamlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Auth Panel */}
        <div className="flex flex-1 flex-col justify-center items-center px-6 py-12 lg:px-20 bg-white dark:bg-background-dark">
          <div className="w-full max-w-[440px] flex flex-col gap-8">
            {/* Brand Header */}
            <header className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-3 text-primary">
                <div className="size-8">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-[#111318] dark:text-white">Cisco Onboarding Hub</h2>
              </div>
              <div className="flex flex-col gap-2">
                <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
                  Welcome back
                </h1>
                <p className="text-[#616f89] dark:text-gray-400 text-base font-normal">
                  Sign in to your account to continue
                </p>
              </div>
            </header>

            {/* Form Section */}
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                  Email
                </label>
                <input 
                  className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base font-normal" 
                  placeholder="name@company.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                    Password
                  </label>
                  <a className="text-primary text-sm font-medium hover:underline" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative flex w-full items-stretch">
                  <input 
                    className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base font-normal pr-12" 
                    placeholder="Enter your password" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div 
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#616f89] cursor-pointer hover:text-[#111318] dark:hover:text-white"
                    onClick={togglePasswordVisibility}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>visibility</span>
                  </div>
                </div>
              </div>

              {/* Sign In Button */}
              <button 
                className="mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg h-12 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-colors" 
                type="submit"
              >
                Sign In
              </button>
            </form>

            {/* Demo Credentials Hint */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 text-xs text-blue-700 dark:text-blue-300">
              <p className="font-semibold mb-2">Demo Credentials:</p>
              <p>Email: alex.johnson@cisco.com</p>
              <p>Password: password123</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">(5 dummy users available - check dummyUsers.js)</p>
            </div>

            {/* Social Login Separator */}
            <div className="flex items-center gap-4 my-2">
              <div className="h-[1px] flex-1 bg-[#dbdfe6] dark:bg-gray-700"></div>
              <span className="text-xs font-semibold text-[#616f89] uppercase tracking-wider">or</span>
              <div className="h-[1px] flex-1 bg-[#dbdfe6] dark:bg-gray-700"></div>
            </div>

            {/* Footer Navigation */}
            <footer className="text-center">
              <p className="text-[#616f89] dark:text-gray-400 text-sm font-normal">
                New to Webex Playtime? 
                <Link to="/signup" className="text-primary font-bold hover:underline ml-1">
                  Sign up
                </Link>
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
