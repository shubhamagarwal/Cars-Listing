import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Error from './Views/Error';
import Detail from './Views/Detail';

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/detail/:carId" component={Detail} />
                <Route path="*" component={Error} />
            </Switch>
        </Router>
    )
}

export default Routing;