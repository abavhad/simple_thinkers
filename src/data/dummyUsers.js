// Dummy users for login testing
const initialDummyUsers = [
  {
    email: 'alex.johnson@cisco.com',
    password: 'password123',
    name: 'Alex Johnson',
    team: 'Frontend Development',
    teamJoined: 'Node',
    manager: 'Sarah Chen',
    role: 'Software Engineer',
    level: 'L3',
    project: 'Webex Playtime',
    employeeId: 'EMP001',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac',
    hasSignedUp: true,
    onboardingData: null
  },
  {
    email: 'maria.garcia@cisco.com',
    password: 'password123',
    name: 'Maria Garcia',
    team: 'Backend Development',
    teamJoined: 'Solution',
    manager: 'David Kim',
    role: 'Senior Software Engineer',
    level: 'L4',
    project: 'Webex Collaboration',
    employeeId: 'EMP002',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo1J_KWB7mpuN3EbV9xv-H5qDbNreK_yfIim8GimjJW6MBt_o-RrQIrOkQI1FCwB8sRcLabQYtJwhZ73u7j_RLY21gBEnUbB0F1vz8BNNjz27qAFDOJBZSt5o7r-zKTD_xxIkGd7N8XeAlCQv7h_DDtm-cLOptfi01uEUi36BBL2MxrDf_02HlhJtRpm1h-gG6xrHHkv-U8cr9r33JLV-PpOyvL_vi_knup-v7xetrH2T5a7EqNey1gSCsoxCFp69unCXBwAFloG1D',
    hasSignedUp: true,
    onboardingData: null
  },
  {
    email: 'james.wilson@cisco.com',
    password: 'password123',
    name: 'James Wilson',
    team: 'DevOps',
    teamJoined: 'Platform',
    manager: 'Emily Rodriguez',
    role: 'DevOps Engineer',
    level: 'L3',
    project: 'Infrastructure',
    employeeId: 'EMP003',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmGYCzan0f6FRL_i4d2jKcyDp7mGq3jJpyo2ItihD5ovKACDJiUzYD63qvHALK0pUGlevnfcaG9E7eVzMSc2mGK6jqfIhr_jDBZFIxSApBgDZQl58HoTIlUgqsWRPokN2jwxAEWINC5zyBpJMY9VhS4x8ULT1fRJ4F11VvnmSP2cttMtbVlGJWdg6eXODu4D39FtMjiG84Xyb-QrNA6ys-Z0VK97EWhd2jZnT11j1B5tB6Z1qJV4G0O245abSoJ21Fy80-YQOnLwFv',
    hasSignedUp: true,
    onboardingData: null
  },
  {
    email: 'priya.patel@cisco.com',
    password: null,
    name: 'Priya Patel',
    team: 'Product Design',
    teamJoined: 'Node',
    manager: 'Michael Brown',
    role: 'UX Designer',
    level: 'L2',
    project: 'User Experience',
    employeeId: 'EMP004',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQxbb9jUbQc_9QCmBnwlWAJ7ySMm5-PdF6X18i2AmGr46DPNLZN2F007Wbr8P7WeZ1CUVtqbV_Q9xB9_suI3Jshn3EVtZVYfybNKifD6YLTSeV_MkLgcHQjZRIFufeXNmYaPs37-dTl-Csvc3lEfdUQhx43w4W16PM79WS0t3lMG8LdPfytnf9EB1pOlkFkvI3oKj8z5gOGgcCULJiFo-GJwki5pMoUQnU4PyRe19QeEtVtds_7dzSEpACyCu4HlXAP5oz5OSKUuPh',
    hasSignedUp: true,
    onboardingData: null
  },
  {
    email: 'robert.taylor@cisco.com',
    password: null,
    name: 'Robert Taylor',
    team: 'Quality Assurance',
    teamJoined: 'Solution',
    manager: 'Lisa Anderson',
    role: 'QA Engineer',
    level: 'L3',
    project: 'Testing & Quality',
    employeeId: 'EMP005',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLWmTUYgRuSZoAkgx0zF2elAC2qVFuNb87uvIrPrIk9ULdD80BxoHGhdFONJghYWtz6hLn4eFxjFN3s_YkB4fx1RWXo9FK6lT7rABUqWtu6jPzNSruPnrYau7AokonYyj-eoakm9FeNv-9WawIyEXbrq-DtSXmqUXN8SiOwD_uuBCGeguKhEQoTXX3cUy6_CPm8PovGmKYVHJagmoFL4y2HOYp9uUILgBx7e000uNMobfPabblB0SnrW-mgCF668sTuZzzE9SIpgd4',
    hasSignedUp: false,
    onboardingData: null
  }
];

// Initialize users in localStorage - merge initial users with stored users
const initializeUsers = () => {
  const stored = localStorage.getItem('allUsers');
  
  if (!stored) {
    // First time - initialize with initialDummyUsers
    localStorage.setItem('allUsers', JSON.stringify(initialDummyUsers));
    return initialDummyUsers;
  }
  
  // Merge stored users with initialDummyUsers to ensure new users are added
  const storedUsers = JSON.parse(stored);
  const mergedUsers = [...storedUsers];
  
  // Add any new users from initialDummyUsers that don't exist in stored
  initialDummyUsers.forEach(initialUser => {
    const exists = mergedUsers.find(u => u.email.toLowerCase() === initialUser.email.toLowerCase());
    if (!exists) {
      mergedUsers.push(initialUser);
    } else {
      // Update existing user with initial data if password is null (preserve user updates)
      const index = mergedUsers.findIndex(u => u.email.toLowerCase() === initialUser.email.toLowerCase());
      if (index !== -1 && mergedUsers[index].password === null && initialUser.password === null) {
        // Keep stored data but ensure all initial fields are present
        mergedUsers[index] = { ...initialUser, ...mergedUsers[index] };
      }
    }
  });
  
  // Write merged data back to localStorage
  localStorage.setItem('allUsers', JSON.stringify(mergedUsers));
  return mergedUsers;
};

// Get all users (always fresh from localStorage)
export const getAllUsers = () => {
  return initializeUsers();
};

// Force refresh users from localStorage (bypass cache)
export const refreshUsers = () => {
  const stored = localStorage.getItem('allUsers');
  if (stored) {
    return JSON.parse(stored);
  }
  return initializeUsers();
};

// Get user by email
export const getUserByEmail = (email) => {
  const users = getAllUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase()) || null;
};

// Check if user has signed up
export const hasUserSignedUp = (email) => {
  const user = getUserByEmail(email);
  if (!user) return false;
  // User has signed up if they have a password set
  return user.hasSignedUp && user.password !== null;
};

// Check if user exists with null password (needs to set password)
export const userNeedsPassword = (email) => {
  const user = getUserByEmail(email);
  return user && user.password === null;
};

// Set password for existing user with null password
export const setUserPassword = (email, password) => {
  try {
    // Get fresh data from localStorage
    const stored = localStorage.getItem('allUsers');
    if (!stored) {
      console.error('No users found in localStorage');
      return null;
    }
    
    const users = JSON.parse(stored);
    const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (userIndex === -1) {
      console.error(`User ${email} not found`);
      return null;
    }
    
    if (users[userIndex].password !== null) {
      console.error(`User ${email} already has a password set`);
      return null;
    }
    
    // Set password and mark as signed up
    users[userIndex].password = password;
    users[userIndex].hasSignedUp = true;
    
    // Write updated data to localStorage
    const updatedData = JSON.stringify(users);
    localStorage.setItem('allUsers', updatedData);
    
    // Verify the write
    const verify = localStorage.getItem('allUsers');
    if (verify) {
      const verifiedUsers = JSON.parse(verify);
      const verifiedUser = verifiedUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (verifiedUser && verifiedUser.password === password && verifiedUser.hasSignedUp === true) {
        console.log(`✅ Password set for ${email}, hasSignedUp set to true - Data persisted successfully`);
        return verifiedUser;
      } else {
        console.error('❌ Data verification failed after write');
        return null;
      }
    } else {
      console.error('❌ Failed to verify data after write');
      return null;
    }
  } catch (error) {
    console.error('Error setting user password:', error);
    return null;
  }
};

// Update user password (for password changes)
export const updateUserPassword = (email, newPassword) => {
  const users = getAllUsers();
  const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
  
  if (userIndex !== -1) {
    users[userIndex].password = newPassword;
    localStorage.setItem('allUsers', JSON.stringify(users));
    return users[userIndex];
  }
  return null;
};

// Create new user
export const createUser = (email, password, onboardingData = null) => {
  const users = getAllUsers();
  
  // Check if user already exists
  if (getUserByEmail(email)) {
    return null; // User already exists
  }

  // Generate employee ID
  const employeeId = `EMP${String(users.length + 1).padStart(3, '0')}`;
  
  // Randomly assign team (Node, Solution, Platform)
  const teams = ['Node', 'Solution', 'Platform'];
  const teamJoined = teams[Math.floor(Math.random() * teams.length)];
  
  // Default manager based on team
  const managers = {
    'Node': 'Sarah Chen',
    'Solution': 'David Kim',
    'Platform': 'Emily Rodriguez'
  };
  
  // Extract name from email or onboarding data
  const name = onboardingData?.userName || email.split('@')[0].split('.').map(n => n.charAt(0).toUpperCase() + n.slice(1)).join(' ');
  
  const newUser = {
    email: email.toLowerCase(),
    password: password,
    name: name,
    team: `${teamJoined} Team`,
    teamJoined: teamJoined,
    manager: managers[teamJoined],
    role: 'Software Engineer',
    level: 'L2',
    project: 'Webex Playtime',
    employeeId: employeeId,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCvHiiMtHjF8QM9yVFWxIsedDWgrTWrh6ZdR8km4qs9I7oueC49JC9DJkrkEASz3eQi8euqcnX0BDdRTQBkT2_Ge5xZChXE62jRUL-E-LF476l8RhMpAlZhHxfAS4dADbMlkLVxyKT_7xG0IPsoMK0lGiO8ZfY25X5wE9Lp54l3z3n12LhuDkLoMO0ANaAwaNkUWT9M41DXtiQQKIelpdnK3phBUgw5MqhYi14BHES9DV0U_tZDSmTrVC4sYiq64uMGUvxW6qvCCMac',
    hasSignedUp: true,
    onboardingData: onboardingData,
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem('allUsers', JSON.stringify(users));
  return newUser;
};

// Update user onboarding data
export const updateUserOnboarding = (email, onboardingData) => {
  try {
    // Get fresh data from localStorage
    const stored = localStorage.getItem('allUsers');
    if (!stored) {
      console.error('No users found in localStorage');
      return null;
    }
    
    const users = JSON.parse(stored);
    const userIndex = users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (userIndex === -1) {
      console.error(`User ${email} not found`);
      return null;
    }
    
    // Update onboarding data
    users[userIndex].onboardingData = onboardingData;
    // Update name if provided in onboarding
    if (onboardingData?.userName) {
      users[userIndex].name = onboardingData.userName;
    }
    
    // Write updated data to localStorage
    const updatedData = JSON.stringify(users);
    localStorage.setItem('allUsers', updatedData);
    
    // Verify the write
    const verify = localStorage.getItem('allUsers');
    if (verify) {
      const verifiedUsers = JSON.parse(verify);
      const verifiedUser = verifiedUsers.find(u => u.email.toLowerCase() === email.toLowerCase());
      if (verifiedUser && verifiedUser.onboardingData) {
        console.log(`✅ Onboarding data updated for ${email} - Data persisted successfully`);
        return verifiedUser;
      }
    }
    
    console.error('❌ Failed to verify onboarding data after write');
    return null;
  } catch (error) {
    console.error('Error updating user onboarding:', error);
    return null;
  }
};

// Authenticate user
export const authenticateUser = (email, password) => {
  const users = getAllUsers();
  const user = users.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  return user || null;
};

// Export for backward compatibility
export const dummyUsers = getAllUsers();
