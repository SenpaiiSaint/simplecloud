// components/DashboardCard.tsx
"use client";

import { motion } from "motion/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js/auto";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface DashboardCardProps {
  title: string;
  value: number;
  valueColor?: string;
  chartData?: ChartData<'line'>;
  chartOptions?: ChartOptions<'line'>;
}

export default function DashboardCard({
  title,
  value,
  valueColor = "text-blue-500",
  chartData,
  chartOptions,
}: DashboardCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative gradient bar */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
      
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>
        <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
      </div>
      

      {chartData && (
        <div className="mt-4">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </motion.div>
  );
}