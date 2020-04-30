import React, { useState } from 'react'

const structure = {
    menu: false,
    isLogin: false,
    isAdmin: false
}

export const StoreContext = React.createContext({})

export const StoreProvider = props => {

    const [Store, setStore] = useState([structure])

    return (
        <StoreContext.Provider value={[Store, setStore]}>
            {props.children}
        </StoreContext.Provider>
    )
}

