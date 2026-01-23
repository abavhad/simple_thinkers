// Utility functions for user management

// Get current authenticated user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem('currentUser');
  if (!userStr) return null;
  try {
    return JSON.parse(userStr);
  } catch (e) {
    return null;
  }
};

// Check if user is authenticated
export const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

// Logout user
export const logout = () => {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('isAuthenticated');
  localStorage.removeItem('onboardingCompleted');
  localStorage.removeItem('onboardingData');
};

// Get user details
export const getUserDetails = () => {
  const user = getCurrentUser();
  if (!user) return null;
  
  return {
    name: user.name,
    email: user.email,
    team: user.team,
    manager: user.manager,
    role: user.role,
    level: user.level,
    project: user.project,
    avatar: user.avatar
  };
};
