"use client";

import { forwardRef } from "react";

interface CheckboxProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, fullWidth = false, className = "", ...props }, ref) => {
    return (
      <div className={`flex items-center gap-3 ${fullWidth ? "w-full" : ""}`}>
        <input
          type="checkbox"
          ref={ref}
          className={`
            w-5 h-5 rounded border-gray-300
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
            text-blue-600
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {label && (
          <label className="text-sm font-medium text-gray-700 cursor-pointer">
            {label}
          </label>
        )}
        {error && <p className="text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
