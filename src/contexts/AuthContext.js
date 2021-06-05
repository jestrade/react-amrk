import { createContext, useState, useEffect } from 'react';
const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userLocalStorage = localStorage.getItem('user');

    if (userLocalStorage) {
      setUser(JSON.parse(userLocalStorage));
    } else {
      setUser(null);
    }
  }, []);

  const checkAuth = () => {
    return !!user;
  };

  const login = (userLogin) => {
    setUser(userLogin);
    localStorage.setItem('user', JSON.stringify(userLogin));
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, checkAuth, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
