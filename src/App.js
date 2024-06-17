import React from "react";

import My_website from "./components/my_website";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
import Home from "./home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<My_website />} />
        <Route path="/home" element={<Home />} />
        <Route path="/my_website" element={<My_website />} />
      </Routes>
    </Router>
  );
};

export default App;
