import React from 'react'
import Home from '../Pages/Home'
import ProfileList from '../Pages/Profile/list'
import ProfileShow from '../Pages/Profile/show'
import ProfileEdit from '../Pages/Profile/edit'
import NoFount from '../Pages/404'
import { Switch, Route, Redirect } from 'react-router-dom'

const Routes = () => {

    return (
        <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/profile-list'} component={ProfileList} />
            <Route path={'/profile-show'} component={ProfileShow} />
            <Route path={'/profile-edit'} component={ProfileEdit} />
            <Route component={NoFount} />
        </Switch>
    )
}

export default Routes