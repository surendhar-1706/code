
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import ResetPasswordConfirm from './components/ResetPasswordConfirm';
import Activate from './components/Activate';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
function App() {
 
  return (
    <div>
      <Provider store={store}>
       <Router>
    <Link to='/login'>Login</Link>
    <Link to='/'>Home</Link>
    <Link to='/signup'>Signup</Link>
    <Link to='/reset_password'>ResetPassword</Link>
 
  <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/login'>
        <Login/>
      </Route>
      <Route path='/signup'>
        <Signup/>
      </Route>
      <Route path='/reset_password'>
       <ResetPassword/>
      </Route>
      <Route path='/password/reset/confirm/:uid/:token'>
        <ResetPasswordConfirm/>
      </Route>
      <Route path='/activate/:uid/:token'>
        <Activate/>
      </Route>
  </Switch>
</Router>
</Provider>
  
    </div>
  );
}

export default App;
