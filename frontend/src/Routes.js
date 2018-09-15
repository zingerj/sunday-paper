import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Paper } from './components'

const Routes = () => (
    <Router>
        <div>
            <Route exact path='/' render={() => <div>Welcome!</div>} />
            <Route path='/:userId/paper/:paperId' component={Paper} />
        </div>
    </Router>
)

export default Routes
