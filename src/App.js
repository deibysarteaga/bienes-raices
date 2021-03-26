import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.jsx'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/nosotros">
            <h2>nosotros</h2>
          </Route>
          <Route path="/anuncios">
            <h2>Anuncios</h2>
          </Route>
          <Route path="/blog">
            <h2>Blog</h2>
          </Route>
          <Route path="/contacto">
            <h2>Contacto</h2>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
