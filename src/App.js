import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Map} from './pages/Map'
import { About } from './pages/About';
import { Text } from './pages/Text';
import { Contacts } from './pages/Contacts';
import {Navbar} from './components/Navbar'




function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route  path={'/'} exact component={Map}/>
        <Route  path={'/about'}  component={About}/>
        <Route  path={'/text'}  component={Text}/>
        <Route  path={'/contacts'}  component={Contacts}/>
      </Switch>

    </div>

    </BrowserRouter>
  );
}

export default App;
