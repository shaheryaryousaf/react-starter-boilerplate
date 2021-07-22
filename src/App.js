import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Import Components
import Home from './screens/Home'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path='/' />
      </Switch>
    </Router>
  )
}

export default App
