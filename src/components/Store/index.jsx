import React, { useState } from 'react'

const structure = {
    menu: false,
    player: {
        info: {
            name: 'Juan Vicente',
            lastname: 'Rojas Martin',
            birthdate: '14/12/2011',
            document: '102030405',
            academy: 'FÚTBOL ACADEMY',
            number: '07',
            director: 'Nombre del director',
            coach: 'Nombre del entrenador',
            ranking: 7
        },
        physical: {
            speed: 5,
            agility: 3,
            strength: 2,
            resistance: 7,
            coordination: 9
        },
        technical: {
            driving: 4,
            dodge: 3,
            shot: 8,
            pass: 2,
            control: 4
        },
        observation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        insurance: {
            company: 'Seguros No Name',
            number: '23343223'
        },
        attender: {
            name: 'Juan Rojas',
            document: '12343345',
            mail: 'juancrojasmartin@hotmail.com',
            phone: '62703312',
            emergency: '62703312'
        }
    }
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

