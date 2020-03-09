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

    return {
        getStore,
        getMenu,
        setMenu
    }
}

export default useStore