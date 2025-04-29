
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const AdvisorRecommendationsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advisor Recommendations</h1>
          <p className="text-wealth-gray-500 mt-1">Financial advice tailored for you</p>
        </div>
        
        <div className="grid place-items-center py-16">
          <p className="text-wealth-gray-500">Detailed advisor recommendations coming soon...</p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdvisorRecommendationsPage;
