import { z } from "zod";

// 1. User Registration Schema
export const registrationSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name is too long"),

    email: z.email("Please enter a valid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),

    confirmPassword: z.string(),

    country: z.string().min(1, "Please select a country"),

    subscriptionPlan: z.string().min(1, "Please select a plan"),

    bio: z.string().max(500, "Bio must be less than 500 characters").optional(),

    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must accept the terms",
    }),

    newsletter: z.boolean().optional(),

    age: z
      .number()
      .min(18, "You must be at least 18 years old")
      .max(120, "Please enter a valid age"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// 2. Login Schema (simpler)
export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(6, "Password too short"),
  rememberMe: z.boolean().optional(),
});

// 3. Contact Form Schema
export const contactSchema = z.object({
  name: z.string().min(2, "Name required"),
  email: z.email(),
  subject: z.string().min(5, "Subject too short"),
  message: z.string().min(10, "Message too short").max(1000),
  priority: z.enum(["low", "medium", "high"]),
});

// Type inference
export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
