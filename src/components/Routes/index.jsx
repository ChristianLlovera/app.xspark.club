import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import ProfileList from '../Pages/Profile/list'
import ProfileCreate from '../Pages/Profile/create'
import ProfileShow from '../Pages/Profile/show'
import ProfileEdit from '../Pages/Profile/edit'
import Login from '../Pages/Login'
import SetInfo from '../Pages/Account/setInfo'
import SetPassword from '../Pages/Account/setPassword'
import SetEmail from '../Pages/Account/setEmail'
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

            <Route path={'/login'} >
                <Middleware actions={['is-not-auth']} >
                    <Login />
                </Middleware>
            </Route >

            <Route path={'/account/set/info'} >
                <Middleware actions={['is-auth']}>
                    <SetInfo />
                </Middleware>
            </Route >

            <Route path={'/account/set/password'} >
                <Middleware actions={['is-auth']}>
                    <SetPassword />
                </Middleware>
            </Route >

            <Route path={'/account/set/email'} >
                <Middleware actions={['is-auth']}>
                    <SetEmail />
                </Middleware>
            </Route >

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