import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Lock, FileSearch, LogIn } from "lucide-react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";

type Mode = "signup" | "login";

export default function PdfExtractorAuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("signup");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
    setError(null);
  };

  const handleToggleMode = () => {
    setMode((prev) => (prev === "signup" ? "login" : "signup"));
    resetForm();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const endpoint =
        mode === "signup"
          ? `${API_BASE_URL}/api/pdf-auth/register`
          : `${API_BASE_URL}/api/pdf-auth/login`;

      const body =
        mode === "signup"
          ? { name, email, password }
          : { email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Authentication failed");
      }

      if (data.token && typeof window !== "undefined") {
        localStorage.setItem("pdf_auth_token", data.token);
      }

      navigate("/tools/pdf-extractor/app");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isSignup = mode === "signup";

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left: info */}
        <div className="text-white space-y-6">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
            <FileSearch className="w-4 h-4 mr-2" />
            New • PDF Extractor with 7-day free trial
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
            {isSignup ? "Create your account" : "Welcome back"} to{" "}
            <span className="text-emerald-400">PDF Extractor</span>
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-md">
            Extract tables and key invoice data into clean Excel files in seconds.
            7-day free trial for new accounts. No credit card required.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Handles multi-page invoices and complex tables</li>
            <li>• Supports password-protected PDFs</li>
            <li>• Export results directly to Excel</li>
          </ul>
        </div>

        {/* Right: auth card */}
        <Card className="bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl rounded-3xl">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mr-3">
                  {isSignup ? (
                    <Lock className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <LogIn className="w-5 h-5 text-emerald-600" />
                  )}
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-slate-900">
                    {isSignup ? "Create your account" : "Log in to your account"}
                  </h2>
                  <p className="text-xs md:text-sm text-slate-500">
                    {isSignup
                      ? "Start your 7-day free trial of PDF Extractor"
                      : "Access your invoices and extracted data"}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleToggleMode}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                {isSignup ? "Already have an account?" : "New here? Sign up"}
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {isSignup && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  placeholder={isSignup ? "Create a strong password" : "Enter your password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>

              {error && (
                <p className="text-xs text-red-500 font-medium">{error}</p>
              )}

              <Button
                type="submit"
                className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl py-2.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {isSignup ? "Creating account..." : "Logging in..."}
                  </>
                ) : isSignup ? (
                  <>Start 7-day free trial</>
                ) : (
                  <>Log in</>
                )}
              </Button>

              <p className="text-[10px] text-slate-500 text-center mt-3">
                By continuing, you agree to our Terms of Service and Privacy Policy.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
