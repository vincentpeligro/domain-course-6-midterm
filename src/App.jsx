import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Header";
import Home from "./pages/Home";
import VenueSinglePage from "./pages/VenueSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/api/venue/:id" element={<VenueSinglePage />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
