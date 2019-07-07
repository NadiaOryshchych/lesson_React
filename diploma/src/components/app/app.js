import React from 'react';
import AppHeader from '../app-header';
import AppFooter from '../app-footer';
import {MainPage, CoffeePage, PleasurePage, CoffeeItem} from '../pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <Router>
            <div className="app">
                <AppHeader />

                <Switch>
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/our-coffee' component={CoffeePage}/>
                    <Route path='/for-your-pleasure' component={PleasurePage}/>
                    <Route path='/:address' /*component={CoffeeItem}*/ render={
                        ({match}) => {
                            const address = match.params;
                            return  <CoffeeItem coffeeName={address} />
                        }
                    }/>
                </Switch>

                <AppFooter />
            </div>
        </Router>
    )
}

export default App;