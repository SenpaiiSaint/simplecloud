"use client";

import { motion } from "motion/react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Features
        </motion.h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Our platform offers a comprehensive set of features designed to help your business grow.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Real-Time Analytics</h2>
            <p className="text-gray-600">
              Monitor your metrics and key performance indicators live.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seamless Integration</h2>
            <p className="text-gray-600">
              Easily connect with your favorite tools and services.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Customizable Dashboards</h2>
            <p className="text-gray-600">
              Personalize your dashboard with flexible widgets and layouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
