import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Views/Home'
import ProfileList from '../Views/Profile/list'
import ProfileCreate from '../Views/Profile/create'
import ProfileShow from '../Views/Profile/show'
import ProfileEdit from '../Views/Profile/edit'
import Login from '../Views/Account/login'
import Register from '../Views/Account/register'
import SetInfo from '../Views/Account/setInfo'
import SetPassword from '../Views/Account/setPassword'
import ResetPassword from '../Views/Account/resetPassword'
import SetEmail from '../Views/Account/setEmail'
import NoFount from '../Views/404'
import Middleware from '../Middlewares'

const Routes = () => {


    return (
        <Switch>

            <Route path={'/'} exact >
                <Middleware >
                    <Home />
                </Middleware>
            </Route>

            <Route path={'/account/login'} >
                <Middleware actions={['is-not-auth']} >
                    <Login />
                </Middleware>
            </Route>

            <Route path={'/account/register'} >
                <Middleware actions={['is-not-auth']}>
                    <Register />
                </Middleware>
            </Route>

            <Route path={'/account/set/info'} >
                <Middleware actions={['is-auth']}>
                    <SetInfo />
                </Middleware>
            </Route>

            <Route path={'/account/set/password'} >
                <Middleware actions={['is-auth']}>
                    <SetPassword />
                </Middleware>
            </Route>

            <Route path={'/account/set/email'} >
                <Middleware actions={['is-auth']}>
                    <SetEmail />
                </Middleware>
            </Route >

            <Route path={'/account/reset/password'} >
                <Middleware actions={['is-not-auth']}>
                    <ResetPassword />
                </Middleware>
            </Route>

            <Route path={'/profile/list'} >
                <Middleware actions={['is-auth', 'is-admin']}>
                    <ProfileList />
                </Middleware>
            </Route >

            <Route path={'/profile/create'} >
                <Middleware actions={['is-auth', 'is-admin']}>
                    <ProfileCreate />
                </Middleware>
            </Route >

            <Route path={'/profile/show/:id'} >
                <Middleware actions={['is-auth', 'is-admin', 'is-profile']}>
                    <ProfileShow />
                </Middleware>
            </Route >

            <Route path={'/profile/edit/:id'} >
                <Middleware actions={['is-auth', 'is-admin', 'is-profile']}>
                    <ProfileEdit />
                </Middleware>
            </Route >

            <Route component={NoFount} />
        </Switch>
    )
}

export default Routes