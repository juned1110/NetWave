const { z } = require("zod");

// Creating schema for Signup/ Registration //
const signupSchema = z.object({
  firstname: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Name must be atleast of 255 character" }),

  lastname: z
    .string({ required_error: "Last name is required" })
    .trim()
    .min(3, { message: "Name must be atleast of 3 characters" })
    .max(255, { message: "Name must be atleast of 255 character" }),

  mobile: z
    .string({ required_error: "Mobile number is required" })
    .trim()
    .min(10, { message: "Mobile number must be atleast of 10 characters" })
    .max(20, { message: "Mobile number must be atleast of 20 character" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "email must be atleast of 3 characters" })
    .max(255, { message: "email must be atleast of 255 character" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(8, { message: "Password must be atleast of 8 characters" })
    .max(1024, { message: "Password must be atleast of 1024 character" }),
});

module.exports = signupSchema;
