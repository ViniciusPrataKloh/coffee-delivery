import { createContext, ReactNode, useReducer } from 'react';
import coffeeList from '../coffee.seed.json';
import { addNewCoffeeAction, changeCoffeeQuantityAction, removeCoffeeAction } from '../reducers/actions';
import { CartStateReducer } from '../reducers/reducer';

export interface Coffee {
    id: string;
    title: string;
    subtitle: string;
    tags: string[];
    price: number;
    imageUrl: string;
}

export interface cartItem {
    coffee: Coffee;
    quantity: number;
}

interface CartCoffeeContextProviderProps {
    children: ReactNode;
}

interface ICartContext {
    cartItemsState: cartItem[];
    coffees: Coffee[];
    totalCoffeesInCart: number;
    insertItemToCart: (coffeeId: string, quantity: number) => void;
    removerItemToCart: (coffeeIdToRemove: string) => void;
    changeQuantityOfItem: (coffeeId: string, quantity: number) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartCoffeeContextProvider({ children }: CartCoffeeContextProviderProps) {
    const coffees: Coffee[] = coffeeList.coffees;

    const [cartItemsState, dispatch] = useReducer(CartStateReducer, []);

    const totalCoffeesInCart = cartItemsState.length;

    function insertItemToCart(coffeeId: string, quantity: number) {
        const coffee: Coffee = getSelectedCoffeeById(coffeeId);
        dispatch(addNewCoffeeAction(coffee, quantity))
    }

    function removerItemToCart(coffeeIdToRemove: string) {
        dispatch(removeCoffeeAction(coffeeIdToRemove));
    }

    function changeQuantityOfItem(coffeeId: string, quantity: number) {
        const coffee: Coffee = getSelectedCoffeeById(coffeeId);
        dispatch(changeCoffeeQuantityAction(coffee, quantity))
    }

    function getSelectedCoffeeById(coffeeId: string): Coffee {
        const coffee = coffees.find(coffee => coffee.id === coffeeId);
        return coffee!;
    }

    console.log(cartItemsState);

    return (
        <CartContext.Provider value={{
            cartItemsState,
            coffees,
            totalCoffeesInCart,
            insertItemToCart,
            removerItemToCart,
            changeQuantityOfItem
        }}>
            {children}
        </CartContext.Provider>
    )
}