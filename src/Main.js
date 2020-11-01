import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

import App from './App';

class Main extends Component {
  render() {
    return (
      <div className="container">
         <Route exact path="/" component={Register} /> 
        <Route path="/login" component={Login} />
        
        <Route path="/home" component={App} />
        
      </div>
    );
  }
}

export default Main;
