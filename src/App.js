import './App.css';
import { Routes, Route } from "react-router-dom";
import LoginPage from './pages/Login';
import Dashboard from './pages/Dashboard';


function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
  );
}

export default App;
