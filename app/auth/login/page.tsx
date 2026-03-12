"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-white rounded-md p-2 mb-2">
            <Image src="/logos/logo.svg" alt="Logo" width={50} height={50} />
          </div>

          <h1 className="text-xl font-semibold">RHpro</h1>
          <p className="text-sm text-gray-500 mt-1">
            Access your RHpro MAFRAH account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email Address</label>

            <div className="flex items-center border rounded-md px-3 py-2 mt-1">
              <Mail size={16} className="text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="name@company.com"
                className="outline-none w-full text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between text-sm text-gray-600">
              <label>Password</label>
              <a
                href="/auth/forget-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 mt-1">
              <Lock size={16} className="text-gray-400 mr-2" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="outline-none w-full text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center text-sm text-gray-600">
            <input type="checkbox" className="mr-2" />
            Keep me logged in
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Authorized Personnel Only. By logging in you agree to our
          <span className="text-blue-600"> Terms of Service </span>
          and
          <span className="text-blue-600"> Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
