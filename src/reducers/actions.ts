import { Coffee } from "../context/CartCoffeeProvider";

export enum ActionTypes {
    // eslint-disable-next-line no-unused-vars
    ADD_NEW_COFFEE = 'ADD_NEW_COFFEE',
    // eslint-disable-next-line no-unused-vars
    REMOVE_COFFEE = 'REMOVE_COFFEE',
    // eslint-disable-next-line no-unused-vars
    CHANGE_QUANTITY = 'CHANGE_QUANTITY',
    // eslint-disable-next-line no-unused-vars
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