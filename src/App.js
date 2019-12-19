import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Listing from './Listing';
import Footer from './Views/Footer';
import Error from './Views/Error';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Listing} />
                <Route exact path="/about" component={Footer} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}

export default App;