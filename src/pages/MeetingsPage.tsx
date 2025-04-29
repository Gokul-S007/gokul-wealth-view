
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const MeetingsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-wealth-gray-500 mt-1">Schedule and manage appointments</p>
        </div>
        
        <div className="grid place-items-center py-16">
          <p className="text-wealth-gray-500">Detailed meetings calendar coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeetingsPage;
