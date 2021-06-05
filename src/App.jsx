import Header from './components/common/Header';
import ToDo from './components/private/ToDo';
import Main from './components/private/Main';
import Login from './components/public/Login';
import SignUp from './components/public/SignUp';

const App = () => {
  return (
    <>
      <Header />

      <ToDo />
      <Main />
      <Login />
      <SignUp />
    </>
  );
};

export default App;
