import { describe, it, expect } from "vitest";
import { loginSchema, registerSchema } from "./auth.schema";

describe("Auth Schemas", () => {
  describe("loginSchema", () => {
    it("should accept valid email and password", () => {
      const validData = { email: "test@example.com", password: "password123" };
      const result = loginSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject invalid email", () => {
      const invalidData = { email: "not-an-email", password: "password123" };
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Invalid email address");
      }
    });

    it("should reject short password", () => {
      const invalidData = { email: "test@example.com", password: "short" };
      const result = loginSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Password must be at least 6 characters");
      }
    });
  });

  describe("registerSchema", () => {
    it("should accept valid registration data", () => {
      const validData = { name: "John Doe", email: "john@example.com", password: "password123" };
      const result = registerSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should reject short name", () => {
      const invalidData = { name: "J", email: "john@example.com", password: "password123" };
      const result = registerSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe("Name must be at least 2 characters");
      }
    });
  });
});
