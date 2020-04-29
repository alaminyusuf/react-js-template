import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
import './App.css'

const App = () => (
  <Router>
    <div className="app">
      <div className="section">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </div>
  </Router>
)

export default App
