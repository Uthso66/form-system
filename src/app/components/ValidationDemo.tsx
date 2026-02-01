"use client";

import { FormInput } from "./Input";
import { FormTextarea } from "./Textarea";
import { FormSelect } from "./Select";
import { FormCheckbox } from "./Checkbox";
import { useRegistrationForm } from "../hooks/useFormValidation";
import { countryOptions } from "../lib/constants";

export default function ValidationDemo() {
  const { register, handleSubmit, errors, isSubmitting, isValid, watch } =
    useRegistrationForm();

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    alert(`Registration successful!\nWelcome ${data.fullName}`);
  };

  // Watch password for real-time match indicator
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");
  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          label="Full Name *"
          placeholder="John Doe"
          error={errors.fullName?.message}
          registration={register}
          name="fullName"
        />

        <FormInput
          label="Email *"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
          registration={register}
          name="email"
        />

        <FormInput
          label="Password *"
          type="password"
          placeholder="••••••••"
          error={errors.password?.message}
          registration={register}
          name="password"
        />

        <div>
          <FormInput
            label="Confirm Password *"
            type="password"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            registration={register}
            name="confirmPassword"
          />
          {passwordsMatch && password && (
            <p className="text-green-600 text-sm mt-1">✓ Passwords match</p>
          )}
        </div>

        <FormSelect
          label="Country *"
          options={countryOptions}
          error={errors.country?.message}
          registration={register}
          name="country"
        />

        <FormInput
          label="Age *"
          type="number"
          placeholder="25"
          error={errors.age?.message}
          registration={register}
          name="age"
        />
      </div>

      <FormSelect
        label="Subscription Plan *"
        options={[
          { value: "free", label: "Free Tier" },
          { value: "pro", label: "Pro ($19/month)" },
          { value: "enterprise", label: "Enterprise ($99/month)" },
        ]}
        error={errors.subscriptionPlan?.message}
        registration={register}
        name="subscriptionPlan"
      />

      <FormTextarea
        label="Bio"
        placeholder="Tell us about yourself..."
        rows={3}
        error={errors.bio?.message}
        registration={register}
        name="bio"
      />

      <div className="space-y-3">
        <FormCheckbox
          label="I accept the terms and conditions *"
          error={errors.acceptTerms?.message}
          registration={register}
          name="acceptTerms"
        />

        <FormCheckbox
          label="Subscribe to newsletter"
          registration={register}
          name="newsletter"
        />
      </div>

      <div className="pt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          {isValid ? (
            <span className="text-green-600">✓ Form is valid</span>
          ) : (
            <span>Fill all required fields correctly</span>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className={`
            px-8 py-3 font-medium rounded-lg transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${
              isSubmitting || !isValid
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
            }
          `}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Processing...
            </span>
          ) : (
            "Register Account"
          )}
        </button>
      </div>

      {/* Debug Info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-700 mb-2">Debug Info:</h4>
        <div className="text-sm text-gray-600 space-y-1">
          <div>Form valid: {isValid ? "Yes" : "No"}</div>
          <div>Errors: {Object.keys(errors).length}</div>
          <div>Characters in bio: {watch("bio")?.length || 0}/500</div>
        </div>
      </div>
    </form>
  );
}
