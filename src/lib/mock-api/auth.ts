import { LoginInput, RegisterInput } from "@/features/auth/schemas/auth.schema";

export const loginMock = async (data: LoginInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      sessionStorage.setItem("aethera_token", "mock_token_" + data.email);
      resolve({ success: true, token: "mock_token_" + data.email });
    }, 800);
  });
};

export const registerMock = async (data: RegisterInput) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      sessionStorage.setItem("aethera_token", "mock_token_" + data.email);
      resolve({ success: true, token: "mock_token_" + data.email });
    }, 1000);
  });
};

export const logoutMock = () => {
  sessionStorage.removeItem("aethera_token");
};
