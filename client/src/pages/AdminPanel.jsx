import React, { useState } from "react";
import AdminTabs from "../components/admin/AdminTabs";
import AddPlayerForm from "../components/admin/AddPlayerForm";
import AddMatchForm from "../components/admin/AddMatchForm";
import AddRewardForm from "../components/admin/AddRewardForm";
import ManageDataPanel from "../components/admin/ManageDataPanel";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("Add Player");

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
