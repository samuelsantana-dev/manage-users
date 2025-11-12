export interface User extends UserAuth {
  id?: string;
  password?: string;
  confirmPassword?: string;
}

export interface UserAuth {
  name?: string;
  email?: string;
}

export interface AuthContextType {
  user: User | null;
  setUser?: (user: User | null) => void;
}

