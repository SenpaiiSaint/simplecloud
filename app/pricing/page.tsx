"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  buttonLabel: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "$5/month",
    features: ["Basic Feature 1", "Basic Feature 2"],
    buttonLabel: "Select Plan",
  },
  {
    id: "basic",
    name: "Basic",
    price: "$9/month",
    features: ["Feature A", "Feature B", "Feature C"],
    buttonLabel: "Select Plan",
  },
  {
    id: "pro",
    name: "Pro",
    price: "$29/month",
    features: ["Everything in Basic", "Feature D", "Priority Support"],
    buttonLabel: "Select Plan",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom Pricing",
    features: [
      "All Pro features",
      "Dedicated Account Manager",
      "Custom Integrations",
    ],
    buttonLabel: "Contact Us",
  },
];

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (id: string) => {
    setSelectedPlan(id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Pricing
        </motion.h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Choose a plan that fits your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`p-6 bg-white rounded-lg shadow transition-all duration-300 cursor-pointer ${
                selectedPlan === plan.id ? "border-4 border-blue-500" : "hover:shadow-xl"
              }`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSelectPlan(plan.id)}
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                {plan.name}
              </h2>
              <p className="text-gray-600 mb-4">{plan.price}</p>
              <ul className="mb-4 space-y-1">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-gray-600">
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={(e) => {
                  // Prevent event bubbling so that clicking the button doesn't trigger the card click
                  e.stopPropagation();
                  handleSelectPlan(plan.id);
                }}
              >
                {plan.buttonLabel}
              </button>
            </motion.div>
          ))}
        </div>
        {selectedPlan && (
          <div className="mt-8 text-center">
            <p className="text-xl text-gray-800">
              Selected Plan: <span className="font-bold">{selectedPlan}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
