"use client";

import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add your dashboard content here */}
        <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Welcome</h2>
          <p className="text-zinc-400 text-md">
            Start building your AI workspace
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
