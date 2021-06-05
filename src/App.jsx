import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/common/Header';
import ToDo from './components/private/ToDo';
import Main from './components/private/Main';
import Login from './components/public/Login';
import SignUp from './components/public/SignUp';

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/todo">
          <ToDo />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
