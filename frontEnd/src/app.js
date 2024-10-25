import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import Registro from './pages/Register';
import Dashboard from './pages/Dashboard';
import Post from './pages/PostPage';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/registro" component={Registro} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/post" component={Post} />
        {/* Redirigir a la página de login si no coincide ninguna ruta */}
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
