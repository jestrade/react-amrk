import { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import Header from './components/common/Header';
import ToDo from './components/private/ToDo';
import Main from './components/private/Main';
import Login from './components/public/Login';
import SignUp from './components/public/SignUp';

const App = () => {
  const auth = useContext(AuthContext);

  return (
    <Router>
      <Header />

      {auth.checkAuth() ? (
        <Switch>
          <Route path="/todo">
            <ToDo />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      )}
    </Router>
  );
};

export default App;
