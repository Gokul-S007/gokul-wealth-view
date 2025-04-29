
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InvestmentDetails: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investment Details</h1>
          <p className="text-wealth-gray-500 mt-1">View and manage your investment portfolio</p>
        </div>
        
        <div className="grid place-items-center py-16">
          <p className="text-wealth-gray-500">Investment details coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentDetails;
