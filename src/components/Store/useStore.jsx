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

    const setMenu = data => {
        const menu = getMenu()
        State.menu = !menu
        setStore([State])
    }

    const getPlayer = () => {
        const { player } = State
        const result = { ...player }
        return result
    }

    const setPlayer = data => {
        State.player = data
        setStore([State])
    }

    return {
        getPlayer,
        setPlayer,
        getMenu,
        setMenu
    }
}

export default useStore