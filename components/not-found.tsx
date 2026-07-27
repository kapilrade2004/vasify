import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileQuestion } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-green-50 via-white to-green-50 text-center">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
        <FileQuestion className="w-10 h-10" />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-3">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/">
        <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Button>
      </Link>
    </div>
  );
}
