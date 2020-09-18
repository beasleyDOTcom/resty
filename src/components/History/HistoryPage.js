import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../Home';

function Main() {

    let stuff = [1,2,3,4,5,5,6,6,7];
    let items = stuff.map((item, i)=> <li key={i}>{item}</li>)
    return (
        <main>
            <Switch>
                <Route exact path="/bow">
                    //whatever we want to happen here typiccally single thing
                    <Home/>//render the home component
                </Route>
                <Route path = "/chica">
                    <ul>
                        {items}
                    </ul>
                </Route>
            </Switch>
        </main>
    )
}

export default Main
