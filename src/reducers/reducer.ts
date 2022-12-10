import { selectedCoffee } from "../context/CartCoffeeProvider";

export function CartStateReducer(state: selectedCoffee[], action: any) {
    if (action.type == 'ADD_NEW_COFFEE') {
        const selectedCoffee: selectedCoffee = Object.assign({
            coffee: action.payload.coffee,
            quantity: action.payload.quantity
        });
        return [...state, selectedCoffee];
    }

    if (action.type === 'REMOVE_COFFEE') {
        const newState = state.filter(item => {
            return item.coffee.id !== action.payload.coffee.id;
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
                console.log(updateCoffee)
                return updateCoffee;
            } else {
                return item;
            }
        });
    }

    return state;
}
