import RegistrationForm from "./Components/RegistrationForm";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LoginPage from "./Components/Login_Page";
import Navbar from "./Components/Navbar";
import LoginList from "./Components/LoginList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Registration" element={<RegistrationForm />} /> 
        <Route path="/dashboard" element={<LoginList />} /> 
      </Routes>
    </Router>
  );
};

export default App;

