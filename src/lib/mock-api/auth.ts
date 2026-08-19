import { LoginInput, RegisterInput } from "@/features/auth/schemas/auth.schema";

const getMockDelay = (defaultMs: number) => {
  const envDelay = import.meta.env.VITE_MOCK_DELAY_MS;
  if (envDelay !== undefined && envDelay !== "") {
    return Number(envDelay);
  }
  return defaultMs;
};

export const loginMock = async (data: LoginInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      sessionStorage.setItem("aethera_token", "mock_token_" + data.email);
      resolve({ success: true, token: "mock_token_" + data.email });
    }, getMockDelay(800));
  });
};

export const registerMock = async (data: RegisterInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      sessionStorage.setItem("aethera_token", "mock_token_" + data.email);
      resolve({ success: true, token: "mock_token_" + data.email });
    }, getMockDelay(1000));
  });
};

export const logoutMock = () => {
  sessionStorage.removeItem("aethera_token");
};
