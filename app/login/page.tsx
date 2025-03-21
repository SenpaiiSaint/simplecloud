"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleGoogleLogin() {
    setLoading(true);
    // Simulate a realistic login delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    alert("Logged in with dummy Google account!");
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center">
      <motion.div
        className="relative bg-white p-10 rounded-xl shadow-2xl w-full max-w-md overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative animated blob */}
        <motion.div
          className="absolute -top-16 -left-16 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-50"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        ></motion.div>

        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Welcome Back</h1>
          <p className="mb-8 text-gray-600 text-center">
            Sign in with your Google account to continue
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleGoogleLogin}
            className="flex items-center justify-center gap-3 w-full py-3 bg-white border border-gray-300 rounded-md shadow hover:shadow-lg transition"
            disabled={loading}
          >
            <Image
              src="/google-logo.svg"
              alt="Google Logo"
              width={24}
              height={24}
            />
            <span className="text-gray-700 font-medium">
              {loading ? "Signing In..." : "Sign in with Google"}
            </span>
          </motion.button>
          <p className="mt-4 text-sm text-gray-500">
            Demo login - no credentials required
          </p>
        </div>
      </motion.div>
    </div>
  );
}
