export interface User {
  id: string;
  email: string;
  name: string;
  role: "job_seeker" | "employer";
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}

export interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}
