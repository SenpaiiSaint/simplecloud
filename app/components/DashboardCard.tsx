// components/DashboardCard.tsx
"use client";

import { motion } from "motion/react";

interface DashboardCardProps {
  title: string;
  value: number;
  valueColor?: string;
}

export default function DashboardCard({
  title,
  value,
  valueColor = "text-blue-500",
}: DashboardCardProps) {
  return (
    <motion.div
      className="p-6 bg-white rounded-xl shadow-lg border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">{title}</h2>
      <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
    </motion.div>
  );
}
