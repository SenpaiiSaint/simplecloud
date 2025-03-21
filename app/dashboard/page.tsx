// app/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
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

  // Sample chart data for Users, Sales, and Traffic
  const usersChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Users Trend",
        data: [50, 60, 55, 70, 65, 80, 90],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const salesChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales Trend",
        data: [10, 15, 20, 18, 25, 22, 30],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const trafficChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Traffic Trend",
        data: [100, 120, 150, 130, 160, 140, 170],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { display: false } },
    },
  };

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
              chartData={usersChartData}
              chartOptions={chartOptions}
            />
            <DashboardCard
              title="Sales"
              value={data.metrics.sales}
              valueColor="text-green-500"
              chartData={salesChartData}
              chartOptions={chartOptions}
            />
            <DashboardCard
              title="Traffic"
              value={data.metrics.traffic}
              valueColor="text-red-500"
              chartData={trafficChartData}
              chartOptions={chartOptions}
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