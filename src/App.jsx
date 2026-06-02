import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Public from "./pages/Public";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Galeria from "./pages/Galeria";
import AdminDashboard from "./pages/Admin";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
