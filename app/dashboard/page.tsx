// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardCard from "../components/DashboardCard";

interface DashboardData {
  metrics: {
    users: number;
    sales: number;
    traffic: number;
  };
  message: string;
}

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/auth/dummy");
      const json = await res.json();
      setData(json);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-8">
        <motion.h1
          className="text-4xl font-extrabold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Dashboard
        </motion.h1>
        {data ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DashboardCard
              title="Users"
              value={data.metrics.users}
              valueColor="text-blue-500"
            />
            <DashboardCard
              title="Sales"
              value={data.metrics.sales}
              valueColor="text-green-500"
            />
            <DashboardCard
              title="Traffic"
              value={data.metrics.traffic}
              valueColor="text-red-500"
            />
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">
            Loading dashboard data...
          </p>
        )}
      </div>
    </div>
  );
}
