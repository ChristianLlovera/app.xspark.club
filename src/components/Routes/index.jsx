import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import ProfileList from '../Pages/Profile/list'
import ProfileCreate from '../Pages/Profile/create'
import ProfileShow from '../Pages/Profile/show'
import ProfileEdit from '../Pages/Profile/edit'
import NoFount from '../Pages/404'
import Middleware from '../Middlewares'

const Routes = () => {

    return (
        <Switch>

            <Route path={'/'} exact >
                <Middleware >
                    <Home />
                </Middleware>
            </Route >

            <Route path={'/profile/list'} >
                <Middleware>
                    <ProfileList />
                </Middleware>
            </Route >

            <Route path={'/profile/create'} >
                <Middleware>
                    <ProfileCreate />
                </Middleware>
            </Route >

            <Route path={'/profile/show/:id'} >
                <Middleware actions={['is-profile']}>
                    <ProfileShow />
                </Middleware>
            </Route >

            <Route path={'/profile/edit/:id'} >
                <Middleware actions={['is-profile']}>
                    <ProfileEdit />
                </Middleware>
            </Route >

            <Route component={NoFount} />
        </Switch>
    )
}

export default Routes