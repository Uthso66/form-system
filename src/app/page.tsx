"use client";
import Input from "./components/Input";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-linear-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        📝 Form Component System
      </h1>
      <p className="text-gray-600 mb-12">
        Building a reusable form library with validation
      </p>

      {/* Input Test Section */}
      <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🔘 Input Component Tests
        </h2>

        <div className="space-y-6">
          <Input
            label="Email Address"
            placeholder="you@example.com"
            type="email"
          />

          <Input
            label="Password"
            placeholder="••••••••"
            type="password"
            error="Password must be at least 8 characters"
          />

          <Input label="Full Name" placeholder="John Doe" fullWidth />

          {/* Interactive Demo */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-3">
              🎮 Real-time Example
            </h3>
            <Input
              label="Try typing here"
              placeholder="Watch the focus ring..."
              onChange={(e) => console.log("Typing:", e.target.value)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
