import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import About from './components/pages/About'
import Article from './components/article/Article'
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar'
// import Context
import NytimesState from './context/nytimes/NytimesState'

// import styles
import './App.css'

const App = () => (
  <NytimesState>
    <Router>
      <div className="app">
        <div className="section">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/article" component={Article} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  </NytimesState>
)

export default App
