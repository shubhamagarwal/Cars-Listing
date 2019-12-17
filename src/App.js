import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Listing from './Listing';
import Footer from './Views/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Listing} />
                <Route exact path="/about" component={Footer} />
            </div>
        </Router>
    )
}

export default App;