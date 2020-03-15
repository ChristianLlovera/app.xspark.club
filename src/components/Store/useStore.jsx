import { useContext } from 'react'
import { StoreContext } from './'

export const useStore = () => {

    const [Store, setStore] = useContext(StoreContext)
    const [State] = Store

    const getStore = () => State

    const getMenu = () => State.menu

    const setMenu = data => {
        const status = State.menu
        State.menu = !status
        setStore([State])
    }

    const getPlayer = () => State.player

    const setPlayer = data => {
        State.player = data
        setStore([State])
    }

    return {
        getPlayer,
        setPlayer,
        getStore,
        getMenu,
        setMenu
    }
}

export default useStore