import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AtSign, Eye, EyeOff } from "lucide-react";

export default function AccountLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-3 sm:p-6 md:p-8 font-sans">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
        {/* Left Side: Blue Hero Section with Illustration */}
        <div className="bg-indigo-600 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-600 to-indigo-700 opacity-95" />

          {/* Decorative shapes */}
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center my-6">
            {/* SVG Illustration resembling cloud tech / jumping figures */}
            <div className="w-full max-w-sm aspect-square relative flex items-center justify-center mb-6">
              <svg
                viewBox="0 0 400 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-xl"
              >
                <circle cx="200" cy="200" r="140" fill="white" fillOpacity="0.1" />
                <path d="M120 160 C120 120, 160 100, 200 100 C240 100, 280 120, 280 160 C290 160, 310 170, 310 190 C310 210, 290 220, 280 220 L120 220 C100 220, 90 210, 90 190 C90 170, 100 160, 120 160 Z" fill="white" fillOpacity="0.2" />

                {/* Left Figure */}
                <path d="M140 280 L150 210 L170 230 L160 300 Z" fill="#6EE7B7" />
                <circle cx="150" cy="180" r="16" fill="#FDE047" />
                <path d="M135 196 C135 196, 150 220, 165 196 Z" fill="#3B82F6" />
                <path d="M120 170 Q100 150 110 130" stroke="#FDE047" strokeWidth="4" strokeLinecap="round" />

                {/* Right Figure */}
                <path d="M260 280 L250 210 L230 230 L240 300 Z" fill="#F472B6" />
                <circle cx="250" cy="180" r="16" fill="#F97316" />
                <path d="M235 196 C235 196, 250 220, 265 196 Z" fill="#10B981" />
                <path d="M280 170 Q300 150 290 130" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />

                {/* Mobile Device Frame */}
                <rect x="110" y="140" width="70" height="130" rx="12" stroke="white" strokeWidth="4" fill="none" />
                <rect x="220" y="140" width="70" height="130" rx="12" stroke="white" strokeWidth="4" fill="none" />

                {/* Decorative Chat Icons */}
                <circle cx="90" cy="120" r="14" fill="#F97316" />
                <path d="M85 120 L95 120 M90 115 L90 125" stroke="white" strokeWidth="3" />
                <polygon points="320,130 335,145 305,145" fill="#FDE047" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-sm sm:text-base md:text-lg font-medium text-blue-100 leading-relaxed max-w-md mx-auto">
              Elevate Your Customer Journey with Secure, State-of-the-Art Cloud Technology Solutions.
            </p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center bg-white">
          <div className="w-full max-w-sm flex flex-col items-center">
            {/* Top Logo Container: NEW VasifyTech Logo */}
            <div className="mb-6 flex justify-center items-center">
              <Link to="/">
                <img
                  src="/vasifytech-logo-v2.png"
                  alt="VasifyTech"
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain max-w-[240px]"
                />
              </Link>
            </div>

            {/* Independence Day Banner */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-[2px] bg-orange-500 rounded-full" />
              <span className="text-xs font-bold tracking-wider text-slate-700 uppercase">
                80th Independence Day
              </span>
              <div className="w-8 h-[2px] bg-emerald-500 rounded-full" />
            </div>

            {/* Header Text */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 mb-1">
                Welcome Back
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                Sign in to continue to your account
              </p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              {/* Username Input */}
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-[11px] font-semibold text-slate-500">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all pr-10 text-slate-800 placeholder-slate-400"
                  required
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  <AtSign className="w-4 h-4" />
                </div>
              </div>

              {/* Password Input */}
              <div className="relative">
                <label className="absolute -top-2.5 left-4 bg-white px-1 text-[11px] font-semibold text-slate-500">
                  Password
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 transition-all pr-10 text-slate-800 placeholder-slate-400"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 text-sm active:scale-[0.99]"
              >
                Sign In
              </button>
            </form>

            {/* Links */}
            <div className="mt-5 text-center space-y-3 w-full">
              <div>
                <a
                  href="#forgot"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  Forgotten Password?
                </a>
              </div>
              <div className="text-xs text-slate-500">
                If you haven&apos;t an Account{" "}
                <Link to="/contact" className="font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
