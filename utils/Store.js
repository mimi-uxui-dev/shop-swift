import { createContext, useReducer } from "react"

export const Store = createContext()

const initialState = {
    darkMode: false
}

function reducer(state, action) {
    switch (action.type) {
        case "DARK_MODE_ON":
            return {...state, darkMode: true}
            break;
        case "DARK_MODE_OFF":
            return {...state, darkMode: false}
            break;
        default:
            return state;
    }
}

export function StoreProvider (props){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
}