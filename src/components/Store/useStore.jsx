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

    const addProfile = data => {
        State.profiles.push({ ...data })
        setStore([State])
        return State.profiles.length - 1
    }

    const listProfile = () => {
        const { profiles } = State
        const result = [...profiles]
        return result
    }

    const getProfile = (id) => {
        const { profiles } = State
        if (profiles[id]) {
            const result = { ...profiles[id] }
            return result
        } else {
            return false
        }
    }

    const setProfile = (id, data) => {
        State.profiles[id] = data
        setStore([State])
    }

    return {
        addProfile,
        listProfile,
        getProfile,
        setProfile,
        getMenu,
        setMenu
    }
}

export default useStore