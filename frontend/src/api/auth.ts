const API_URL = "http://40.192.15.177:5000/api/auth";

export interface LoginResponse {
  token?: string;
  message?: string;
}

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error: - auth.ts:19", error);
    return { message: "Server error. Please try again." };
  }
};
