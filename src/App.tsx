import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import UserForm from "./components/UserForm";
import Dashboard from "./components/Dashboard";
import SignIn from "./pages/SignIn";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
