"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  registrationSchema,
  loginSchema,
  contactSchema,
} from "../lib/validation"; // Adjust path as needed
export function useFormValidation<T extends z.ZodType<any, any, any>>(
  schema: T,
) {
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
    setValue,
    watch,
    control,
  } = useForm<FormData>({
    resolver: zodResolver(schema as any),
    mode: "onChange",
  });

  const onSubmitHandler = (onSubmit: SubmitHandler<FormData>) => {
    return handleSubmit(onSubmit);
  };

  return {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    reset,
    setValue,
    watch,
    control,
    onSubmitHandler,
  };
}

// Pre-built form hooks for common forms
export function useRegistrationForm() {
  return useFormValidation(registrationSchema);
}

export function useLoginForm() {
  return useFormValidation(loginSchema);
}

export function useContactForm() {
  return useFormValidation(contactSchema);
}
