import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Chat from './components/Chat';
import DashboardLayout from './components/DashboardLayout';
import DashboardOverview from './components/DashboardOverview';
import ModuleLibrary from './components/ModuleLibrary';
import ModuleView from './components/ModuleView';
import Certifications from './components/Certifications';
import TeamResources from './components/TeamResources';
import TeamOverview from './components/TeamOverview';
import ForgotPassword from './components/ForgotPassword';
import SetPassword from './components/SetPassword';
import CampusOverview from './components/CampusOverview';
import HRConnect from './components/HRConnect';
import PolicyDocs from './components/PolicyDocs';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Navigate to="/dashboard/overview" replace />} />
            <Route path="moduleLibrary" element={<ModuleLibrary />} />
            <Route path="moduleLibrary/view/:moduleId" element={<ModuleView />} />
            <Route path="overview" element={<DashboardOverview />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="teamResources" element={<TeamResources />} />
            <Route path="teamResources/overview" element={<TeamOverview />} />
            <Route path="campus" element={<CampusOverview />} />
            <Route path="hr-connect" element={<HRConnect />} />
            <Route path="hr-connect/policy/:policyId" element={<PolicyDocs />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/set-password" element={<SetPassword />} />
      </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
