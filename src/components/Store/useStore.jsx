import { useContext } from 'react'
import { StoreContext } from './'

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

    const setIsLogin = () => {
        const isLogin = getIsLogin()
        State.isLogin = !isLogin
        setStore([State])
    }

    return {
        getMenu,
        setMenu,
        getIsLogin,
        setIsLogin
    }
}

export default useStore