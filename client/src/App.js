import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  useNavigate
} from "react-router-dom";
import React from 'react';

import Landing from './pages/landing.page.jsx';
import Signup from './pages/authentication/signup.page.jsx';
import ForgotPassword from './pages/authentication/forgotPassword.page.jsx';
import ResetPassword from './pages/authentication/resetPassword.page.jsx';
import Memories from "./pages/memories.page.jsx";
import AddMemory from "./pages/addMemory.page.jsx";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Landing navigate={useNavigate}/> }/>
          <Route path="/signup" element={ <Signup navigate={useNavigate}/> }/>
          <Route path="/forgot-password" element={ <ForgotPassword navigate={useNavigate}/> }/>
          <Route path="/reset-password" element={ <ResetPassword navigate={useNavigate}/> }/>
          
          <Route path="/memories" element={ <Memories navigate={useNavigate}/> }/>
          <Route path="/add-memory" element={ <AddMemory navigate={useNavigate}/> }/>
        </Routes>
    </Router>
  );
}


export default App;