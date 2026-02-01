"use client";

import { forwardRef } from "react";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  rows?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { label, error, fullWidth = false, rows = 4, className = "", ...props },
    ref,
  ) => {
    return (
      <div className={`flex flex-col gap-2 ${fullWidth ? "w-full" : ""}`}>
        {label && (
          <label className="text-sm font-medium text-gray-700">{label}</label>
        )}
        <textarea
          ref={ref}
          rows={rows}
          className={`
            px-4 py-3 border rounded-lg transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            resize-y min-h-25
            ${error ? "border-red-500" : "border-gray-300"}
            ${fullWidth ? "w-full" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <p className="text-xs text-gray-500 mt-1">
          {props.value?.toString().length || 0} characters
        </p>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
