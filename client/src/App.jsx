import { useState, useEffect } from "react";
import TopNav from "./components/TopNav";
import Dashboard from "./pages/Dashboard";
import AdminPanel from "./pages/AdminPanel";
import LoginPage from "./pages/LoginPage";
import LoginReplaceCard from "./components/LoginReplaceCard";

function App() {
  const [currentView, setCurrentView] = useState("Dashboard");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token);
    setIsLoggedIn(true);
    setCurrentView("Admin Panel");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setCurrentView("Dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] to-[#1e3a8a]">
      <TopNav
        currentView={currentView}
        setCurrentView={setCurrentView}
        onLogout={handleLogout}
      />

      <main className="p-6">
        {currentView === "Dashboard" && <Dashboard />}

        {currentView === "Admin Panel" &&
          (isLoggedIn ? (
            <AdminPanel />
          ) : (
            <LoginReplaceCard message="Please login to access this panel." />
          ))}

        {currentView === "Login" &&
          (!isLoggedIn ? (
            <LoginPage onLoginSuccess={handleLoginSuccess} />
          ) : (
            <LoginReplaceCard message="✅ You are already logged in." />
          ))}
      </main>
    </div>
  );
}

export default App;
