import React from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import {MainPage, CoffeePage, PleasurePage} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <div style={{background: `yellow`}} className="app">
                <AppHeader />

                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/our-coffee' component={CoffeePage}/>
                    <Route path='/for-your-pleasure' component={PleasurePage}/>
                </Switch>

                <AppFooter />
            </div>
        </Router>
    )
}

export default App;