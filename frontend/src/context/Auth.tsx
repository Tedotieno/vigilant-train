import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';

interface AuthContextType {
  fullName: string;
  setFullName: (fullName: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [fullName, setFullName] = useState<string>('');

  useEffect(() => {
    const storedFullName = localStorage.getItem('userFullName');
    if (storedFullName) {
      setFullName(storedFullName);
    }
  }, []);

  const handleLogin = (name: string) => {
    setFullName(name);
    localStorage.setItem('userFullName', name);
  };

  const handleLogout = () => {
    setFullName('');
    localStorage.removeItem('userFullName');
  };

  const contextValue = {
    fullName,
    setFullName: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
