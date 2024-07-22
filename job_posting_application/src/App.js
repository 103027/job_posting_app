import Login_Signup from "./pages/Authentication/Login-Signup";
import Admin_Dashboard from "./pages/Admin/admin_dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_Signup/>}/>
        <Route path="/admin" element={<Admin_Dashboard />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
