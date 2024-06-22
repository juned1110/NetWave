const { z } = require("zod");

// Creating schema for login Registration //
const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least 3 characters" })
    .max(255, { message: "Email must be at most 255 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(1024, { message: "Password must be at most 1024 characters" }),
});

// Creating schema for Signup Registration //
const signupSchema = loginSchema.extend({
  firstname: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "First Name must be at least 3 characters" })
    .max(255, { message: "First Name must be at most 255 characters" }),

  lastname: z
    .string({ required_error: "Last name is required" })
    .trim()
    .min(3, { message: "Last Name must be at least 3 characters" })
    .max(255, { message: "Last Name must be at most 255 characters" }),

  mobile: z
    .string({ required_error: "Mobile number is required" })
    .trim()
    .min(10, { message: "Mobile number must be at least 10 characters" })
    .max(20, { message: "Mobile number must be at most 20 characters" }),
});

module.exports = { signupSchema, loginSchema };
