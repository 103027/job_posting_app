import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_Signup from "./pages/Authentication/Login-Signup";
import JobListings from './pages/Admin/Jobs/job_listings';
import Apply from './pages/User/Apply';
import AboutUs from './pages/AboutUs';
import BasicLayout from './Components/BasicLayout';
import AddJob from './pages/Admin/Jobs/add_job';
import ViewJob from './pages/Admin/Jobs/view_Job';
import ActiveJobs from './pages/User/activejobs';
import Dashboard from './pages/User/dashboard';
import Job from './pages/job';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/authentication" element={<Login_Signup />} />
          <Route path="/" element={<BasicLayout />}>
            <Route path="/viewJob/:id" element={<ViewJob />} />
            <Route path="/adminDashboard" element={<JobListings />} />
            <Route path="/userDashboard" element={<Dashboard />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/activejobs" element={<ActiveJobs />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/job" element={<Job />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
