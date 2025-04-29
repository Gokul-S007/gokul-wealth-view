
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const TasksPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-wealth-gray-500 mt-1">Manage your financial tasks</p>
        </div>
        
        <div className="grid place-items-center py-16">
          <p className="text-wealth-gray-500">Detailed tasks management coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
