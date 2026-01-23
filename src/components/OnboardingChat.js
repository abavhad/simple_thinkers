import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUserOnboarding, getUserByEmail } from '../data/dummyUsers';
import { useTheme } from '../contexts/ThemeContext';

function OnboardingChat() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [userName, setUserName] = useState('');
  const [hobbies, setHobbies] = useState([]);
  const [hometown, setHometown] = useState('');
  const [mernComfort, setMernComfort] = useState('');
  const [priorExperience, setPriorExperience] = useState('');
  const [learningPreference, setLearningPreference] = useState('');
  const [customHobby, setCustomHobby] = useState('');
  const { theme, toggleTheme } = useTheme();

  const hobbyOptions = [
    { id: 'gaming', label: 'Gaming', icon: 'sports_esports' },
    { id: 'coding', label: 'Coding', icon: 'code' },
    { id: 'photography', label: 'Photography', icon: 'photo_camera' },
    { id: 'travel', label: 'Travel', icon: 'flight' },
    { id: 'music', label: 'Music', icon: 'music_note' },
    { id: 'cooking', label: 'Cooking', icon: 'cooking' },
    { id: 'fitness', label: 'Fitness', icon: 'fitness_center' },
    { id: 'art', label: 'Art', icon: 'palette' },
    { id: 'reading', label: 'Reading', icon: 'auto_stories' },
  ];

  const comfortLevels = [
    { id: 'beginner', label: 'Beginner', description: 'Just starting out' },
    { id: 'intermediate', label: 'Intermediate', description: 'Some experience' },
    { id: 'advanced', label: 'Advanced', description: 'Very comfortable' },
    { id: 'expert', label: 'Expert', description: 'I could teach this' },
  ];

  const learningOptions = [
    { id: 'video', label: 'Video Tutorials', icon: 'play_circle' },
    { id: 'docs', label: 'Documentation', icon: 'description' },
    { id: 'hands-on', label: 'Hands-on Practice', icon: 'build' },
  ];

  const toggleHobby = (hobbyId) => {
    setHobbies(prev => 
      prev.includes(hobbyId) 
        ? prev.filter(id => id !== hobbyId)
        : [...prev, hobbyId]
    );
  };

  const addCustomHobby = () => {
    if (customHobby.trim() && !hobbies.includes(customHobby.trim())) {
      setHobbies(prev => [...prev, customHobby.trim()]);
      setCustomHobby('');
    }
  };

  useEffect(() => {
    // Get current user email from localStorage
    const currentUserStr = localStorage.getItem('currentUser');
    if (!currentUserStr) {
      navigate('/');
      return;
    }
  }, [navigate]);

  const generateFunFact = (onboardingData) => {
    // Generate fun fact based on onboarding data
    const funFacts = [
      "Loves coding more than coffee ☕",
      "Sweats more than expected 😄",
      "Can debug code but not life 🐛",
      "Thinks in code, dreams in bugs 💭",
      "Prefers dark mode even in real life 🌙",
      "Believes semicolons are optional 😉",
      "Can make a sandwich but can't make it compile 🥪"
    ];
    
    // Use prior experience or learning preference to generate relevant fun fact
    if (onboardingData.priorExperience && onboardingData.priorExperience.toLowerCase().includes('bug')) {
      return "Thinks debugging is a superpower 🦸";
    }
    if (onboardingData.learningPreference === 'hands-on') {
      return "Learns by breaking things (and fixing them) 🔧";
    }
    if (onboardingData.mernComfort === 'beginner') {
      return "Just starting the MERN journey, wish me luck! 🍀";
    }
    
    // Default random fun fact
    return funFacts[Math.floor(Math.random() * funFacts.length)];
  };

  const sendIntroToWebexTeams = (user, onboardingData) => {
    // Webex Teams space ID
    const spaceId = '20bfd3d0-5b4c-11f0-9c71-67d2ef7739e5';
    
    // Format hobbies
    let hobbiesText = '';
    if (onboardingData.hobbies && onboardingData.hobbies.length > 0) {
      const hobbyLabels = Array.isArray(onboardingData.hobbies) 
        ? onboardingData.hobbies.map(h => {
            const hobby = hobbyOptions.find(o => o.id === h);
            return hobby ? hobby.label : h;
          })
        : [onboardingData.hobbies];
      hobbiesText = hobbyLabels.join(', ');
    } else {
      hobbiesText = 'Exploring new interests';
    }
    
    // Get role - use MERN Engineer if MERN comfort level is set
    const roleText = onboardingData.mernComfort 
      ? `MERN Engineer (${comfortLevels.find(l => l.id === onboardingData.mernComfort)?.label || onboardingData.mernComfort})`
      : user.role;
    
    // Generate fun fact
    const funFact = generateFunFact(onboardingData);
    
    // Format intro message in the specified template
    const introMessage = `👋 Everyone, please welcome ${user.name} to the ${user.teamJoined} Team
${onboardingData.hometown ? `🌍 From: ${onboardingData.hometown}` : '🌍 From: Just joined!'}
🎯 Role: ${roleText}
🎨 Hobbies: ${hobbiesText}
💬 Fun fact: ${funFact}
Let's make ${user.name.split(' ')[0]} feel at home! 🏠`;

    // Store message in localStorage for display in Chat
    localStorage.setItem('webexIntroMessage', introMessage);
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(introMessage);
    
    // Webex Teams deep link with message
    const webexTeamsUrl = `webexteams://im?space=${spaceId}&text=${encodedMessage}`;
    
    // Try to open Webex Teams app
    try {
      window.location.href = webexTeamsUrl;
    } catch (e) {
      console.log('Could not open Webex Teams app, message stored for manual copy');
    }
    
    // Fallback: Also try web version after a delay
    setTimeout(() => {
      const webUrl = `https://web.webex.com/webapp/?spaceId=${spaceId}`;
      console.log('Webex Teams message prepared:', introMessage);
      console.log('Web URL:', webUrl);
    }, 1000);
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      // Onboarding complete - save data and redirect
      const currentUserStr = localStorage.getItem('currentUser');
      if (!currentUserStr) {
        navigate('/');
        return;
      }

      const currentUser = JSON.parse(currentUserStr);
      const onboardingData = {
        userName,
        hobbies,
        hometown,
        mernComfort,
        priorExperience,
        learningPreference,
      };
      
      // Update user with onboarding data
      const updatedUser = updateUserOnboarding(currentUser.email, onboardingData);
      
      if (updatedUser) {
        // Update current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        localStorage.setItem('onboardingCompleted', 'true');
        localStorage.setItem('onboardingData', JSON.stringify(onboardingData));
        localStorage.removeItem('pendingOnboarding');
        
        // Send intro message to Webex Teams
        sendIntroToWebexTeams(updatedUser, onboardingData);
        
        // Redirect to module library
        navigate('/dashboard/moduleLibrary');
      } else {
        console.error('Failed to update user onboarding data');
        navigate('/');
      }
    }
  };

  const canProceed = () => {
    switch(step) {
      case 0: return userName.trim() !== '';
      case 1: return hobbies.length > 0;
      case 2: return hometown.trim() !== '';
      case 3: return mernComfort !== '';
      case 4: return priorExperience.trim() !== '';
      case 5: return learningPreference !== '';
      default: return true;
    }
  };

  const getStepMessage = () => {
    switch(step) {
      case 0:
        return "Hey 👋 Welcome to Cisco! Let's get you settled. What should we call you?";
      case 1:
        return "What are some of your hobbies? Feel free to pick from the list or type your own!";
      case 2:
        return "Where are you from? (Your hometown)";
      case 3:
        return "How comfortable are you with MERN?";
      case 4:
        return "Any prior experience with this domain?";
      case 5:
        return "What's your preferred learning style?";
      default:
        return "";
    }
  };

  const renderStepContent = () => {
    switch(step) {
      case 0:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your preferred name"
              className="form-input w-full rounded-xl text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base focus:outline-0 focus:ring-2 focus:ring-primary/50"
              onKeyPress={(e) => e.key === 'Enter' && canProceed() && handleNext()}
              autoFocus
            />
          </div>
        );

      case 1:
        return (
          <div className="bg-white/50 dark:bg-white/5 rounded-2xl p-6 border border-dashed border-gray-300 dark:border-gray-700">
            <div className="flex gap-3 flex-wrap justify-center mb-4">
              {hobbyOptions.map((hobby) => (
                <div
                  key={hobby.id}
                  onClick={() => toggleHobby(hobby.id)}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 cursor-pointer transition-all ${
                    hobbies.includes(hobby.id)
                      ? 'bg-primary text-white hover:brightness-110'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px]">{hobby.icon}</span>
                  <p className={`text-sm ${hobbies.includes(hobby.id) ? 'font-semibold' : 'font-medium'}`}>
                    {hobby.label}
                  </p>
                  {hobbies.includes(hobby.id) && (
                    <span className="material-symbols-outlined text-[16px]">check</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={customHobby}
                onChange={(e) => setCustomHobby(e.target.value)}
                placeholder="Type a hobby..."
                className="form-input flex-1 rounded-xl text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-10 placeholder:text-[#616f89] px-4 text-sm focus:outline-0 focus:ring-2 focus:ring-primary/50"
                onKeyPress={(e) => e.key === 'Enter' && addCustomHobby()}
              />
              <button
                onClick={addCustomHobby}
                className="bg-primary text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={hometown}
              onChange={(e) => setHometown(e.target.value)}
              placeholder="Enter your hometown"
              className="form-input w-full rounded-xl text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 h-12 placeholder:text-[#616f89] px-4 text-base focus:outline-0 focus:ring-2 focus:ring-primary/50"
              onKeyPress={(e) => e.key === 'Enter' && canProceed() && handleNext()}
              autoFocus
            />
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-3">
            {comfortLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setMernComfort(level.id)}
                className={`text-left rounded-xl p-4 border-2 transition-all ${
                  mernComfort === level.id
                    ? 'border-primary bg-primary/10 dark:bg-primary/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50'
                }`}
              >
                <p className="font-semibold text-[#111318] dark:text-white">{level.label}</p>
                <p className="text-sm text-[#616f89] dark:text-gray-400">{level.description}</p>
              </button>
            ))}
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-4">
            <textarea
              value={priorExperience}
              onChange={(e) => setPriorExperience(e.target.value)}
              placeholder="Tell us about your experience..."
              rows="4"
              className="form-input w-full rounded-xl text-[#111318] dark:text-white border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-gray-800 placeholder:text-[#616f89] px-4 py-3 text-base focus:outline-0 focus:ring-2 focus:ring-primary/50 resize-none"
              autoFocus
            />
          </div>
        );

      case 5:
        return (
          <div className="flex flex-col gap-3">
            {learningOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setLearningPreference(option.id)}
                className={`flex items-center gap-3 text-left rounded-xl p-4 border-2 transition-all ${
                  learningPreference === option.id
                    ? 'border-primary bg-primary/10 dark:bg-primary/20'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary/50'
                }`}
              >
                <span className="material-symbols-outlined text-primary text-2xl">{option.icon}</span>
                <p className="font-semibold text-[#111318] dark:text-white">{option.label}</p>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen flex flex-col font-display relative">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-6 md:px-10 py-3 sticky top-0 z-50">
        {/* Theme Toggle Button in Navbar */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-700 hover:border-primary/50 shadow-sm"
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="material-symbols-outlined text-xl">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <div className="size-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_6_319)">
                <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z" fill="currentColor"></path>
              </g>
              <defs>
                <clipPath id="clip0_6_319"><rect fill="white" height="48" width="48"></rect></clipPath>
              </defs>
            </svg>
          </div>
          <h2 className="text-[#111318] dark:text-white text-lg font-bold leading-tight tracking-tight">Webex Playtime</h2>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Step {step + 1} of 6</span>
          <div 
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" 
            alt="User profile avatar" 
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDo1J_KWB7mpuN3EbV9xv-H5qDbNreK_yfIim8GimjJW6MBt_o-RrQIrOkQI1FCwB8sRcLabQYtJwhZ73u7j_RLY21gBEnUbB0F1vz8BNNjz27qAFDOJBZSt5o7r-zKTD_xxIkGd7N8XeAlCQv7h_DDtm-cLOptfi01uEUi36BBL2MxrDf_02HlhJtRpm1h-gG6xrHHkv-U8cr9r33JLV-PpOyvL_vi_knup-v7xetrH2T5a7EqNey1gSCsoxCFp69unCXBwAFloG1D")'
            }}
          ></div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col items-center py-10 px-4 overflow-y-auto">
        <div className="w-full max-w-[720px] flex flex-col gap-6">
          {/* User Messages History */}
          {step > 0 && userName && (
            <>
              {/* Name message */}
              <div className="flex items-end gap-3 justify-end">
                <div className="flex flex-col gap-1 items-end">
                  <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">{userName}</p>
                  <div className="bg-primary text-white rounded-xl rounded-tr-none px-5 py-3 shadow-sm max-w-md">
                    <p className="text-base">My name is {userName}</p>
                  </div>
                </div>
                <div 
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 shadow-sm" 
                  alt="User profile avatar" 
                  style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac")'
                  }}
                ></div>
              </div>
              {/* Hobbies message */}
              {step > 1 && hobbies.length > 0 && (
                <div className="flex items-end gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">{userName}</p>
                    <div className="bg-primary text-white rounded-xl rounded-tr-none px-5 py-3 shadow-sm max-w-md">
                      <p className="text-base">{hobbies.map(h => hobbyOptions.find(o => o.id === h)?.label || h).join(', ')}</p>
                    </div>
                  </div>
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 shadow-sm" 
                    alt="User profile avatar" 
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac")'
                    }}
                  ></div>
                </div>
              )}
              {/* Hometown message */}
              {step > 2 && hometown && (
                <div className="flex items-end gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">{userName}</p>
                    <div className="bg-primary text-white rounded-xl rounded-tr-none px-5 py-3 shadow-sm max-w-md">
                      <p className="text-base">{hometown}</p>
                    </div>
                  </div>
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 shadow-sm" 
                    alt="User profile avatar" 
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac")'
                    }}
                  ></div>
                </div>
              )}
              {/* MERN comfort message */}
              {step > 3 && mernComfort && (
                <div className="flex items-end gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">{userName}</p>
                    <div className="bg-primary text-white rounded-xl rounded-tr-none px-5 py-3 shadow-sm max-w-md">
                      <p className="text-base">{comfortLevels.find(l => l.id === mernComfort)?.label}</p>
                    </div>
                  </div>
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 shadow-sm" 
                    alt="User profile avatar" 
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac")'
                    }}
                  ></div>
                </div>
              )}
              {/* Prior experience message */}
              {step > 4 && priorExperience && (
                <div className="flex items-end gap-3 justify-end">
                  <div className="flex flex-col gap-1 items-end">
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">{userName}</p>
                    <div className="bg-primary text-white rounded-xl rounded-tr-none px-5 py-3 shadow-sm max-w-md">
                      <p className="text-base">{priorExperience}</p>
                    </div>
                  </div>
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 shadow-sm" 
                    alt="User profile avatar" 
                    style={{
                      backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac")'
                    }}
                  ></div>
                </div>
              )}
            </>
          )}

          {/* Assistant Message */}
          <div className="flex items-start gap-3">
            <div className="bg-white dark:bg-gray-800 flex items-center justify-center aspect-square rounded-full size-10 shrink-0 shadow-sm border border-gray-100 dark:border-gray-700">
              <span className="material-symbols-outlined text-primary">smart_toy</span>
            </div>
            <div className="flex flex-col gap-1 items-start">
              <p className="text-gray-500 dark:text-gray-400 text-xs font-medium px-2">Assistant</p>
              <div className="bg-white dark:bg-gray-800 text-[#111318] dark:text-white rounded-xl rounded-tl-none px-5 py-3 shadow-sm border border-gray-100 dark:border-gray-700 max-w-md">
                <p className="text-base leading-relaxed">
                  {getStepMessage()}
                </p>
              </div>
            </div>
          </div>

          {/* Step Content */}
          {renderStepContent()}

          {/* Continue Button */}
          {canProceed() && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleNext}
                className="bg-primary hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>Continue</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Chat Input Footer */}
      <footer className="w-full max-w-[960px] mx-auto pb-8 px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-2">
          <div className="flex items-center gap-3">
            <div 
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0 ml-1" 
              alt="User small avatar" 
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBmGYCzan0f6FRL_i4d2jKcyDp7mGq3jJpyo2ItihD5ovKACDJiUzYD63qvHALK0pUGlevnfcaG9E7eVzMSc2mGK6jqfIhr_jDBZFIxSApBgDZQl58HoTIlUgqsWRPokN2jwxAEWINC5zyBpJMY9VhS4x8ULT1fRJ4F11VvnmSP2cttMtbVlGJWdg6eXODu4D39FtMjiG84Xyb-QrNA6ys-Z0VK97EWhd2jZnT11j1B5tB6Z1qJV4G0O245abSoJ21Fy80-YQOnLwFv")'
              }}
            ></div>
            <div className="flex flex-col min-w-40 h-12 flex-1">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                <input
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111318] dark:text-white focus:outline-0 focus:ring-0 border-none bg-gray-50 dark:bg-gray-900/50 focus:border-none h-full placeholder:text-gray-400 px-4 pr-2 text-base font-normal leading-normal"
                  placeholder={step === 1 ? "Type a hobby..." : "Type your answer..."}
                  disabled={step !== 1}
                />
                <div className="flex border-none bg-gray-50 dark:bg-gray-900/50 items-center justify-center pr-4 rounded-r-xl !pr-2">
                  <div className="flex items-center gap-2 justify-end">
                    <button className="flex items-center justify-center p-2 text-gray-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[22px]">attach_file</span>
                    </button>
                    <button className="flex items-center justify-center p-2 text-gray-400 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[22px]">mood</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">You can change these later in your profile settings.</p>
      </footer>
    </div>
  );
}

export default OnboardingChat;
