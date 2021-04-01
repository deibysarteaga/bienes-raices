import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Anuncios from './components/Anuncios.jsx'
import Blog from './components/Blog.jsx'
import Contacto from './components/Contacto.jsx'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/nosotros">
            <About/>
          </Route>
          <Route path="/anuncios">
            <Anuncios/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/contacto">
            <Contacto/>
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
