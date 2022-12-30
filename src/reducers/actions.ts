import { Coffee } from "../context/CartCoffeeContextProvider";

export enum ActionTypes {
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    CHANGE_QUANTITY = 'CHANGE_QUANTITY',
    CLEAR_CART = 'CLEAR_CART'
}

export type ActionTypesProps =
    | { type: ActionTypes.ADD_NEW_COFFEE; payload: { coffee: Coffee, quantity: number } }
    | { type: ActionTypes.REMOVE_COFFEE; payload: { coffeeId: string } }
    | { type: ActionTypes.CHANGE_QUANTITY; payload: { coffee: Coffee, quantity: number } }
    | { type: ActionTypes.CLEAR_CART; }

export function addNewCoffeeAction(coffee: Coffee, quantity: number): ActionTypesProps {
    return {
        type: ActionTypes.ADD_NEW_COFFEE,
        payload: {
            coffee,
            quantity
        }
    }
}

export function removeCoffeeAction(coffeeId: string): ActionTypesProps {
    return {
        type: ActionTypes.REMOVE_COFFEE,
        payload: {
            coffeeId
        }
    }
}

export function changeCoffeeQuantityAction(coffee: Coffee, quantity: number): ActionTypesProps {
    return {
        type: ActionTypes.CHANGE_QUANTITY,
        payload: {
            coffee,
            quantity
        }
    }
}

export function clearCartAction(): ActionTypesProps {
    return {
        type: ActionTypes.CLEAR_CART
    }
}