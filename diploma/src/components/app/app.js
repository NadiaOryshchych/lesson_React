import React from 'react';
import {MainPage, CoffeePage, PleasurePage, CoffeeItem} from '../pages';
import {Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/our-coffee' component={CoffeePage}/>
                <Route path='/for-your-pleasure' component={PleasurePage}/>
                <Route path='/:address'component={CoffeeItem}/>
            </Switch>
        </div>
    )
}

export default App;