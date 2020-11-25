import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './styles/compiled.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-t from-red-500 to-yellow-500 flex items-center'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
      </Switch>
    </div>
  );
};
export default App;
