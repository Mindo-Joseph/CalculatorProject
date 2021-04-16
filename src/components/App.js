import '../App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Calculator from './calculator';
import Quote from './Quote';
import Error from './Error';

function App() {
  return (

    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/calculator" component={Calculator} />
        <Route path="/quote" component={Quote} exact />
        <Route component={Error} />
      </Switch>

    </main>
  );
}
export default App;
