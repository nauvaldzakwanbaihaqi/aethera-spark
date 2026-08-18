import { z } from "zod";

export const promptSchema = z.object({
  prompt: z.string().min(10, "Please provide more details (minimum 10 characters)"),
});

export type PromptInput = z.infer<typeof promptSchema>;
