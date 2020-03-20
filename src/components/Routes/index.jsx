import React from 'react'
import Home from '../Pages/Home'
import ShowProfile from '../Pages/Profile/show'
import EditProfile from '../Pages/Profile/edit'
import NoFount from '../Pages/404'
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = () => {

    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/profile-show'} component={ShowProfile} />
            <Route path={'/profile-edit'} component={EditProfile} />
            <Route component={NoFount} />
        </Switch>
    )
}

export default Routes