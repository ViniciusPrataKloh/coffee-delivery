import { selectedCoffee } from "../context/CartCoffeeProvider";
import { ActionTypesProps } from "./actions";

export function CartStateReducer(state: selectedCoffee[], action: ActionTypesProps) {
    if (action.type == 'ADD_NEW_COFFEE') {
        const selectedCoffee: selectedCoffee = Object.assign({
            coffee: action.payload.coffee,
            quantity: action.payload.quantity
        });
        return [...state, selectedCoffee];
    }

    if (action.type === 'REMOVE_COFFEE') {
        const newState = state.filter(item => {
            return item.coffee.id !== action.payload.coffeeId;
        });

        return newState;
    }

    if (action.type === 'CHANGE_QUANTITY') {
        return state.map(item => {
            if (item.coffee.id === action.payload.coffee.id) {
                const updateCoffee: selectedCoffee = Object.assign({
                    coffee: action.payload.coffee,
                    quantity: action.payload.quantity
                });
                return updateCoffee;
            } else {
                return item;
            }
        });
    }

    if (action.type === 'CLEAR_CART') {
        return [];
    }

    return state;
}
