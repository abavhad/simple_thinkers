import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { hasUserSignedUp, createUser, userNeedsPassword, setUserPassword } from '../data/dummyUsers';

function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Check if user exists with password set - redirect to sign in
    if (hasUserSignedUp(email)) {
      setError('This email is already registered. Redirecting to sign in...');
      setTimeout(() => {
        navigate('/');
      }, 1500);
      return;
    }

    // Check if user exists with null password (from initialDummyUsers) - allow signup
    if (userNeedsPassword(email)) {
      // Set password for existing user - this will set hasSignedUp = true and write to localStorage
      const updatedUser = setUserPassword(email, password);
      
      if (updatedUser) {
        console.log('✅ User password set successfully:', updatedUser);
        console.log('✅ User data in localStorage:', localStorage.getItem('allUsers'));
        
        // Store user and redirect to onboarding
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('pendingOnboarding', 'true');
        
        // Redirect to onboarding
        navigate('/onboarding');
        return;
      } else {
        console.error('❌ Failed to set password for:', email);
        setError('Failed to set password. Please try again.');
        return;
      }
    }

    // Create new user (doesn't exist in initialDummyUsers)
    const newUser = createUser(email, password);
    
    if (!newUser) {
      setError('Failed to create account. Please try again.');
      return;
    }

    // Store user and redirect to onboarding
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('pendingOnboarding', 'true');
    
    // Redirect to onboarding, then it will go to chat
    navigate('/onboarding');
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    const passwordInput = e.target.closest('div').querySelector('input[type="password"]');
    if (passwordInput) {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-white min-h-screen">
      <div className="flex min-h-screen flex-col lg:flex-row">
        {/* Left Section: Lifestyle Image & Brand Messaging */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-primary">
          <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/80 to-transparent"></div>
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center" 
            alt="People collaborating remotely in a modern bright office space" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuATApODJrsj60r42wXgmrPoxrlhUTAtaPyUrZDXnlgBozkvayfJ2Dfc0S7Qa6-SAZy_l_HnAp9th-SYi5WRM6TK_j6R3a40lAdNbup5vQNTo3FnPfsaWG3APpXxRhRvq1sJWzPyAtwewVfkq_XpIQXrILI1Vyf_ydA9d9wV3E4sQlfvAz9ubXleepeSkeFhBHcrQ7hnoStbNwEhw9rAbMIBRdcmRsFvVWuJMolQdjAthwbQZzUBXyVQBT-7Gonl379eZITi4PjnnfNO")'
            }}
          ></div>
          <div className="relative z-20 flex flex-col justify-end p-20 w-full text-white">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-8 bg-white text-primary flex items-center justify-center rounded-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                  </svg>
                </div>
                <span className="text-2xl font-bold tracking-tight">CISCO</span>
              </div>
              <h1 className="text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
                Self Onboarding Made Easy.
              </h1>
              <p className="text-lg opacity-90 max-w-md">
                A smarter way to connect and learn.
                Accelerating growth from day one at Cisco.
                Engineered for teams that lead the future.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex -space-x-3">
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Team member headshot" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQxbb9jUbQc_9QCmBnwlWAJ7ySMm5-PdF6X18i2AmGr46DPNLZN2F007Wbr8P7WeZ1CUVtqbV_Q9xB9_suI3Jshn3EVtZVYfybNKifD6YLTSeV_MkLgcHQjZRIFufeXNmYaPs37-dTl-Csvc3lEfdUQhx43w4W16PM79WS0t3lMG8LdPfytnf9EB1pOlkFkvI3oKj8z5gOGgcCULJiFo-GJwki5pMoUQnU4PyRe19QeEtVtds_7dzSEpACyCu4HlXAP5oz5OSKUuPh"
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Team member headshot" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLWmTUYgRuSZoAkgx0zF2elAC2qVFuNb87uvIrPrIk9ULdD80BxoHGhdFONJghYWtz6hLn4eFxjFN3s_YkB4fx1RWXo9FK6lT7rABUqWtu6jPzNSruPnrYau7AokonYyj-eoakm9FeNv-9WawIyEXbrq-DtSXmqUXN8SiOwD_uuBCGeguKhEQoTXX3cUy6_CPm8PovGmKYVHJagmoFL4y2HOYp9uUILgBx7e000uNMobfPabblB0SnrW-mgCF668sTuZzzE9SIpgd4"
                />
                <img 
                  className="w-10 h-10 rounded-full border-2 border-white" 
                  alt="Team member headshot" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkj6XpNatXaHlUNLwSnaUnSr4JwT7YFwgFkufrdvISmw5iVDk8W7X27zEf88yLGr5X7jrjOALTpOXhe-YyJi-okMRufaW43BqEq13OoGIgYjNakviTq-Q7klAZ9tkLDLVOtQaBT_6MkMyh2LTpPLiwK-odu_5zkWzBYkDQVRaCdtWdL3xbKBKhyXJJplFJCMaxgUnWNg36buCQXFCtKGnFb5eKJE1_uyJVBMQILuiezxKmHH_luQU1OK57d47xa9ci2q2T1rlDt__f"
                />
              </div>
              <p className="text-sm self-center">Joined by 10k+ professionals this month</p>
            </div>
          </div>
        </div>

        {/* Right Section: Signup Form */}
        <div className="flex flex-1 flex-col justify-center bg-white dark:bg-background-dark px-6 py-12 lg:px-24">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-12 flex items-center gap-3">
            <div className="size-6 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#111318] dark:text-white text-lg font-bold">Webex</h2>
          </div>

          <div className="mx-auto w-full max-w-[440px]">
            <div className="mb-10">
              <h2 className="text-[#111318] dark:text-white tracking-tight text-3xl font-bold leading-tight pb-2">
                Create your account
              </h2>
              <p className="text-[#616f89] dark:text-gray-400">
                Get started with your Cisco learning journey.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">
                  Email Address
                </label>
                <input 
                  className="form-input flex w-full rounded-lg text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                  placeholder="name@company.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">
                  Create Password
                </label>
                <div className="relative flex w-full items-center">
                  <input 
                    className="form-input flex w-full rounded-lg text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="At least 8 characters" 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="8"
                  />
                  <button 
                    className="absolute right-4 text-[#616f89] dark:text-gray-400 hover:text-primary transition-colors" 
                    type="button"
                    onClick={togglePasswordVisibility}
                  >
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
                {/* Password Strength Indicator */}
                <div className="mt-2 space-y-2">
                  <div className="flex gap-1 h-1.5 w-full">
                    <div className="h-full flex-1 rounded-full bg-primary"></div>
                    <div className="h-full flex-1 rounded-full bg-primary"></div>
                    <div className="h-full flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="h-full flex-1 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-primary font-medium">Strength: Medium</p>
                    <p className="text-xs text-[#616f89] dark:text-gray-400">Add a symbol for "Strong"</p>
                  </div>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal">
                  Confirm Password
                </label>
                <div className="relative flex w-full items-center">
                  <input 
                    className="form-input flex w-full rounded-lg text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" 
                    placeholder="Confirm your password" 
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Sign Up Button */}
              <div className="pt-4">
                <button 
                  className="flex w-full items-center justify-center rounded-lg h-12 px-5 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all shadow-md shadow-primary/20" 
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="mt-10 text-center">
              <p className="text-sm text-[#616f89] dark:text-gray-400">
                Already have an account? 
                <Link to="/" className="text-primary font-bold hover:underline ml-1 transition-all">
                  Sign in
                </Link>
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#f0f2f4] dark:border-gray-800">
              <p className="text-[12px] text-center text-[#616f89] dark:text-gray-500 leading-relaxed">
                By signing up, you agree to our 
                <a className="underline hover:text-primary transition-colors" href="#"> Terms of Service</a> 
                {' '}and{' '}
                <a className="underline hover:text-primary transition-colors" href="#"> Privacy Policy</a>. 
                {' '}Webex standard data protection applies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
