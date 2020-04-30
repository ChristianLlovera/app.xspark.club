import { useContext } from 'react'
import { StoreContext } from '../Store'

export const useStore = () => {

    const [Store, setStore] = useContext(StoreContext)
    const [State] = Store

    const getMenu = () => {
        const state = { ...State }
        const { menu } = state
        return menu
    }

    const setMenu = () => {
        const menu = getMenu()
        State.menu = !menu
        setStore([State])
    }

    const getIsLogin = () => {
        const state = { ...State }
        const { isLogin } = state
        return isLogin
    }

    const setIsLogin = status => {
        State.isLogin = status
        setStore([State])
    }

    const getIsAdmin = () => {
        const state = { ...State }
        const { isAdmin } = state
        return isAdmin
    }

    const setIsAdmin = status => {
        State.isAdmin = status
        setStore([State])
    }

    return {
        getMenu,
        setMenu,
        getIsLogin,
        setIsLogin,
        getIsAdmin,
        setIsAdmin
    }
}

export default useStore