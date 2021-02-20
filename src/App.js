import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Authentication from './Authentification/Pages/Authentification';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Authentication />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
