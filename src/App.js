import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import AddHotels from "./components/AddHotels";
import AddRooms from "./components/AddRooms";
import ViewHotels from "./components/ViewHotels";
import ViewRooms from "./components/ViewRooms";
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/addhotels" element={<AddHotels />}></Route>
      <Route path="/addrooms" element={<AddRooms />}></Route>
      <Route path="/viewhotels" element={<ViewHotels />}></Route>
      <Route path="/viewrooms" element={<ViewRooms />}></Route>
      <Route path="/home" element={<DashboardHome />}></Route>
    </Routes>
  );
}

export default App;
