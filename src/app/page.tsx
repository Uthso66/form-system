"use client";
import Input, { FormInput } from "./components/Input";
import Textarea, { FormTextarea } from "./components/Textarea";
import Select, { FormSelect } from "./components/Select";
import Checkbox, { FormCheckbox } from "./components/Checkbox";
import ValidationDemo from "./components/ValidationDemo";
export default function Home() {
  const countryOptions = [
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
    { value: "ca", label: "Canada" },
    { value: "au", label: "Australia" },
    { value: "in", label: "India" },
  ];

  const planOptions = [
    { value: "basic", label: "Basic Plan" },
    { value: "pro", label: "Pro Plan" },
    { value: "enterprise", label: "Enterprise" },
  ];

  return (
    <main className="min-h-screen p-8 bg-linear-to-br from-gray-50 to-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        📝 Form Component System
      </h1>
      <p className="text-gray-600 mb-12">
        Building a reusable form library with validation
      </p>
      {/* FORM DEMO SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl">
        {/* Left Column: Input Tests */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            🔘 Individual Components
          </h2>

          <div className="space-y-6">
            {/* Input Examples */}
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-700 mb-4">
                📥 Input Fields
              </h3>
              <Input
                label="Email Address"
                placeholder="you@example.com"
                type="email"
              />
              <div className="mt-4">
                <Input
                  label="Password"
                  type="password"
                  error="Must be 8+ characters"
                />
              </div>
            </div>

            {/* Textarea Example */}
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-700 mb-4">📝 Textarea</h3>
              <Textarea
                label="Message"
                placeholder="Type your message here..."
                rows={3}
              />
            </div>

            {/* Select Example */}
            <div className="border-b pb-4">
              <h3 className="font-medium text-gray-700 mb-4">
                🔽 Select Dropdown
              </h3>
              <Select
                label="Country"
                options={countryOptions}
                placeholder="Choose your country"
              />
            </div>

            {/* Checkbox Example */}
            <div>
              <h3 className="font-medium text-gray-700 mb-4">✅ Checkbox</h3>
              <Checkbox label="I agree to the terms and conditions" />
            </div>
          </div>
        </div>

        {/* Right Column: Form Example */}
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            📋 Complete Form Example
          </h2>

          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted! (Check console)");
              console.log("Form submitted!");
            }}
          >
            <Input
              label="Full Name"
              placeholder="John Doe"
              fullWidth
              required
            />

            <Input
              label="Email"
              type="email"
              placeholder="john@example.com"
              fullWidth
              required
            />

            <Select
              label="Subscription Plan"
              options={planOptions}
              fullWidth
              required
            />

            <Textarea
              label="Additional Notes"
              placeholder="Any special requirements?"
              rows={2}
              fullWidth
            />

            <div className="space-y-3">
              <Checkbox label="Subscribe to newsletter" defaultChecked />
              <Checkbox label="I accept the terms of service" required />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* QUICK TIPS */}
      <div className="mt-8 bg-blue-50 p-6 rounded-xl max-w-6xl">
        <h3 className="font-medium text-blue-900 mb-3">
          💡 Component Features So Far:
        </h3>
        <ul className="grid grid-cols-2 gap-2 text-sm text-blue-800">
          <li className="flex items-center gap-2">
            ✅ Full TypeScript support
          </li>
          <li className="flex items-center gap-2">✅ Accessibility ready</li>
          <li className="flex items-center gap-2">✅ Error state handling</li>
          <li className="flex items-center gap-2">✅ Full-width option</li>
          <li className="flex items-center gap-2">
            ✅ Character counter (Textarea)
          </li>
          <li className="flex items-center gap-2">✅ Required field support</li>
        </ul>
      </div>
      // ... (keep existing imports and code) // Add this NEW SECTION after the
      existing form
      <div className="mt-8 bg-white p-8 rounded-xl shadow-sm max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🛡️ Form with Zod Validation
        </h2>

        <ValidationDemo />
      </div>
    </main>
  );
}
