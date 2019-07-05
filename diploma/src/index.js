import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from  'react-router-dom';
import ErrorBoundry from './components/error-boundry';
import CoffeeService from './services/coffee-service';
import CoffeeServiceContext from './components/coffee-service-context/';
import store from './store';

import './index.sass';

const coffeeService = new CoffeeService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <CoffeeServiceContext.Provider value={coffeeService}>
                <Router>
                    <App/>
                </Router>
            </CoffeeServiceContext.Provider>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root'));

