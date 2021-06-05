import { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import ToDo from './components/private/ToDo';
import Main from './components/private/Main';
import Login from './components/public/Login';
import SignUp from './components/public/SignUp';

const App = () => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  const login = (userLogged) => {
    localStorage.setItem('user', JSON.stringify(userLogged));
    setUser(userLogged);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    setIsAuth(!!user);
  }, [user]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user);
  }, []);

  return (
    <BrowserRouter>
      <Header isAuth={isAuth} logout={logout} user={user} />

      {isAuth ? (
        <Switch>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <Login login={login} />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
};

export default App;
