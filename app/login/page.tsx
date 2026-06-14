"use client";

import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy via-[#12395b] to-teal-dark flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-navy">Welcome Back</h1>
          <p className="mt-2 text-gray-500">Login to your CoachKart account</p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>

            <div className="flex items-center rounded-xl border px-4">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter email"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Password</label>

            <div className="flex items-center rounded-xl border px-4">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                placeholder="Enter password"
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange py-3 font-semibold text-white transition hover:opacity-90"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?
          <a href="/register" className="ml-1 font-semibold text-orange">
            Sign Up
          </a>
        </p>
      </div>
    </main>
  );
}
