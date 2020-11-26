import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import './styles/compiled.css';
import client from './api/index';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <Router>
          <div className='min-h-screen w-full bg-gradient-to-t from-red-500 to-yellow-500 flex items-center'>
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <PublicRoute path='/login' component={Login} />
              <PublicRoute path='/register' component={Register} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};
export default App;
