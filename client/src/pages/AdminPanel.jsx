import { useState } from "react";
import AddMatchForm from "../components/admin/AddMatchForm";
import AddPlayerForm from "../components/admin/AddPlayerForm";
import AddRewardForm from "../components/admin/AddRewardForm";
import ManageDataPanel from "../components/admin/ManageDataPanel";
import AdminTabs from "../components/admin/AdminTabs"; // assuming it's needed
import LoginReplaceCard from "../components/LoginReplaceCard";


const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("Add Player");
  const isLoggedIn = !!localStorage.getItem("token"); // ✅ check here

  if (!isLoggedIn) {
    return (
      <LoginReplaceCard message="Please login to access this panel." />
    );
  }

  return (
    <div className="p-6 bg-gradient-to-b from-[#0f172a] to-[#1e3a8a] min-h-screen">
      <AdminTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Add Player" && <AddPlayerForm />}
      {activeTab === "Add Match" && <AddMatchForm />}
      {activeTab === "Add Reward" && <AddRewardForm />}
      {activeTab === "Manage Data" && <ManageDataPanel />}
    </div>
  );
};

export default AdminPanel;
