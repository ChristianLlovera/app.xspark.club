import React from 'react'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import NoFount from '../Pages/404'
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = () => {

    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/profile'} component={Profile} />
            <Route component={NoFount} />
        </Switch>
    )
}

export default Routes