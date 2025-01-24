import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login_Signup from "./pages/Authentication/Login-Signup";
import JobListings from './pages/Admin/Jobs/job_listings';
import Applicants from './pages/Admin/Applicants';
import AboutUs from './pages/AboutUs';
import BasicLayout from './Components/BasicLayout';
import AddJob from './pages/Admin/Jobs/add_job';
import ViewJob from './pages/Admin/Jobs/view_Job';
import ActiveJobs from './pages/User/activejobs';
import Applications from './pages/Applications';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/authentication" element={<Login_Signup />} />
          <Route path="/" element={<BasicLayout />}>
            <Route path="/viewJob/:id" element={<ViewJob />} />
            <Route path="/adminDashobard" element={<JobListings />} />
            <Route path="/userDashobard" element={<ActiveJobs />} />
            <Route path="/addJob" element={<AddJob />} />
            <Route path="/applicants" element={<Applicants />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
