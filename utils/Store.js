import Cookies from "js-cookie"
import { createContext, useReducer } from "react"

export const Store = createContext()

const initialState = {
    // darkMode: false, 
    cart: {
        cartItems: Cookies.get('cartItems') ? JSON.parse(Cookies.get('cartItems')) : []
    }
}

function reducer(state, action) {
    switch (action.type) {
        /* case "DARK_MODE_ON":
            return {...state, darkMode: true}
            break;
        case "DARK_MODE_OFF":
            return {...state, darkMode: false}
            break; */
        case "CART_ADD_ITEM": {
            const newItem = action.payload
            const existItem = state.cart.cartItems.find((item) => item._id === newItem._id)
            const cartItems = existItem ? state.cart.cartItems.map((item) => item.name === existItem.name ? newItem : item ) : [...state.cart.cartItems, newItem]
            Cookies.set('cartItems', JSON.stringify(cartItems))
            return { ...state, cart: { ...state.cart, cartItems } }
        }
        default:
            return state;
    }
}

export function StoreProvider (props){
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    return <Store.Provider value={value}>{props.children}</Store.Provider>
} 