import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import './styles/compiled.css';
import client from './api/index';
import AuthProvider from './contexts/AuthProvider';
import DynamicRoute from './components/DynamicRoute';
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
              <DynamicRoute exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
            </Switch>
          </div>
        </Router>
      </AuthProvider>
    </ApolloProvider>
  );
};
export default App;
