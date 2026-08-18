import { PromptInput } from "@/features/studio/schemas/studio.schema";

export type GenerationState = 
  | "idle"
  | "analyzing_dna"
  | "synthesizing_ui"
  | "finalizing_code"
  | "complete";

export interface GenerationStatus {
  state: GenerationState;
  message: string;
}

export const generateUI = async (
  input: PromptInput, 
  onProgress: (status: GenerationStatus) => void
): Promise<{ success: true, projectUrl: string }> => {
  return new Promise((resolve) => {
    // Simulate AI generation flow
    onProgress({ state: "analyzing_dna", message: "Analyzing Brand DNA and Prompt..." });
    
    setTimeout(() => {
      onProgress({ state: "synthesizing_ui", message: "Synthesizing UI components using Architect & Stylist Agent..." });
      
      setTimeout(() => {
        onProgress({ state: "finalizing_code", message: "Finalizing React/Vite Code with Hacker Agent..." });
        
        setTimeout(() => {
          onProgress({ state: "complete", message: "Generation Complete!" });
          resolve({ success: true, projectUrl: "/mock-project-url" });
        }, 1500);
        
      }, 2000);
      
    }, 1500);
  });
};
