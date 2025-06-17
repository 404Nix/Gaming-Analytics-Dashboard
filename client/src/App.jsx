import { useState } from "react";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";

function App() {
  const [currentView, setCurrentView] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e3a8a]">
      <TopNav currentView={currentView} setCurrentView={setCurrentView} />

      <main className="p-6">
        {currentView === "Dashboard" && <Dashboard />}
        {currentView === "Admin Panel" && <AdminPanel />}
        {currentView === "Login" && <div className="text-white">Login Page (Coming soon)</div>}
      </main>
    </div>
  );
}

export default App;
