import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('leeza_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Demo login logic - in production, this would call an API
      const users = JSON.parse(localStorage.getItem('leeza_users') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      
      if (foundUser) {
        const userSession = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email,
          phone: foundUser.phone,
          isAdmin: foundUser.email === 'leezasarwar0@gmail.com'
        };
        setUser(userSession);
        localStorage.setItem('leeza_user', JSON.stringify(userSession));
        return true;
      }
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (name: string, email: string, phone: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Demo registration logic - in production, this would call an API
      const users = JSON.parse(localStorage.getItem('leeza_users') || '[]');
      
      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        return false;
      }

      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        phone,
        password, // In production, this would be hashed
        isAdmin: email === 'leezasarwar0@gmail.com'
      };

      users.push(newUser);
      localStorage.setItem('leeza_users', JSON.stringify(users));

      const userSession = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        isAdmin: newUser.isAdmin
      };
      
      setUser(userSession);
      localStorage.setItem('leeza_user', JSON.stringify(userSession));
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('leeza_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};